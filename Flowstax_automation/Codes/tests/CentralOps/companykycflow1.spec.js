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

    await base.clickByExactText('Company KYC Update');
    await base.threadone();

    await base.inputareasindex(1, 'companykyc@gmail.com');
    await base.threadhalf();

    await base.inputareasindex(2, '98986565');
    await base.threadhalf();

    await base.inputareasindex(4, 'Tricodestx');
    await base.threadhalf();

    await base.radiobutton(5);
    await base.threadhalf();

    await base.radiobutton(11);
    await base.threadhalf();

    // Click all 10 checkboxes
    for (let i = 1; i <= 10; i++) {
      await base.clickCheckboxByIndex(i);
      await base.threadhalf();
    }

    await base.threadhalf();

    await base.inputareasindex(5, 'CODE95X');
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[8]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[9]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[10]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[11]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[12]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[13]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.NextButton();

    await base.tabNavigation(40);

    await base.EyeButton();
    await base.threadone();

    await base.textpath('History');
    await base.thread();

    // EDIT
    await base.EditButton();
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(2, '99999999');
    await base.threadhalf();

    await base.clickCheckboxByIndex(2);

    await base.clickCheckboxByIndex(6);
    await base.threadhalf();

    await base.clickCheckboxByIndex(10);
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[12]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[14]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.NextButton();
    await base.thread();
    await base.threadone();

    await base.textpath('History');
    await base.thread();

    await base.performLogout();
    await base.thread();
    await base.threadone();

    // Login as KYC2 user
    await base.performLogin('KYC2_COPS_Stag@gmail.com', 'EDaFiUnEMTN#~g96vovH');
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.page.click("xpath=(//*[@role='radio'])[1]");
    await base.threadhalf();

    await base.TabIndex(6);
    await base.threadhalf();
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

    // Login back as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    await base.tabNavigation(40);

    await base.Texthome('Application Corrected');
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(3, 'Flow1');
    await base.threadhalf();

    await base.radiobutton(3);
    await base.threadone();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.thread();
    await base.threadone();

    // Login as KYC2 user again
    await base.performLogin('KYC2_COPS_Stag@gmail.com', 'EDaFiUnEMTN#~g96vovH');
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.page.click("xpath=(//*[@role='radio'])[1]");
    await base.threadhalf();

    await base.TabIndex(6);
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(40);

    await base.threedot2();

    await base.Texthome('Escalate');
    await base.threadhalf();

    await base.typing('Testing - Escalte');

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as SAO user
    await base.performLogin('SAO_COPS_Stag@gmail.com', '6xXoKo@se0GUqZQIeWwi');
    await base.thread();

    await base.tabNavigation(35);

    await base.EyeButton();
    await base.threadhalf();

    await base.EditButton();

    await base.clearAndTypeAutoCompleteByIndex(2, '95656565');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.Texthome('Application Corrected');
    await base.thread();

    await base.typing('Testing - Application corrected');

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.thread();
    await base.threadone();

    // Login as KYC2 user again
    await base.performLogin('KYC2_COPS_Stag@gmail.com', 'EDaFiUnEMTN#~g96vovH');

    await base.tabNavigation(35);

    await base.Texthome('Update');
    await base.threadhalf();

    await base.typing('Testing - Update');

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as KYC1 user
    await base.performLogin('KYC1_COPS_Stag@gmail.com', 'dZnZGgFV!kROcvmyDRaf');
    await base.thread();
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.page.click("xpath=(//*[@role='radio'])[2]");
    await base.threadhalf();

    await base.TabIndex(6);
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(35);

    await base.Texthome('Complete');
    await base.threadhalf();

    await base.typing('Complete');

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Final login as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
