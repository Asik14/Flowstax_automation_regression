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
    //await base.tabNavigation(35);

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

    await base.radiobutton(2);
    await base.threadhalf();
        await base.threadhalf();



    await base.inputareasindex(3, 'Stax4@gmail.com');
    await base.threadhalf();
        await base.threadhalf();


    await base.inputareasindex(4, '9898989898');
    await base.threadhalf();

    await base.radiobutton(5);
    await base.threadone();

    await base.inputareasindex(5, 'RTY9E8W6');
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[8]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.inputareasindex(9, 'Creating add record');
    await base.threadone();

    await base.radiobutton(7);
    await base.threadhalf();

    await base.radiobutton(9);
    await base.threadhalf();

    await base.radiobutton(11);
    await base.threadhalf();

    await base.radiobutton(13);
    await base.threadhalf();

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

    await base.clickCheckboxByIndex(4);
    await base.threadhalf();

    await base.clickCheckboxByIndex(5);
    await base.thread();

    //await base.clickCheckboxByIndex(6);

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

    await base.tabNavigation(35);

    await base.Texthome('Application Corrected');
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(2, 'Flow4');
    await base.threadhalf();

    await base.radiobutton(3);
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

    await base.Texthome('Start Action');
    await base.threadhalf();

    await base.typing('Testing - Start action 2');

    await base.NextButton();
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Verify and Activate');
    await base.threadone();

    await base.radiobutton(1);
    await base.radiobutton(3);
    await base.radiobutton(5);
    await base.radiobutton(7);
    await base.radiobutton(9);
    await base.radiobutton(11);
    await base.threadone();

    await base.typing('Testing - Verify and activate');

    await base.NextButton();
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Authorize');
    await base.threadhalf();

    await base.typing('Authorize');
    await base.threadhalf();

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
