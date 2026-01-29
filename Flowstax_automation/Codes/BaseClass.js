const { chromium, firefox } = require('playwright');
const fs = require('fs');
const path = require('path');

class BaseClass {
  constructor() {
    this.browser = null;
    this.page = null;
    this.profilePath = null;
  }

  async browserLaunch(browserType = 'chrome') {
    const uniqueId = Date.now() + Math.random();
    if (browserType.toLowerCase() === 'chrome') {
      this.profilePath = `./temp-profile-${uniqueId}`;
      const context = await chromium.launchPersistentContext(this.profilePath, {
        headless: process.env.CI ? true : false,
        viewport: null,
        recordVideo: process.env.CI ? { dir: 'videos/' } : undefined,
        args: [
          '--start-maximized', 
          '--force-device-scale-factor=1',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding'
        ]
      });
      this.browser = context;
      this.page = context.pages()[0] || await context.newPage();
    } else if (browserType.toLowerCase() === 'firefox') {
      this.browser = await firefox.launch({ headless: false });
      const context = await this.browser.newContext({ viewport: null });
      this.page = await context.newPage();
    }
  }

  async urlLaunch(url) {
    await this.page.goto(url);
  }

  async clickAddNew() {
    await this.page.click("xpath=//*[text()='Add New']");
  }

  async Date(index) {
    await this.page.click(`xpath=(//*[@role='button'])[${index}]`);
  }

  async clickOkButton() {
    await this.page.click("xpath=//*[text()='OK']");
  }

