const BaseClass = require('../../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');

    // Diagnostic listeners
    base.page.on('console', (msg) => console.log('PAGE_CONSOLE:', msg.type(), msg.text()));
    base.page.on('pageerror', (err) => console.error('PAGE_ERROR:', err.message));
    base.page.on('crash', () => console.error('PAGE_CRASH: page crashed'));
    base.page.on('close', () => console.error('PAGE_CLOSED: page closed unexpectedly'));

    // Try primary URL first; fallback if login input not found
    const primaryUrl = 'https://staging.flow.stax.run/#/login';
    const fallbackUrl = 'https://staging-flutter.blujapp.com/#/login';

    await base.urlLaunch(primaryUrl);
    await base.maximize();

    // Wait for login input to appear and capture a screenshot for diagnostics
    const loginLocator = "xpath=(//*[@autocomplete='off'])[1]";
    let loaded = false;
    try {
      await base.page.waitForSelector(loginLocator, { state: 'visible', timeout: 15000 });
      await base.screenCapture('after_urlLaunch_ok');
      loaded = true;
    } catch (err) {
      console.error('Login input not found after primary navigation:', err.message);
      try { await base.screenCapture('after_primary_error'); } catch (e) {}
      // Try fallback
      try {
        console.log('Attempting fallback URL:', fallbackUrl);
        await base.urlLaunch(fallbackUrl);
        await base.maximize();
        await base.page.waitForSelector(loginLocator, { state: 'visible', timeout: 15000 });
        await base.screenCapture('after_fallback_ok');
        loaded = true;
      } catch (err2) {
        console.error('Fallback navigation failed:', err2.message);
        try { await base.screenCapture('after_fallback_error'); } catch (e) {}
      }
      if (!loaded) throw new Error('Both primary and fallback login pages failed to load');
    }

    await base.page.waitForTimeout(2000);
    await base.thread();
    await base.wait(2);
    await base.thread();
    await base.performLogin('vb_sr@gmail.com', '4Tovd~U6G18Af4OWYQ6P');

    await base.thread();
    await base.wait(2);

    // ADD NEW
    await base.page.click("xpath=//*[text()='Add New']");
    await base.thread();

    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');

    // Priority
    await base.radiobutton(1);
    await base.threadone();

    await base.selectdate(18);
    await base.threadone();

    await base.PleaseSelect();
    await base.threadhalf();
    await base.textpath('EA Onboarding');
    await base.threadhalf();

    await base.inputareasindex(2, 'Test flow one');
    await base.threadhalf();

    await base.inputareasindex(3, '95646512');
    await base.threadone();

    await base.page.click("xpath=//*[text()='Please select']");
    await base.threadhalf();
    await base.textpath('Approval Delay (New obd customer only)');
    await base.threadhalf();

    await base.inputareasindex(4, 'As of now - no need service request');

    await base.page.click("xpath=(//*[@role='button'])[3]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='5']");
    await base.threadhalf();

    await base.page.click("xpath=(//*[@role='button'])[4]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='DAHANA']");
    await base.threadhalf();

    await base.page.click("xpath=(//*[@role='button'])[5]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='T']");
    await base.threadone();

    await base.page.fill("xpath=(//*[@autocomplete='off'])[5]", '65655');
    await base.threadhalf();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[8]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.page.click("xpath=//*[text()='Please select']");
    await base.threadhalf();
    await base.textpath('Non HNI');
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[9]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[10]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[11]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[12]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadhalf();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[13]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
await base.threadone();

    await base.NextButton();
    await base.thread();

    await base.tabNavigation(35);

    await base.EyeButton();
    await base.thread();

    await base.textpath('History');
    await base.threadone();
    await base.backbutton();
    await base.threadone();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('kycofficer_sr@gmail.com', 'DD5GK7Ki6W18NgYoQPA8');
    await base.thread();

    await base.TabIndex(10);
    await base.tabNavigation(35);

    await base.Texthome('Mark for Correction');
    await base.threadhalf();

    await base.inputareasindex(2, 'Testing - Remark');
    await base.threadone();

    await base.inputareasindex(3, 'Testing - Mark for Correction');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('vb_sr@gmail.com', '4Tovd~U6G18Af4OWYQ6P');
    await base.thread();

    await base.tabNavigation(35);

    await base.EyeButton();
    await base.textpath('History');
    await base.threadone();

    await base.EditButton();
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(2, 'FLowone');
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(3, '98989898');
    await base.threadone();
    await base.threadhalf();

    await base.radiobutton(5);

    await base.inputareasindex(5, 'AS-565656');
    await base.threadone();

    await base.clickAutoCompleteByIndex(6);
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.clickAutoCompleteByIndex(7);
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.NextButton();
    await base.thread();

    await base.textpath('History');
    await base.thread();

    await base.backbutton();
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Resubmit');
    await base.threadhalf();

    await base.typing('Resubmit');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('kycofficer_sr@gmail.com', 'DD5GK7Ki6W18NgYoQPA8');
    await base.thread();

    await base.TabIndex(10);
    await base.tabNavigation(35);
    await base.thread();

    await base.threedot2();
    await base.threadhalf();

    await base.Texthome('Denied');
    await base.threadone();

    await base.inputareasindex(2, 'testing - Denied');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
