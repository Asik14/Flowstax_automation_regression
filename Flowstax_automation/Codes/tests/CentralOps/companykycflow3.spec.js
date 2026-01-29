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

    // Zoom out 2 times
    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');

    await base.PleaseSelect();
    await base.threadhalf();

    await base.clickByExactText('Company KYC Update');
    await base.threadone();

    // Input fields
    await base.inputareasindex(1, 'companykyc1@gmail.com');
    await base.threadhalf();

    await base.inputareasindex(2, '98886565');
    await base.threadhalf();

    await base.inputareasindex(3, 'Testing - add record');
    await base.threadhalf();

    await base.inputareasindex(4, 'Tricodestx2');
    await base.threadhalf();

    // Radio buttons
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

    // File uploads
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

    await base.NextButton();

    await base.tabNavigation(45);

    await base.EyeButton();
    await base.threadone();

    await base.textpath('History');
    await base.thread();

    // EDIT Section
    await base.EditButton();
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(2, '99999990');
    await base.threadhalf();

    await base.clickCheckboxByIndex(3);
    await base.threadhalf();

    await base.clickCheckboxByIndex(5);
    await base.threadhalf();

    await base.clickCheckboxByIndex(11);
    await base.threadone();

    await base.threadhalf();

    await base.NextButton();
    await base.thread();

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

    await base.textpath('Pull');

    await base.tabNavigation(45);

    await base.Texthome('Start Action');
    await base.threadhalf();

    await base.typing('Testing - Start action');
    await base.NextButton();
    await base.thread();

    await base.tabNavigation(45);

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

    await base.tabNavigation(45);

    await base.Texthome('Request for closure');
    await base.threadhalf();

    await base.typing('Testing - Request for closure');
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as admin user
    await base.performLogin('admin_COPS_Stag@gmail.com', '~h1Fl$$BYNZA1$2Zeyra');
    await base.thread();

    await base.tabNavigation(45);

    await base.Texthome('Deny');
    await base.threadhalf();

    await base.typing('Testing - Deny');
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login back as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.threadone();

    await base.tabNavigation(45);

    await base.Texthome('Reopen');
    await base.threadone();

    await base.typing('Testing - Reopen');
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as KYC1 user
    await base.performLogin('KYC1_COPS_Stag@gmail.com', 'dZnZGgFV!kROcvmyDRaf');
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.page.click("xpath=(//*[@role='radio'])[1]");
    await base.threadhalf();

    await base.TabIndex(6);
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(45);

    await base.Texthome('Update');
    await base.threadhalf();

    await base.typing('Testing - Update');
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as KYC2 user
    await base.performLogin('KYC2_COPS_Stag@gmail.com', 'EDaFiUnEMTN#~g96vovH');
    await base.thread();
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.page.click("xpath=(//*[@role='radio'])[2]");
    await base.threadhalf();

    await base.TabIndex(6);
    await base.threadhalf();
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(45);

    await base.Texthome('Complete');
    await base.threadhalf();

    await base.typing('Testing - Complete');
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Final login as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');

    console.log('✅ Company KYC Flow 3 completed successfully!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack trace:', error.stack);
    
    // Take screenshot on error
    try {
      await base.page.screenshot({ 
        path: 'C:\\TestClaudeFile\\error-screenshot-flow3-' + Date.now() + '.png',
        fullPage: true 
      });
      console.log('📸 Screenshot saved');
    } catch (screenshotError) {
      console.error('Failed to take screenshot:', screenshotError.message);
    }
  } finally {
    // Uncomment to close browser automatically
    // await base.quitbrowser();
    console.log('Test execution finished. Browser kept open for inspection.');
  }
})();
