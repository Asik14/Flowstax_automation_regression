const BaseClass = require('../../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');
    await base.maximize();

    await base.wait(2000);
    await base.thread();

    // Login as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');

    await base.thread();

    // Click Add New
    await base.page.click("xpath=//*[text()='Add New']");
    await base.thread();

    // Zoom out
    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');

    await base.PleaseSelect();
    await base.threadhalf();

    await base.textpath('KYC Update');
    await base.threadone();

    await base.inputareasindex(1, '685413347');
    await base.threadhalf();

    await base.inputareasindex(2, 'Cus name is Flow2');
    await base.threadhalf();

    await base.radiobutton(2);
    await base.threadhalf();

    await base.clickCheckboxByIndex(1);
    await base.threadhalf();

    await base.clickCheckboxByIndex(2);
    await base.threadhalf();

    await base.clickCheckboxByIndex(3);
    await base.threadhalf();

    await base.clickCheckboxByIndex(4);
    await base.threadone();

    await base.clickCheckboxByIndex(5);

    await base.clickCheckboxByIndex(6);

    await base.clickCheckboxByIndex(7);
    await base.threadhalf();

    await base.clickCheckboxByIndex(8);

    await base.clickCheckboxByIndex(9);

    await base.clickCheckboxByIndex(10);
    await base.threadhalf();

    await base.clickCheckboxByIndex(11);
    await base.thread();

    await base.page.click("xpath=(//*[@autocomplete='off'])[3]");
    await base.thread();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[3]", 'Stax2@gmail.com');
    await base.thread();
    await base.page.keyboard.press('Tab');
    await base.threadhalf();

    await base.page.click("xpath=(//*[@autocomplete='off'])[4]");
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[4]", '9898987788');
    await base.thread();

    await base.radiobutton(7);
    await base.thread();

    await base.clickRoleButtonByIndex(3);
    await base.threadhalf();

    await base.textpath('4');
    await base.threadhalf();

    await base.clickRoleButtonByIndex(4);
    await base.threadhalf();

    await base.textpath('MATANA');
    await base.threadhalf();

    await base.clickRoleButtonByIndex(5);
    await base.threadhalf();

    await base.textpath('Y');
    await base.threadhalf();

    await base.inputareasindex(5, '852365');
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[8]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();

    await base.inputareasindex(9, 'Testing - Add record');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.tabNavigation(35);

    await base.EyeButton();
    await base.threadone();

    await base.textpath('History');
    await base.threadone();

    await base.EditButton();
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(1, '884415548');
    await base.threadone();

    await base.clickCheckboxByIndex(7);
    await base.threadhalf();

    await base.clickCheckboxByIndex(8);
    await base.threadhalf();

    await base.clickCheckboxByIndex(9);
    await base.thread();

    await base.clickRoleButtonByIndex(4);
    await base.threadhalf();

    await base.textpath('3');
    await base.threadhalf();

    await base.clickRoleButtonByIndex(5);
    await base.threadhalf();

    await base.textpath('BAGALA');
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(5, '956565');
    await base.threadhalf();
    await base.threadone();

    await base.NextButton();
    await base.thread();

    await base.textpath('History');

    await base.performLogout();
    await base.threadone();

    // Login as KYC1 user
    await base.performLogin('KYC1_COPS_Stag@gmail.com', 'dZnZGgFV!kROcvmyDRaf');
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.page.click("xpath=(//*[@role='radio'])[1]");
    await base.threadhalf();

    await base.TabIndex(5);
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(40);

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

    // Login back as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Request for closure');
    await base.threadhalf();

    await base.PleaseSelect();
    await base.threadhalf();

    await base.textpath('Customer refused');
    await base.threadhalf();

    await base.typing('testing - Request for closure');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as admin user
    await base.performLogin('admin_COPS_Stag@gmail.com', '~h1Fl$$BYNZA1$2Zeyra');
    await base.thread();

    await base.tabNavigation(35);

    await base.Texthome('Close Application');
    await base.threadhalf();

    await base.typing('Close Applciation');

    await base.NextButton();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
