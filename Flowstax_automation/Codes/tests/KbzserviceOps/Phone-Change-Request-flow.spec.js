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
    await base.thread();
    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');
    await base.PleaseSelect();
    await base.threadhalf();
    await base.textpath('Phone Change Request');
    await base.threadhalf();

    await base.inputareasindex(1, '95656565');
    await base.threadhalf();
    await base.inputareasindex(2, 'Customer name : Flow1');
    await base.threadhalf();
    await base.threadone();
    await base.page.click("xpath=//*[@aria-label='YYYY-MM-DD']");
    await base.threadhalf();
    await base.DateclickOk(9);
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[4]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();

    await base.radiobutton(2);
    await base.threadhalf();
    await base.inputareasindex(5, 'S5DS6D86');
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[6]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.thread();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[7]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadone();


    await base.inputareasindex(8, 'No reason as of now');
    await base.thread();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[9]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();

    await base.uploadFile("xpath=(//*[@autocomplete='off'])[10]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.threadone();
    
    await base.inputareasindex(11, '9898989898');
    await base.threadhalf();
    await base.inputareasindex(12, '9898989888');
    await base.threadhalf();
    await base.inputareasindex(13, '9000');
    await base.threadhalf();
    await base.inputareasindex(14, 'www.stax.ai');
    await base.threadhalf();

    await base.NextButton();
    await base.thread();
    await base.thread();
    await base.tabNavigation(40);

    await base.EyeButton();
    await base.threadone();
    await base.textpath('History');
    await base.threadone();
    await base.EditButton();
    await base.threadhalf();

    await base.clearAndTypeAutoCompleteByIndex(1, '9656589898');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(2, 'Flow1');
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[4]", "C:\\Users\\jainu\\Downloads\\test.png");
    await base.thread();

    await base.TabIndex(16);
    await base.threadhalf();
    await base.textpath('INR');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(13, '568900');
    await base.threadone();

    await base.NextButton();
    await base.thread();
    await base.threadone();

    await base.Texthome('Assign to TSO');
    await base.threadhalf();
    await base.radiobutton(1);
    await base.threadhalf();
    await base.radiobutton(3);
    await base.threadhalf();
    await base.radiobutton(5);
    await base.threadone();
    await base.typing('Testing - Assign to TSO');
    await base.threadone();
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');
    await base.thread();
    await base.textpath('Select');
    await base.threadone();
    await base.page.evaluate(() => {
      const xpath = "(//*[contains(text(),'Phone Change Request')])[2]";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
    await base.page.waitForTimeout(1000);
    await base.page.evaluate(() => {
      const xpath = "(//*[contains(text(),'Phone Change Request')])[2]";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.click();
    });
    await base.threadone();
    await base.textpath('Pull');
    await base.threadone();
    await base.tabNavigation(35);

    await base.Texthome('Marked for Correction');
    await base.threadone();
    await base.typing('Testing - Mark for correction');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('BranchTeam_KBZPay@gmail.com', '98DjpLo4WVsdI5HILPVI');
    await base.thread();
    await base.tabNavigation(35);

    await base.Texthome('Application Corrected');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(5, 'PA896PRT');
    await base.threadone();
    await base.page.waitForTimeout(1000);
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[9]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(12, '9898989898');
    await base.threadhalf();
    await base.clearAndTypeAutoCompleteByIndex(13, '56000');
    await base.threadhalf();
    await base.NextButton();
    await base.threadone();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');
    await base.thread();
    // await base.textpath('Select');
    // await base.threadone();
    // await base.page.evaluate(() => {
    //   const xpath = "(//*[contains(text(),'Phone Change Request')])[2]";
    //   const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    //   if (element) element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    // });
    // await base.page.waitForTimeout(1000);
    // await base.page.evaluate(() => {
    //   const xpath = "(//*[contains(text(),'Phone Change Request')])[2]";
    //   const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    //   if (element) element.click();
    // });
    // await base.threadone();
    // await base.textpath('Pull');
    await base.threadone();
    await base.tabNavigation(35);

    await base.threedot();
    await base.threadone();
    await base.Texthome('Need more info');
    await base.threadhalf();
    await base.typing('Testing - Need more info');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam@gmail.com', 'Nw5ZQMJNx9uN85AJb0n0');
    await base.thread();
    await base.tabNavigation(35);

    await base.Texthome('Update');
    await base.threadhalf();
    await base.uploadFile("xpath=(//*[@autocomplete='off'])[1]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.inputareasindex(2, 'Testing - Update');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');
    await base.thread();
    await base.textpath('Select');
    await base.threadone();
    await base.page.evaluate(() => {
      const xpath = "(//*[contains(text(),'Phone Change Request')])[2]";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
    await base.page.waitForTimeout(1000);
    await base.page.evaluate(() => {
      const xpath = "(//*[contains(text(),'Phone Change Request')])[2]";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.click();
    });
    await base.threadone();
    await base.textpath('Pull');
    await base.threadone();
    await base.tabNavigation(40);

    await base.Texthome('Resolve');
    await base.threadhalf();
    await base.threadhalf();

    await base.typing('Testing - Resolve');
    await base.threadhalf();
    try {
      await base.NextButton();
    } catch (err) {
      console.warn('NextButton failed, attempting hidden click:', err.message);
      await base.clickHiddenByText('Next');
    }
    await base.thread();
    await base.threadone();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam@gmail.com', 'Nw5ZQMJNx9uN85AJb0n0');
    await base.thread();
    await base.tabNavigation(35);

    await base.Texthome('Reopen');
    await base.threadhalf();
    await base.typing('Testing - Reopen');
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('TSO_KBZPay@gmail.com', 'i00TLMvg~OWa3wW@xCE7');
    await base.thread();
    await base.textpath('Select');
    await base.threadone();
    await base.page.evaluate(() => {
      const xpath = "(//*[contains(text(),'Phone Change Request')])[2]";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
    await base.page.waitForTimeout(1000);
    await base.page.evaluate(() => {
      const xpath = "(//*[contains(text(),'Phone Change Request')])[2]";
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) element.click();
    });
    await base.threadone();
    await base.textpath('Pull');
    await base.threadone();
    await base.tabNavigation(35);

    await base.Texthome('Process');
    await base.threadhalf();
    await base.typing('testing - process');
    await base.threadhalf();
    await base.NextButton();
    await base.thread();

    await base.performLogout();
    await base.threadone();
    await base.performLogin('closeloopteam@gmail.com', 'Nw5ZQMJNx9uN85AJb0n0');
    await base.thread();
    await base.tabNavigation(35);

    await base.Texthome('Close');
    await base.threadhalf();
    await base.typing('Testing - Closing');
    await base.NextButton();
    await base.thread();
    await base.tabNavigation(35);

    await base.EyeButton();
    await base.threadone();
    await base.textpath('History');

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
