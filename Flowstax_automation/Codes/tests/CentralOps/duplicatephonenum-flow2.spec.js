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

    await base.clickByExactText('Duplicate Phone Number: Online Banking');
    await base.threadone();

    // Input fields
    await base.inputareasindex(1, '565466565');
    await base.threadhalf();

    await base.inputareasindex(2, 'Cus name is Flow5');
    await base.threadhalf();

    await base.radiobutton(3);
    await base.threadone();

    await base.inputareasindex(3, 'Stax5@gmail.com');
    await base.threadhalf();

    await base.inputareasindex(4, '9898989898');
    await base.threadhalf();

    await base.radiobutton(5);
    await base.threadhalf();

    await base.inputareasindex(5, 'E8W9E8W6');
    await base.wait(10);

    await base.threadhalf();

    // File uploads
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[8]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
    await base.threadone();

    await base.inputareasindex(9, 'Creating add record');
    await base.threadone();

    await base.inputareasindex(10, 'Tricode');
    await base.threadone();

    await base.radiobutton(7);
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[11]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
    await base.threadone();

    await base.radiobutton(9);
    await base.radiobutton(11);
    await base.radiobutton(13);
    await base.radiobutton(15);
    await base.threadone();

    await base.NextButton();
    await base.thread();

    await base.tabNavigation(45);

    await base.EyeButton();
    await base.threadone();

    await base.textpath('History');
    await base.threadone();

    // EDIT Section
    await base.EditButton();
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(1, '678656565');
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(4, '95656565');
    await base.threadhalf();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
    await base.threadone();

    await base.NextButton();
    await base.thread();

    await base.textpath('History');
    await base.threadone();

    await base.performLogout();
    await base.threadone();

    // Login as CIF1 user
    await base.performLogin('CIF1_COPS_Stagi@gmail.com', 'kPI!~KsWwyh62TZD$ehN');
    await base.threadone();

    await base.thread();
    await base.textpath('Select');
    await base.threadone();

    await base.TabIndex(3);
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

    // Application Corrected step (MISSING in original flow2)
    await base.Texthome('Application Corrected');
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(2, 'Flow5');
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(3, 'tricode@gmail.com');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as CIF1 user again
    await base.performLogin('CIF1_COPS_Stagi@gmail.com', 'kPI!~KsWwyh62TZD$ehN');
    await base.threadone();

    await base.thread();
    await base.textpath('Select');
    await base.threadone();

    await base.TabIndex(3);
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
    await base.threadhalf();

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
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login back as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    await base.tabNavigation(45);

    await base.Texthome('Reopen');
    await base.threadhalf();

    await base.typing('Testing - Reopen');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as CIF1 user again
    await base.performLogin('CIF1_COPS_Stagi@gmail.com', 'kPI!~KsWwyh62TZD$ehN');
    await base.threadone();

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
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Login as admin user
    await base.performLogin('admin_COPS_Stag@gmail.com', '~h1Fl$$BYNZA1$2Zeyra');
    await base.thread();

    await base.tabNavigation(45);

    await base.Texthome('Close Application');
    await base.threadhalf();

    await base.typing('Testing - Close Application');
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Final login as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    console.log('✅ Duplicate Phone Number Flow 2 completed successfully!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack trace:', error.stack);
    
    // Take screenshot on error
    try {
      await base.page.screenshot({ 
        path: 'C:\\TestClaudeFile\\error-screenshot-duplicatephone-flow2-' + Date.now() + '.png',
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
