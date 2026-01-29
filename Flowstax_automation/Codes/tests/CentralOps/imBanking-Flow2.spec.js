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
    await base.threadhalf();

    await base.textpath('i/m Banking (CIF)');
    await base.threadone();

    await base.inputareasindex(1, '785512547');
    await base.threadhalf();

    await base.inputareasindex(2, 'Cus name is Flow5');
    await base.threadhalf();

    await base.radiobutton(3);
    await base.threadhalf();
    await base.threadhalf();

    // Scroll to email field and enter
    await base.page.evaluate(() => window.scrollBy(0, 100));
    await base.threadhalf();
    await base.page.click("xpath=(//*[@autocomplete='off'])[3]");
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[3]", 'Stax4@gmail.com');
    await base.threadhalf();
    await base.threadhalf();

    // Click and enter phone number
    await base.page.click("xpath=(//*[@autocomplete='off'])[4]");
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[4]", '9897989898');
    await base.threadhalf();

    await base.radiobutton(6);
    await base.threadone();

    await base.inputareasindex(5, 'RTY9B8W6');
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
    await base.clickCheckboxByIndex(4);

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
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(5, 'KJYJH9898');
    await base.threadone();

    await base.clickCheckboxByIndex(5);

    await base.NextButton();
    await base.thread();

    await base.textpath('History');
    await base.threadone();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('CIF1_COPS_Stagi@gmail.com', 'kPI!~KsWwyh62TZD$ehN');
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.TabIndex(4);
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(35);

    await base.Texthome('Start Action');
    await base.threadhalf();

    await base.typing('Testing - Start action');

    await base.NextButton();
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Mark for Correction');
    await base.threadhalf();

    await base.typing('Testing - Mark for corr');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Request for closure');
    await base.threadhalf();

    await base.PleaseSelect();
    await base.threadone();

    await base.textpath('Wrong application');
    await base.threadhalf();

    await base.typing('Testing - Request for closure');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('admin_COPS_Stag@gmail.com', '~h1Fl$$BYNZA1$2Zeyra');
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Deny');
    await base.threadhalf();

    await base.typing('Testing - Deny');

    await base.NextButton();
    await base.thread();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Reopen');
    await base.threadhalf();

    await base.typing('Testing - Reopen');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('CIF1_COPS_Stagi@gmail.com', 'kPI!~KsWwyh62TZD$ehN');
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.TabIndex(4);
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(35);

    await base.Texthome('Mark for Correction');
    await base.threadhalf();

    await base.typing('Testing - Mark for corr 2');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Request for closure');
    await base.threadhalf();

    await base.typing('Testing - Request for closure 2');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('admin_COPS_Stag@gmail.com', '~h1Fl$$BYNZA1$2Zeyra');
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Close Application');
    await base.threadhalf();

    await base.typing('Testing - Close Application');

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    await base.tabNavigation(35);


  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
