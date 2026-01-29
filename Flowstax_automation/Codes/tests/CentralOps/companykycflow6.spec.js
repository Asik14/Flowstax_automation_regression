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
    await base.inputareasindex(1, 'companykyc@gmail.com');
    await base.threadhalf();

    await base.inputareasindex(2, '98986565');
    await base.threadhalf();

    await base.inputareasindex(3, 'Testing remark');
    await base.threadhalf();

    await base.inputareasindex(4, 'Tricodestx');
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

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[8]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[9]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[10]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.NextButton();

    // Navigate using tabs (3 tabs)
    await base.tabNavigation(45);
    await base.page.keyboard.press('Tab');

    await base.EyeButton();
    await base.threadone();

    await base.textpath('History');
    await base.thread();

    // EDIT Section
    await base.EditButton();
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(2, '99999999');
    await base.threadhalf();

    await base.clickCheckboxByIndex(1);

    await base.clickCheckboxByIndex(2);
    await base.threadhalf();

    await base.clickCheckboxByIndex(11);
    await base.threadone();

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

    // Login as admin user
    await base.performLogin('admin_COPS_Stag@gmail.com', '~h1Fl$$BYNZA1$2Zeyra');
    await base.thread();

    await base.tabNavigation(45);

    await base.Texthome('Reject');
    await base.threadhalf();

    await base.typing('Testing - Reject');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    console.log('✅ Company KYC Flow 6 completed successfully!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack trace:', error.stack);
    
    // Take screenshot on error
    try {
      await base.page.screenshot({ 
        path: 'C:\\TestClaudeFile\\error-screenshot-flow6-' + Date.now() + '.png',
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
