const BaseClass = require('../../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');
    await base.maximize();

    await base.page.waitForTimeout(2000);
    await base.thread();
    await base.page.click("xpath=//*[@aria-label='Enter registered email']");
    await base.wait(10);
    await base.page.waitForTimeout(1000);
    await base.page.fill("xpath=//*[@aria-label='Enter registered email']", 'BranchTeam_KBZPay@gmail.com');
    await base.wait(50);
    await base.page.keyboard.press('Tab');
    await base.page.waitForTimeout(200);
    await base.wait(50);
    await base.page.fill("xpath=//flt-semantics[@aria-label='Enter Password']//input[@data-semantics-role='text-field']", '98DjpLo4WVsdI5HILPVI');
    await base.wait(100);
    await base.page.click("xpath=//*[text()='Login']");
    await base.page.waitForTimeout(2000);

    await base.thread();
    await base.page.click("xpath=//*[text()='KBZPay Service Operations']");

    await base.thread();
    await base.page.waitForTimeout(2000);
    await base.clickAddNew();
    await base.threadhalf();
    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');
    await base.threadhalf();
    await base.PleaseSelect();
    await base.page.waitForTimeout(1000);
    await base.page.evaluate(() => {
      const xpath = "//*[text()='Account Close']";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) {
        element.scrollIntoView({ block: 'center' });
        element.click();
      }
    });
    await base.threadhalf();

    await base.threadone();
    await base.inputareasindex(1, '9455665111');
    await base.threadhalf();
    await base.page.click("xpath=(//*[@aria-label='YYYY-MM-DD'])[1]");
    await base.threadhalf();
    await base.DateclickOk(8);
    await base.threadhalf();
    await base.inputareasindex(2, 'Cus name is Accountclose');
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[4]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
    await base.radiobutton(1);
    await base.threadone();

    await base.thread();
    await base.clickRoleButtonByIndex(3);
    await base.threadhalf();
    await base.textpath('2');
    await base.threadhalf();
    await base.clickRoleButtonByIndex(4);
    await base.threadhalf();
    await base.textpath('LAKANA');
    await base.threadhalf();
    await base.clickRoleButtonByIndex(5);
    await base.threadhalf();
    await base.textpath('T');
    await base.threadone();
    await base.inputareasindex(5, '12356');
    await base.threadone();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
    await base.inputareasindex(8, '8/96,North America');
    await base.threadhalf();
    await base.inputareasindex(9, 'Danny');
    await base.threadone();
    await base.inputareasindex(10, '85000');
    await base.threadhalf();
    await base.inputareasindex(11, '95656565');
    await base.threadhalf();
    await base.threadone();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[12]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[13]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadhalf();
    await base.inputareasindex(14, 'COMPSD4SD554');
    await base.threadhalf();
    await base.inputareasindex(15, 'NRCD9874');
    await base.threadhalf();
    await base.clickAutoCompleteByIndex(16);
    await base.threadhalf();
    await base.textpath('OK');
    await base.threadhalf();
    await base.textpath('OK');
    await base.threadhalf();
    await base.inputareasindex(19, 'No reason as of now');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();
    await base.tabNavigation(2);

    await base.EyeButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadhalf();
    await base.EditButton();
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(2, 'Flow 7 - Kbz ');
    await base.threadhalf();
    await base.clickAutoCompleteByIndex(3);
    await base.threadhalf();
    await base.DateclickOk(25);
    await base.threadone();
    await base.clearAndTypeAutoCompleteByIndex(10, '50000');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(11, '9786546556');
    await base.threadhalf();
    await base.inputareasindex(18, '9956565555');

    await base.NextButton();
    await base.threadone();

    await base.textpath('History');
    await base.threadhalf();
    await base.textpath('Details');
    await base.threadone();
    await base.backbutton();
    await base.thread();
    await base.tabNavigation(25);
        await base.threadhalf();
            await base.threadhalf();



    await base.Texthome('Assign to TSO');
    await base.threadhalf();
    await base.radiobutton(1);
    await base.threadhalf();
    await base.radiobutton(3);
    await base.threadhalf();
    await base.radiobutton(5);
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');
    await base.thread();
    await base.thread();
    await base.textpath('Select');
    await base.threadone();
    await base.TabIndex(5);
    await base.threadhalf();
    await base.textpath('Pull');
    await base.threadone();

    await base.tabNavigation(2);
    await base.threedot();
    await base.threadhalf();
    await base.Texthome('Deny');
    await base.threadone();
    await base.typing('Testing - Deny');

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('BranchTeam_KBZPay@gmail.com', '98DjpLo4WVsdI5HILPVI');
    await base.thread();
    await base.tabNavigation(2);

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
