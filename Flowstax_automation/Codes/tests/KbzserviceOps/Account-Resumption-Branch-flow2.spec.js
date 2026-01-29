const BaseClass = require('../../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');
    await base.maximize();

    await base.page.waitForTimeout(2000);
    await base.thread();
    await base.page.click("xpath=//*[@aria-label='Enter registered email']");
    await base.wait(10);
    await base.page.waitForTimeout(1000);
    await base.page.fill("xpath=//*[@aria-label='Enter registered email']", 'BranchTeam_KBZPay@gmail.com');
    await base.wait(50);
    await base.page.keyboard.press('Tab');
    await base.page.waitForTimeout(200);
    await base.wait(50);
    await base.page.fill("xpath=//flt-semantics[@aria-label='Enter Password']//input[@data-semantics-role='text-field']", '98DjpLo4WVsdI5HILPVI');
    await base.wait(100);
    await base.page.click("xpath=//*[text()='Login']");
    await base.page.waitForTimeout(2000);

    await base.thread();
    await base.page.waitForTimeout(2000);
    await base.page.click("xpath=//*[text()='KBZPay Service Operations']");

    await base.thread();
    await base.page.waitForTimeout(2000);
    await base.clickAddNew();
    await base.threadhalf();
    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');
    await base.threadhalf();
    await base.PleaseSelect();
    await base.threadhalf();
    await base.page.evaluate(() => {
      const element = Array.from(document.querySelectorAll('flt-semantics')).find(el => 
        el.textContent.trim() === 'Account Resumption_Fraud Related'
      );
      if (element) {
        element.scrollIntoView({ block: 'center' });
        element.click();
      }
    });
    await base.threadone();
    await base.inputareasindex(1, '95656555');
    await base.threadhalf();
    await base.page.click("xpath=(//*[@aria-label='YYYY-MM-DD'])[1]");
    await base.threadhalf();
    await base.DateclickOk(9);
    await base.threadhalf();
    await base.inputareasindex(2, 'Cus name is flow3');
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[4]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();
    await base.radiobutton(1);
    await base.threadone();

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
    await base.threadone();
    await base.inputareasindex(5, '12356');
    await base.threadone();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.thread();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.inputareasindex(8, '8/96,North America');
    await base.threadone();
    await base.inputareasindex(9, 'Danny');
    await base.threadone();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[11]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();
    await base.inputareasindex(12, '95656565');
    await base.inputareasindex(13, 'Personal issue');

    await base.thread();
    await base.NextButton();
    await base.thread();
    await base.tabNavigation(30);

    await base.EyeButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadhalf();
    await base.EditButton();
    await base.threadone();
    await base.threadhalf();

    await base.clickAutoCompleteByIndex(3);
    await base.threadhalf();
    await base.DateclickOk(3);
    await base.threadone();
    await base.clearAndTypeAutoCompleteByIndex(12, '95656565');
    await base.threadone();
    await base.NextButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadhalf();
    await base.textpath('Details');
    await base.threadone();

    await base.textpath('Escalate');
    await base.threadhalf();
    await base.typing('Testing - Escalte');
    await base.NextButton();

    await base.thread();
    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam@gmail.com', 'Nw5ZQMJNx9uN85AJb0n0');

    await base.thread();
    await base.tabNavigation(30);
    await base.Texthome('Mark for Correction');
    await base.threadone();
    await base.typing('Testing - mark for correction');
    await base.NextButton();

    await base.thread();
    await base.performLogout();
    await base.threadone();
    await base.performLogin('BranchTeam_KBZPay@gmail.com', '98DjpLo4WVsdI5HILPVI');

    await base.thread();
    await base.tabNavigation(30);
    await base.Texthome('Application Corrected');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(1, '98785566');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(2, 'Flow3');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(9, 'Henry');
    await base.threadhalf();
    await base.inputareasindex(14, 'Testing - App corrected');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.threadone();
    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam@gmail.com', 'Nw5ZQMJNx9uN85AJb0n0');

    await base.thread();
    await base.tabNavigation(30);
    await base.threedot2();
    await base.threadhalf();
    await base.Texthome('Reopen');
    await base.threadhalf();
    await base.typing('Testing - Reopen');
    await base.NextButton();

    await base.thread();
    await base.performLogout();
    await base.threadone();
    await base.performLogin('BranchTeam_KBZPay@gmail.com', '98DjpLo4WVsdI5HILPVI');

    await base.thread();
    await base.tabNavigation(30);
    await base.Texthome('Escalate');
    await base.threadhalf();
    await base.typing('Testing - Escalate');
    await base.NextButton();

    await base.thread();
    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam@gmail.com', 'Nw5ZQMJNx9uN85AJb0n0');

    await base.thread();
    await base.tabNavigation(30);
    await base.Texthome('Close');
    await base.threadhalf();
    await base.typing('Testing - close');
    await base.NextButton();

    await base.thread();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
