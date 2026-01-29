const BaseClass = require('../../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');
    await base.maximize();

    await base.wait(2);
    await base.thread();

    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');

    await base.thread();

    await base.page.click("xpath=//*[text()='Add New']");
    await base.thread();

    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');

    await base.PleaseSelect();
    await base.threadhalf();

    await base.textpath('i/m Banking (CIF)');
    await base.threadone();

    await base.inputareasindex(1, '785515547');
    await base.threadhalf();

    await base.inputareasindex(2, 'Cus name is Flow4');
    await base.threadhalf();

    await base.radiobutton(1);
    await base.threadhalf();

    // Scroll to email field and enter
    await base.page.evaluate(() => window.scrollBy(0, 100));
    await base.threadhalf();
    await base.page.click("xpath=(//*[@autocomplete='off'])[3]");
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[3]", '');
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[3]", 'Stax4@gmail.com');
    await base.threadhalf();
    // Verify email was entered
    const emailValue = await base.page.inputValue("xpath=(//*[@autocomplete='off'])[3]");
    if (!emailValue || emailValue.trim() === '') {
      await base.page.click("xpath=(//*[@autocomplete='off'])[3]");
      await base.page.keyboard.press('Control+A');
      await base.page.keyboard.type('Stax4@gmail.com');
    }
    await base.threadhalf();

    // Click and enter phone number - with multiple attempts
    await base.page.click("xpath=(//*[@autocomplete='off'])[4]");
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[4]", '');
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[4]", '98988985');
    await base.threadhalf();
    // Verify and retry if needed
    const phoneValue = await base.page.inputValue("xpath=(//*[@autocomplete='off'])[4]");
    if (!phoneValue || phoneValue.trim() === '') {
      await base.page.click("xpath=(//*[@autocomplete='off'])[4]");
      await base.page.keyboard.press('Control+A');
      await base.page.keyboard.type('98988985');
    }
    await base.thread();

    await base.radiobutton(5);
    await base.threadone();

    await base.inputareasindex(5, 'RTY9E8W6');
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[8]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.inputareasindex(9, 'Creating add record');
    await base.threadone();

    await base.radiobutton(7);
    await base.radiobutton(9);
    await base.radiobutton(11);
    await base.radiobutton(13);
    await base.radiobutton(15);
    await base.threadone();

    await base.clickCheckboxByIndex(1);
    await base.clickCheckboxByIndex(2);
    await base.clickCheckboxByIndex(3);
    await base.threadone();

    await base.NextButton();
    await base.thread();

    await base.tabNavigation(35);

    await base.EyeButton();
    await base.threadone();

    await base.textpath('History');
    await base.threadone();

    await base.EditButton();
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(1, '678656565');
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(4, '95656565');
    await base.thread();

    await base.radiobutton(2);
    await base.threadone();

    await base.threadhalf();

    await base.clickCheckboxByIndex(5);
    await base.thread();

    await base.clickCheckboxByIndex(6);

    await base.NextButton();
    await base.thread();

    await base.textpath('History');
    await base.threadone();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('admin_COPS_Stag@gmail.com', '~h1Fl$$BYNZA1$2Zeyra');
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Cancel');
    await base.threadhalf();

    await base.typing('Testing - Cancel');

    await base.NextButton();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
