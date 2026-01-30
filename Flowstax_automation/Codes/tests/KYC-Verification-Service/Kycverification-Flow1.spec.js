const BaseClass = require('../../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');

    await base.maximize();

    await base.page.waitForTimeout(2000);
    await base.thread();
    await base.wait(2);
    await base.thread();
    await base.performLogin('branch_sr@gmail.com', 'HybjyJcjHWAYtgTvXbe!');

    // Testing 123

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
    await base.threadhalf();

    await base.page.fill("xpath=(//*[@autocomplete='off'])[5]", '65655');
    await base.threadhalf();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();
        await base.threadhalf();


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

    await base.performLogin('branch_sr@gmail.com', 'HybjyJcjHWAYtgTvXbe!');
    await base.thread();

    await base.tabNavigation(40);

    await base.EyeButton();
    await base.textpath('History');
    await base.threadone();

    await base.EditButton();

    await base.clearAndTypeAutoCompleteByIndex(2, 'FLowone');
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(3, '98989898');
    await base.threadone();

    await base.radiobutton(5);
    await base.threadone();

    await base.inputareasindex(5, 'AS-565656');
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

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
    await base.threadone();

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

    await base.Texthome('Resolved');
    await base.threadone();

    await base.PleaseSelect();
    await base.threadone();

    await base.textpath('Approved');
    await base.threadone();

    await base.inputareasindex(2, 'testing - Resolved');
    await base.threadhalf();

    await base.NextButton();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
