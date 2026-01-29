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

    await base.wait(2000);
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

    await base.inputareasindex(1, '785515547');
    await base.threadhalf();

    await base.inputareasindex(2, 'Cus name is Flow1');
    await base.threadhalf();

    await base.radiobutton(1);
    await base.threadhalf();

    await base.clickCheckboxByIndex(1);
    await base.threadhalf();

    await base.clickCheckboxByIndex(2);
    await base.threadhalf();

    await base.clickCheckboxByIndex(3);
    await base.threadhalf();

    await base.clickCheckboxByIndex(4);
    await base.threadone();

    await base.page.click("xpath=(//*[@autocomplete='off'])[3]");
    await base.thread();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[3]", 'Stax@gmail.com');
    await base.thread();
    await base.page.keyboard.press('Tab');
    await base.threadhalf();

    await base.page.click("xpath=(//*[@autocomplete='off'])[4]");
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[4]", '9898989898');
    await base.thread();

    await base.radiobutton(7);
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
    await base.threadhalf();

    await base.inputareasindex(5, '545454');
    await base.threadhalf();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();

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
    await base.thread();

    await base.clearAndTypeAutoCompleteByIndex(1, '884415548');
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(2, 'Flowonekycupdate');
    await base.thread();

    await base.radiobutton(3);

    await base.clickCheckboxByIndex(6);
    await base.threadhalf();

    await base.clickCheckboxByIndex(7);

    await base.clickCheckboxByIndex(8);
    await base.threadhalf();

    await base.clickCheckboxByIndex(9);
    await base.threadhalf();

    await base.clickCheckboxByIndex(10);
    await base.thread();

    await base.radiobutton(9);
    await base.thread();

    await base.page.waitForSelector("xpath=(//*[@autocomplete='off'])[5]", { state: 'visible', timeout: 5000 });
    await base.page.click("xpath=(//*[@autocomplete='off'])[5]");
    await base.threadone();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[5]", 'SD545SD4S54');
    await base.thread();

    await base.NextButton();
    await base.thread();
    await base.threadhalf();

    await base.textpath('History');

        await base.threadhalf();
            await base.threadhalf();



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

    await base.Texthome('Application Corrected');
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(2, 'Flow1');

    await base.radiobutton(2);
    await base.threadhalf();

    await base.radiobutton(6);
    await base.threadhalf();

    await base.clickCheckboxByIndex(1);
    await base.threadhalf();

    await base.clickCheckboxByIndex(2);
    await base.threadhalf();

    await base.clickCheckboxByIndex(3);
    await base.threadhalf();

    await base.clickCheckboxByIndex(4);
    await base.threadhalf();

    await base.radiobutton(8);
    await base.thread();

    await base.page.waitForSelector("xpath=(//*[@autocomplete='off'])[5]", { state: 'visible', timeout: 5000 });
    await base.page.click("xpath=(//*[@autocomplete='off'])[5]");
    await base.threadhalf();
    await base.page.fill("xpath=(//*[@autocomplete='off'])[5]", '65655ASDSD');
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();

    await base.NextButton();
    await base.thread();

    await base.wait(2000);
    await base.threadone();
    await base.threadhalf();

    await base.performLogout();
    await base.threadone();

    // Login as KYC1 user again
    await base.performLogin('KYC1_COPS_Stag@gmail.com', 'dZnZGgFV!kROcvmyDRaf');
    await base.thread();

    await base.textpath('Select');
    await base.threadone();

    await base.page.click("xpath=(//*[@role='radio'])[1]");
    await base.threadhalf();

    await base.TabIndex(5);
    await base.threadhalf();
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(35);

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

    await base.textpath('Select');
    await base.threadone();

    await base.page.click("xpath=(//*[@role='radio'])[2]");
    await base.threadhalf();

    await base.TabIndex(5);
    await base.threadhalf();

    await base.textpath('Pull');

    await base.tabNavigation(35);

    await base.Texthome('Complete');
    await base.threadhalf();

    await base.radiobutton(1);
    await base.threadhalf();

    await base.typing('Testing - Complete');

    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();

    // Final login as branch user
    await base.performLogin('branch_COPS_stag@gmail.com', 'olvH~jMjqdmX-lYdecx3');
    await base.thread();

    await base.tabNavigation(35);

    await base.EyeButton();
    await base.threadhalf();

    await base.textpath('History');

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
