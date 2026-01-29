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
    await base.page.fill("xpath=//*[@aria-label='Enter registered email']", 'BranchTeam15_KBZPay@gmail.com');
    await base.wait(50);
    await base.page.keyboard.press('Tab');
    await base.page.waitForTimeout(200);
    await base.wait(50);
    await base.page.fill("xpath=//flt-semantics[@aria-label='Enter Password']//input[@data-semantics-role='text-field']", '0PRNkiymcD66DS6Yji6D');
    await base.wait(100);
    await base.page.click("xpath=//*[text()='Login']");
    await base.page.waitForTimeout(2000);

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
    await base.inputareasindex(2, 'Cus name is flow4');
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

    await base.inputareasindex(5, '563289');
    await base.threadone();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.thread();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.inputareasindex(8, '5/96,Kenya');
    await base.threadhalf();
    await base.inputareasindex(9, 'lee');
    await base.threadone();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[11]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();
    await base.inputareasindex(13, 'Personal issue 2');
    await base.thread();

    await base.NextButton();
    await base.thread();
    await base.tabNavigation(25);
    await base.tabNavigation(25);

    await base.EyeButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadhalf();
    await base.EditButton();
    await base.threadone();
    await base.threadhalf();

    await base.clickAutoCompleteByIndex(3);
    await base.threadhalf();
    await base.DateclickOk(5);
    await base.threadone();
    await base.inputareasindex(12, '95656525');
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
    await base.performLogin('closeloopteam2@gmail.com', '@~MkkPi6K!Vv-nED3ABe');
    await base.thread();
    await base.tabNavigation(25);
    await base.tabNavigation(25);

    await base.threedot2();
    await base.threadhalf();

    await base.Texthome('Deny');
    await base.threadone();
    await base.typing('Testing - Deny');
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('BranchTeam15_KBZPay@gmail.com', '0PRNkiymcD66DS6Yji6D');
    await base.thread();
    await base.tabNavigation(25);
    await base.tabNavigation(25);

    await base.page.pause();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
