const BaseClass = require('../../BaseClass');

(async () => {
  const base = new BaseClass();

  try {
    await base.browserLaunch('chrome');
    await base.urlLaunch('https://staging.flow.stax.run/#/login');
    await base.maximize();

    await base.wait(5);
    await base.thread();
    await base.wait(2);

    await base.performLogin('branch_npo@gmail.com', 'P$2EorwK5cyc@Ar-8NOT');

    await base.thread();

    // ADD NEW
    await base.page.click("xpath=//*[text()='Add New']");
    await base.thread();

    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');

    await base.page.click("xpath=//*[text()='Please select']");
    await base.threadhalf();
    await base.textpath('Petty Cash');
    await base.threadone();

    const timestamp = new Date().toISOString().replace(/[-:T.]/g, '').slice(4, 14);
    const invoiceNumber = 'INV' + timestamp;
    await base.page.fill("xpath=(//*[@autocomplete='off'])[1]", invoiceNumber);
    await base.thread();

    await base.page.click("xpath=(//*[@autocomplete='off'])[2]");
    await base.threadhalf();

    await base.page.click("xpath=(//*[@role='button'])[4]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='OK']");
    await base.threadhalf();

    await base.page.click("xpath=(//*[@role='button'])[1]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='Vendor Id']");
    await base.threadhalf();

    await base.page.fill("xpath=//*[@aria-label='Search for Vendor Id']", '1');
    await base.threadone();

    await base.page.click("xpath=//span[contains(text(), '100000') and contains(text(), 'A.MGR Co. Pte Ltd')]");
    await base.thread();

    await base.page.click("xpath=//*[text()='Please select']");
    await base.threadhalf();
    await base.threadone();
    await base.textpath('USD');
    await base.threadone();

    await base.page.fill("xpath=(//*[@autocomplete='off'])[6]", 'Testing - Description');
    await base.threadhalf();

    await base.page.click("xpath=(//*[@autocomplete='off'])[11]");
    await base.wait(2);
    await base.page.fill("xpath=(//*[@autocomplete='off'])[11]", '62.62');
    await base.wait(2);

    await base.page.click("xpath=(//*[@autocomplete='off'])[10]");
    await base.wait(2);
    await base.page.fill("xpath=(//*[@autocomplete='off'])[10]", '596865.95');
    await base.thread();

    await base.page.click("xpath=(//*[@autocomplete='off'])[6]/following::*");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='ATM - NCR']");
    await base.wait(2);

    await base.page.click("xpath=(//*[@autocomplete='off'])[6]/following::flt-semantics[starts-with(@id,'flt-semantic-node-')][5]");
    await base.wait(2);
    await base.page.click("xpath=//*[text()='1B00300003']");
    await base.thread();

    // FILE UPLOAD - After Commodity Field
    await base.uploadFile("xpath=(//*[@data-semantics-role='text-field'])[32]", "C:\\Users\\jainu\\Downloads\\Test2.png");
    await base.thread();

    await base.uploadFile("xpath=(//*[@data-semantics-role='text-field'])[32]", "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf");
    await base.thread();

    await base.NextButton();

    // EYE
    await base.thread();
    await base.thread();
    await base.tabNavigation(30);
    await base.thread();
    await base.EyeButton();

    await base.wait(2);
    await base.textpath('History');
    await base.threadone();
    await base.page.click("xpath=//*[text()='Edit']");
    await base.threadone();

    // DUPLICATE ROW
    await base.page.click("xpath=(//*[text()='Show menu'])[1]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='Duplicate Row']");
    await base.thread();

    // ADD ROW
    await base.page.click("xpath=//*[text()='Add Row']");
    await base.threadone();

    await base.page.fill("xpath=(//*[@autocomplete='off'])[24]", 'Testing - Description 3');
    await base.threadone();

    await base.page.click("xpath=(//*[@autocomplete='off'])[28]");
    await base.wait(2);
    await base.page.fill("xpath=(//*[@autocomplete='off'])[28]", '262.89');
    await base.threadone();

    await base.page.click("xpath=(//*[@autocomplete='off'])[29]");
    await base.wait(2);
    await base.page.fill("xpath=(//*[@autocomplete='off'])[29]", '65.5');
    await base.thread();

    await base.page.click("xpath=(//*[@autocomplete='off'])[6]/following::*[85]");
    await base.threadhalf();
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='Dummy Desc code ']");
    await base.wait(2);

    // DUPLICATE ROW
    await base.threadhalf();
    await base.page.click("xpath=(//*[text()='Show menu'])[3]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='Duplicate Row']");
    await base.thread();

    await base.thread();
    await base.NextButton();

    // BACK BUTTON
    await base.threadone();
    await base.wait(2);
    await base.page.click("xpath=(//*[@role='button'])[4]");

    await base.thread();
    await base.thread();
    await base.tabNavigation(30);
    await base.thread();

    await base.page.click("xpath=(//*[text()='Submit'])[1]");

    // DUPLICATE ROW
    await base.threadhalf();
    await base.page.click("xpath=(//*[text()='Show menu'])[3]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='Duplicate Row']");
    await base.thread();

    await base.NextButton();
    await base.thread();
    await base.threadone();

    // Logout
    await base.performLogout();
    await base.thread();

    // LOGIN - finance_authorizer_npo
    await base.performLogin('finance_authorizer_npo@gmail.com', 'bbJyL6et2OCjao4hy30B');
    await base.thread();
    await base.thread();
    await base.threadone();

    await base.tabNavigation(30);
    await base.wait(2);

    await base.page.click("xpath=(//*[text()='Approve'])[1]");
    await base.wait(2);
    await base.threadone();

    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Approve 1 ');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // Logout
    await base.performLogout();
    await base.thread();

    // LOGIN - dcfo_npo
    await base.performLogin('dcfo_npo@gmail.com', 'Pn!NskTNlvfJa8k~TRb$');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.EyeButton();
    await base.threadone();

    await base.textpath('History');
    await base.threadone();
    await base.page.click("xpath=//*[text()='Edit']");
    await base.threadone();

    // INVOICE EDIT
    await base.page.fill("xpath=(//*[@autocomplete='off'])[1]", '020');
    await base.thread();
    await base.NextButton();

    await base.thread();

    await base.page.click("xpath=(//*[text()='Approve'])[1]");
    await base.threadone();
    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Approve 2');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // Logout
    await base.performLogout();
    await base.thread();

    // LOGIN - cfo_npo
    await base.performLogin('cfo_npo@gmail.com', '9JnmmenusfeIqPebx~m~');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.EyeButton();
    await base.threadone();

    await base.textpath('View Flow');
    await base.thread();
    await base.thread();

    await base.page.click("xpath=//*[@role='button']");
    await base.threadone();

    // DOWNLOAD
    await base.page.click("xpath=(//*[@role='button'])[6]");
    await base.thread();

    await base.page.click("xpath=(//*[text()='Approve'])[1]");
    await base.threadone();
    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Approve 3');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // Logout
    await base.performLogout();
    await base.thread();

    // LOGIN - dceo_npo
    await base.performLogin('dceo_npo@gmail.com', 'I4xKC2BBKV@5syekUwx7');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.EyeButton();
    await base.threadone();

    await base.textpath('History');
    await base.threadone();
    await base.page.click("xpath=//*[text()='Edit']");
    await base.wait(2);

    // INVOICE EDIT
    await base.page.click("xpath=//*[@aria-label='Petty Cash']");
    await base.threadone();
    await base.page.click("xpath=//*[text()='Other Registered Vendors']");

    await base.thread();
    await base.NextButton();

    await base.thread();

    await base.page.click("xpath=(//*[text()='Approve'])[1]");
    await base.threadone();
    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Approve 4');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // Logout
    await base.performLogout();
    await base.thread();

    // LOGIN - ceo_npo
    await base.performLogin('ceo_npo@gmail.com', 'lBwHwJLyQX7qW#!OO~1A');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.page.click("xpath=(//*[text()='Approve'])[1]");
    await base.threadone();
    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Approve 5');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // Logout
    await base.performLogout();
    await base.thread();

    // LOGIN - finance_reconcile_npo
    await base.performLogin('finance_reconcile_npo@gmail.com', 'I9y0qsXlTx2u37ygJwis');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.EyeButton();
    await base.wait(2);

    await base.page.click("xpath=(//*[text()='Download'])[1]");
    await base.thread();
    await base.page.click("xpath=(//*[text()='Download'])[2]");
    await base.thread();
    await base.thread();
    await base.thread();

    await base.page.click("xpath=(//*[text()='Reconcile'])[1]");
    await base.wait(2);
    await base.page.fill("xpath=(//*[@autocomplete='off'])[2]", 'Testing - Reconcile');
    await base.threadone();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // Logout
    await base.performLogout();
    await base.thread();

    // LOGIN - branch_npo
    await base.performLogin('branch_npo@gmail.com', 'P$2EorwK5cyc@Ar-8NOT');
    await base.thread();
    await base.thread();

    await base.EyeButton();
    await base.threadhalf();
    await base.textpath('History');

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