  async TabIndex(index) {
    await this.page.evaluate((idx) => {
      const element = document.evaluate(`(//*[@tabindex='0'])[${idx}]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.scrollIntoView({ block: 'center' });
    }, index);
    await this.page.waitForTimeout(300);
    await this.page.click(`xpath=(//*[@tabindex='0'])[${index}]`);
  }

  async clickRoleButtonByIndex(index) {
    await this.page.click(`xpath=(//*[@role='button'])[${index}]`);
  }

  async clickCheckboxByIndex(index) {
    await this.page.click(`xpath=(//*[@role='checkbox'])[${index}]`);
  }

  async DateclickOk(index) {
    await this.page.click(`xpath=(//*[@role='button'])[${index}]`);
    await this.page.click("xpath=//*[text()='OK']");
  }

  async inputareasindex(index, text) {
    const locator = `xpath=(//*[@autocomplete='off'])[${index}]`;
    await this.page.waitForSelector(locator, { state: 'visible' });
    await this.page.click(locator);
    await this.page.fill(locator, text);
  }

  async radiobutton(index) {
    await this.page.click(`xpath=(//*[@role='radio'])[${index}]`);
  }

  async switchEnable(index) {
    await this.page.click(`xpath=(//*[@role='switch'])[${index}]`);
  }

  async NextButton() {
    await this.page.waitForSelector("xpath=(//*[text()='Next'])[1]", { state: 'visible', timeout: 10000 });
    await this.page.click("xpath=(//*[text()='Next'])[1]");
    await this.page.waitForTimeout(2000);
  }

  async SubmitButton() {
    await this.page.click("xpath=(//*[text()='Submit'])[1]");
  }

  async clicking(xpath) {
    await this.page.click(`xpath=${xpath}`);
  }

  async textpath(text) {
    await this.page.click(`xpath=(//*[text()='${text}'])[1]`);
  }

  // Force-click an element by its exact text even if it's not visible.
  async clickHiddenByText(text, timeout = 5000) {
    const xpath = `//*[text()='${text}']`;
    try {
      // Wait for element to be attached to DOM
      await this.page.waitForSelector(`xpath=${xpath}`, { state: 'attached', timeout });
      await this.page.evaluate((xp) => {
        const el = document.evaluate(xp, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (el) {
          el.scrollIntoView({ block: 'center' });
          // Try to make it interactable
          el.style.display = 'block';
          el.style.visibility = 'visible';
          el.style.opacity = '1';
          el.style.pointerEvents = 'auto';
          // Use click
          el.click();
        }
      }, xpath);
      // give the UI a moment to respond
      await this.page.waitForTimeout(300);
    } catch (err) {
      console.error(`clickHiddenByText failed for ${text}: ${err.message}`);
      try { await this.screenCapture(`clickHiddenByText_${text.replace(/\s+/g,'_')}_error`); } catch (e) {}
      throw err;
    }
  }

  async EditButton() {
    await this.page.click("xpath=(//*[text()='Edit'])[1]");
  }

  async typing(text, selector = null) {
    // Try a set of candidate selectors; if selector is provided, try it first.
    const candidates = selector ? [selector] : [
      "xpath=(//*[@autocomplete='off'])[1]",
      "xpath=//input[not(@disabled) and not(@type='hidden')][1]",
      "xpath=//textarea[not(@disabled)][1]",
      "xpath=(//flt-semantics//input)[1]"
    ];

    for (const sel of candidates) {
      try {
        await this.page.waitForSelector(sel, { state: 'visible', timeout: 3000 });
        await this.page.click(sel);
        await this.page.fill(sel, text);
        // verify value
        const val = await this.page.evaluate((s) => {
          const xpath = s.replace(/^xpath=/, '');
          const el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          return el ? (el.value || el.textContent || '') : '';
        }, sel);
        if (val && val.toString().trim() !== '') return;
      } catch (err) {
        // try next candidate
      }
    }

    // If none worked, capture screenshot and throw
    console.error('typing failed for text:', text);
    try { await this.screenCapture(`typing_error_${text.replace(/\s+/g,'_')}`); } catch (e) {}
    throw new Error(`typing: could not enter text '${text}' into any candidate selector`);
  }

  async typingByIndex(index, text) {
    const xpath = `(//*[@autocomplete='off'])[${index}]`;
    try {
      await this.page.waitForSelector(`xpath=${xpath}`, { state: 'visible', timeout: 5000 });
      await this.page.click(`xpath=${xpath}`);
      await this.page.fill(`xpath=${xpath}`, text);
      const val = await this.page.evaluate((xp) => {
        const xpath = xp.replace(/^xpath=/, '');
        const el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        return el ? (el.value || el.textContent || '') : '';
      }, `xpath=${xpath}`);
      if (!val || val.toString().trim() === '') {
        throw new Error('typingByIndex verification failed');
      }
    } catch (err) {
      console.error('typingByIndex failed for index:', index, err.message);
      try { await this.screenCapture(`typingByIndex_error_${index}`); } catch (e) {}
      throw err;
    }
  }

  async PleaseSelect() {
    await this.page.click("xpath=(//*[text()='Please select'])[1]");
  }
  async uploadFile(selector, filePath) {
    try {
      console.log('Uploading file:', filePath, 'to selector:', selector);
      await this.page.waitForTimeout(1500);
      
      // Ensure file exists
      if (!fs.existsSync(filePath)) {
        console.error('File does not exist:', filePath);
        throw new Error(`File does not exist: ${filePath}`);
      }

      // Trigger file chooser and upload the file
      console.log('Clicking selector to trigger file chooser:', selector);
      const xpathSelector = selector.startsWith('xpath=') ? selector : `xpath=${selector}`;
      const [fileChooser] = await Promise.all([
        this.page.waitForEvent('filechooser', { timeout: 12000 }),
        this.page.click(xpathSelector)
      ]);
      await fileChooser.setFiles(filePath);
      await this.page.waitForTimeout(2000);
      console.log('File uploaded successfully:', filePath);
    } catch (err) {
      console.error('Upload failed:', err.message);
      await this.page.waitForTimeout(2000);
      throw err;
    }
  }

  async uploadMultipleFiles(selector, filePaths) {
    try {
      console.log('Uploading multiple files:', filePaths, 'to selector:', selector);
      await this.page.waitForTimeout(1500);
      
      // Ensure all files exist
      for (const filePath of filePaths) {
        if (!fs.existsSync(filePath)) {
          console.error('File does not exist:', filePath);
          return;
        }
      }

      // Trigger file chooser and upload all files at once
      console.log('Clicking selector to trigger file chooser:', selector);
      try {
        const xpathSelector = selector.startsWith('xpath=') ? selector : `xpath=${selector}`;
        const [fileChooser] = await Promise.all([
          this.page.waitForEvent('filechooser', { timeout: 12000 }),
          this.page.click(xpathSelector)
        ]);
        // setFiles accepts array of file paths
        await fileChooser.setFiles(filePaths);
        await this.page.waitForTimeout(4000);
        console.log('All files uploaded successfully:', filePaths);
        return;
      } catch (chooserErr) {
        console.error('File chooser method failed:', chooserErr.message);
      }
      
    } catch (err) {
      console.error('Upload failed:', err.message);
      await this.page.waitForTimeout(2000);
    }
  }

  async selectdate(dateButtonIndex) {
    await this.page.click("xpath=//*[@aria-label='YYYY-MM-DD']");
    await this.page.waitForTimeout(1000);
    await this.page.click(`xpath=(//*[@role='button'])[${dateButtonIndex}]`);
    await this.page.waitForTimeout(1000);
    await this.page.click("xpath=//*[text()='OK']");
  }

  async backbutton() {
    await this.page.click("xpath=(//*[@role='button'])[4]");
  }

  async performLogin(email, password) {
    try {
      const emailLocator = "xpath=(//*[@autocomplete='off'])[1]";
      const passLocator = "xpath=(//*[@autocomplete='off'])[2]";
      await this.page.waitForSelector(emailLocator, { state: 'visible', timeout: 10000 });
      await this.page.click(emailLocator);
      await this.page.fill(emailLocator, email);

      // verify value was entered; retry once if empty
      const currentEmail = await this.page.evaluate((sel) => {
        const xpath = sel.replace(/^xpath=/, '');
        const el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        return el ? el.value || el.textContent || '' : '';
      }, emailLocator);
      if (!currentEmail || currentEmail.toString().trim() === '') {
        await this.page.click(emailLocator);
        await this.page.fill(emailLocator, email);
      }

      await this.page.keyboard.press('Tab');
      await this.page.waitForSelector(passLocator, { state: 'visible', timeout: 5000 });
      await this.page.click(passLocator);
      await this.page.fill(passLocator, password);

      // verify password was entered; retry once if empty
      const currentPass = await this.page.evaluate((sel) => {
        const xpath = sel.replace(/^xpath=/, '');
        const el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        return el ? (el.value || el.textContent || '') : '';
      }, passLocator);
      if (!currentPass || currentPass.toString().trim() === '') {
        await this.page.click(passLocator);
        await this.page.fill(passLocator, password);
      }

      // Ensure the login button is visible and click it robustly
      const loginBtn = "xpath=//*[text()='Login']";
      await this.page.waitForSelector(loginBtn, { state: 'visible', timeout: 10000 });
      await this.page.click(loginBtn);
      await this.page.waitForTimeout(1000);
    } catch (err) {
      console.error('performLogin failed:', err.message);
      try { await this.screenCapture('performLogin_error'); } catch (e) {}
      throw err;
    }
  }

  async performLogout() {
    await this.page.evaluate(() => {
      const button = document.evaluate("(//*[@role='button'])[3]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (button) button.click();
    });
    await this.page.waitForTimeout(1000);
    await this.page.evaluate(() => {
      const group = document.evaluate("//*[@role='group']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (group) group.click();
    });
    await this.page.waitForTimeout(2000);
    await this.page.evaluate(() => {
      const logout = document.evaluate("//*[text()='Logout']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (logout) logout.click();
    });
  }

  async clearAndTypeText(xpath, newText) {
    await this.page.click(`xpath=${xpath}`);
    await this.page.keyboard.press('Control+A');
    await this.page.fill(`xpath=${xpath}`, newText);
  }

  async clearAndTypeAutoCompleteByIndex(index, newText) {
    const xpath = `(//*[@autocomplete='off'])[${index}]`;
    await this.page.click(`xpath=${xpath}`);
    await this.page.waitForTimeout(500);
    await this.page.keyboard.press('Control+A');
    await this.page.fill(`xpath=${xpath}`, newText);
  }

  async thread() {
    await this.page.waitForTimeout(2000);
  }

  async threadhalf() {
    await this.page.waitForTimeout(500);
  }

  async threadone() {
    await this.page.waitForTimeout(500);
  }

  async wait(milliseconds) {
    await this.page.waitForTimeout(milliseconds);
  }

  async maximize() {
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  async buttonClick(selector) {
    await this.page.click(selector);
  }

  async sendText(selector, text) {
    await this.page.fill(selector, text);
  }

  async screenCapture(filename) {
    await this.page.screenshot({ path: `${filename}.png`, fullPage: true });
  }

  async navigationRefresh() {
    await this.page.reload();
  }

  async navigationback() {
    await this.page.goBack();
  }

  async scrollIntoView(selector) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  async jsclick(selector) {
    await this.page.evaluate((sel) => {
      document.querySelector(sel).click();
    }, selector);
  }

  async selectbyIndex(selector, index) {
    await this.page.selectOption(selector, { index: index });
  }

  async selectbyvalue(selector, value) {
    await this.page.selectOption(selector, value);
  }

  async selectbyvisibletext(selector, text) {
    await this.page.selectOption(selector, { label: text });
  }

  async quitbrowser() {
    try {
      if (this.page) {
        await this.page.close();
      }
      if (this.browser) {
        await this.browser.close();
      }
      if (this.profilePath && fs.existsSync(this.profilePath)) {
        fs.rmSync(this.profilePath, { recursive: true, force: true });
      }
    } catch (error) {
      console.log('Browser already closed');
    }
  }

  async tabNavigation(count) {
    for (let i = 0; i < count; i++) {
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(150);
    }
  }

  async EyeButton() {
    await this.page.click("xpath=//flt-semantics[@role='button' and @tabindex='0' and contains(@style, 'transform: matrix(1, 0, 0, 1, 100, 7.5)')]");
  }

  async clickAutoCompleteByIndex(index) {
    await this.page.click(`xpath=(//*[@autocomplete='off'])[${index}]`);
  }

  async Texthome(text) {
    await this.page.click(`xpath=(//flt-semantics[@role='button' and contains(text(),'${text}')])[1]`);
  }

  async threedot2() {
    await this.page.waitForTimeout(2000);
    try {
      await this.page.click("xpath=(//*[@tabindex='0'])[16]", { timeout: 5000 });
    } catch (error) {
      await this.page.evaluate(() => {
        const element = document.evaluate("(//*[@tabindex='0'])[16]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) element.click();
      });
    }
  }

  async threedot() {
    await this.page.waitForTimeout(2000);
    try {
      await this.page.click("xpath=(//*[@tabindex='0'])[18]", { timeout: 5000 });
    } catch (error) {
      await this.page.evaluate(() => {
        const element = document.evaluate("(//*[@tabindex='0'])[18]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) element.click();
      });
    }
  }

  async threedot3() {
    await this.page.waitForTimeout(2000);
    try {
      await this.page.click("xpath=(//*[@tabindex='0'])[20]", { timeout: 5000 });
    } catch (error) {
      await this.page.evaluate(() => {
        const element = document.evaluate("(//*[@tabindex='0'])[20]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (element) element.click();
      });
    }
  }

  async clickByExactText(text) {
    await this.page.evaluate((txt) => {
      const elements = Array.from(document.querySelectorAll('flt-semantics')).filter(el => {
        const elText = el.textContent.trim();
        const isVisible = el.offsetParent !== null;
        return elText === txt && isVisible;
      });
      if (elements.length > 0) {
        elements[0].scrollIntoView({ block: 'center' });
      }
    }, text);
    await this.page.waitForTimeout(500);
    await this.page.evaluate((txt) => {
      const elements = Array.from(document.querySelectorAll('flt-semantics')).filter(el => {
        const elText = el.textContent.trim();
        const isVisible = el.offsetParent !== null;
        return elText === txt && isVisible;
      });
      if (elements.length > 0) {
        elements[0].click();
      }
    }, text);
  }
}

module.exports = BaseClass;
