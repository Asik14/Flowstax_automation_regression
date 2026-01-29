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
    
    // Disable auto-scroll on focus
    await base.page.evaluate(() => {
      document.documentElement.style.scrollBehavior = 'auto';
    });

    await base.performLogin('branch_npo@gmail.com', 'P$2EorwK5cyc@Ar-8NOT');

    await base.thread();

    // ======================== ADD NEW ========================
    await base.page.click("xpath=//*[text()='Add New']");
    await base.threadhalf();

    // Zoom out
    await base.page.keyboard.press('Control+Minus');
    await base.page.keyboard.press('Control+Minus');

    // Select Petty Cash
    await base.page.click("xpath=//*[text()='Please select']");
    await base.threadhalf();
    await base.textpath('Petty Cash');
    await base.threadhalf();

    // Generate and fill invoice number
    const timestamp = new Date().toISOString().replace(/[-:T.]/g, '').slice(4, 14);
    const invoiceNumber = 'INV' + timestamp;
    await base.page.fill("xpath=(//*[@autocomplete='off'])[1]", invoiceNumber);
    await base.thread();

    // Date picker
    await base.page.click("xpath=(//*[@autocomplete='off'])[2]");
    await base.threadhalf();

    await base.page.click("xpath=(//*[@role='button'])[5]");
    // await base.threadhalf();
    await base.page.click("xpath=//*[text()='OK']");
    await base.threadhalf();

    // Vendor selection
    await base.page.click("xpath=(//*[@role='button'])[1]");
    await base.threadhalf();
    await base.page.click("xpath=//*[text()='Vendor Id']");
    await base.threadhalf();

    await base.page.fill("xpath=//*[@aria-label='Search for Vendor Id']", '1');
    await base.threadone();

    await base.page.click("xpath=//span[contains(text(), '100000') and contains(text(), 'A.MGR Co. Pte Ltd')]");
    await base.thread();

    // Currency selection
    await base.page.click("xpath=//*[text()='Please select']");
    await base.threadhalf();
    await base.textpath('USD');
    await base.threadhalf();

    // ======================== FILE UPLOADS ========================
    console.log('Scrolling to file upload section...');
    await base.page.evaluate(() => window.scrollBy(0, 300));
    await base.threadhalf();

    console.log('Uploading both files...');
    await base.uploadMultipleFiles("xpath=(//*[@data-semantics-role='text-field'])[32]", [
      "C:\\Users\\jainu\\Downloads\\Test2.png",
      "C:\\Users\\jainu\\Downloads\\Testpdf123.pdf"
    ]);
    console.log('Both files uploaded!');
    await base.thread();

    // ======================== LINE ITEMS TABLE SECTION ========================
    console.log('Starting line items table section...');

    // 1. Description
    console.log('Filling Description field...');
    await base.page.fill("xpath=(//*[@autocomplete='off'])[6]", 'Testing - Description');
    await base.wait(1200);
    console.log('Description filled');

    // 2. Quantity
    console.log('Filling Quantity field...');
    await base.page.click("xpath=(//*[@autocomplete='off'])[11]");
    await base.page.evaluate(() => window.scrollY = 0);
    await base.wait(2);
    await base.page.fill("xpath=(//*[@autocomplete='off'])[11]", '1200.12');
    await base.page.evaluate(() => window.scrollY = 0);
    await base.wait(2);
    console.log('Quantity filled');

    // 3. Price
    console.log('Filling Price field...');
    await base.page.click("xpath=(//*[@autocomplete='off'])[10]");
    await base.page.evaluate(() => window.scrollY = 0);
    await base.wait(2);
    await base.page.fill("xpath=(//*[@autocomplete='off'])[10]", '1028.35');
    await base.page.evaluate(() => window.scrollY = 0);
    await base.thread();
    console.log('Price filled');

    // 4. Commodity Code - DROPDOWN WITH SEARCH (GL ACCOUNT WILL AUTO-TRIGGER)
    console.log('Opening Commodity Code dropdown...');
    await base.page.click("xpath=(//*[@autocomplete='off'])[7]");
    await base.wait(1000);
    console.log('Typing search value...');
    await base.page.fill("xpath=(//*[@autocomplete='off'])[7]", 'Dummy Desc code');
    await base.wait(1500);
    console.log('Selecting Dummy Desc code option...');
    await base.page.click("xpath=//*[text()='Dummy Desc code']");
    await base.thread();
    console.log('Commodity Code selected (GL Account auto-triggered)');

    console.log('Line items table completed!');

    // ======================== CLICK NEXT ========================
    console.log('Scrolling to Next button...');
    await base.page.evaluate(() => window.scrollBy(0, 500));
    await base.wait(1500);
    
    console.log('Clicking Next button...');
    await base.page.evaluate(() => {
      const nextBtn = document.evaluate(
        "(//*[text()='Next'])[1]",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      
      if (nextBtn) {
        nextBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nextBtn.click();
      }
    });
    
    await base.wait(3000);
    await base.thread();
    await base.thread();
    await base.tabNavigation(30);
    await base.thread();
    await base.EyeButton();

    await base.wait(2);
    await base.textpath('View Flow');
    await base.thread();
    await base.thread();

    await base.page.click("xpath=//*[@role='button']");
    await base.threadone();

    // ======================== SUBMIT ========================
    await base.tabNavigation(20);
    await base.page.click("xpath=(//*[text()='Submit'])[1]");
    await base.wait(2);
    await base.threadone();

    // Update invoice number for second entry
    const timestamp1 = new Date().toISOString().replace(/[-:T.]/g, '').slice(4, 14);
    const invoiceNumber1 = 'INV' + timestamp1;
    await base.page.fill("xpath=(//*[@autocomplete='off'])[1]", invoiceNumber1);
    await base.threadone();

    await base.clearAndTypeAutoCompleteByIndex(6, 'Testing Desc areas');
    await base.threadone();

    // Duplicate row
    await base.page.click("xpath=(//*[text()='Show menu'])[1]");
    await base.tabNavigation(20);
    await base.page.click("xpath=//*[text()='Duplicate Row']");
    await base.thread();

    await base.NextButton();
    await base.thread();
    await base.threadone();

    // ======================== WITHDRAW ========================
    await base.tabNavigation(30);

    await base.page.click("xpath=(//*[text()='Withdraw'])[1]");
    await base.wait(2);
    await base.threadone();

    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Withdrawn');
    await base.thread();

    await base.NextButton();
    await base.thread();

    // Eye button
    await base.tabNavigation(30);
    await base.EyeButton();
    await base.threadone();

    await base.textpath('View Flow');
    await base.thread();
    await base.thread();

    await base.page.click("xpath=//*[@role='button']");
    await base.thread();

    await base.wait(1);
    await base.page.click("xpath=//*[text()='Edit']");
    await base.tabNavigation(20);

    // Delete row
    await base.page.click("xpath=(//*[@role='checkbox'])[3]");
    await base.wait(1);

    await base.page.click("xpath=//*[text()='Delete']");
    await base.thread();

    // Update quantity
    await base.page.click("xpath=(//*[@autocomplete='off'])[11]");
    await base.page.fill("xpath=(//*[@autocomplete='off'])[11]", '1');
    await base.thread();

    await base.NextButton();
    await base.thread();
    await base.thread();

    // View flow
    await base.page.click("xpath=//*[text()='View Flow']");
    await base.thread();
    await base.thread();

    await base.page.click("xpath=//*[@role='button']");
    await base.thread();
    await base.thread();

    // Submit
    await base.page.click("xpath=(//*[text()='Submit'])[1]");
    await base.wait(2);
    await base.thread();

    await base.NextButton();
    await base.thread();
    await base.thread();

    // ======================== LOGOUT & LOGIN - finance_authorizer_npo ========================
    await base.performLogout();
    await base.thread();

    await base.performLogin('finance_authorizer_npo@gmail.com', 'bbJyL6et2OCjao4hy30B');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.page.click("xpath=(//*[text()='Approve'])[1]");
    await base.wait(2);
    await base.threadone();

    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Approve 1 ');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // ======================== LOGOUT & LOGIN - dcfo_npo (DENY) ========================
    await base.performLogout();
    await base.thread();

    await base.performLogin('dcfo_npo@gmail.com', 'Pn!NskTNlvfJa8k~TRb$');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.page.click("xpath=(//*[text()='Deny'])[1]");
    await base.wait(2);
    await base.threadone();

    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Deny ');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // ======================== LOGOUT & LOGIN - branch_npo (SUBMIT AFTER DENY) ========================
    await base.performLogout();
    await base.thread();

    await base.performLogin('branch_npo@gmail.com', 'P$2EorwK5cyc@Ar-8NOT');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.page.click("xpath=(//*[text()='Submit'])[1]");
    await base.wait(2);
    await base.threadone();

    await base.page.fill("xpath=(//*[@autocomplete='off'])[32]", 'Testing - Submit ');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // ======================== LOGOUT & LOGIN - finance_authorizer_npo (APPROVE AFTER DENY) ========================
    await base.performLogout();
    await base.thread();

    await base.performLogin('finance_authorizer_npo@gmail.com', 'bbJyL6et2OCjao4hy30B');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.page.click("xpath=(//*[text()='Approve'])[1]");
    await base.wait(2);
    await base.threadone();

    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - After Denied - Approve 1 ');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // ======================== LOGOUT & LOGIN - dcfo_npo (APPROVE AFTER DENY) ========================
    await base.performLogout();
    await base.thread();

    await base.performLogin('dcfo_npo@gmail.com', 'Pn!NskTNlvfJa8k~TRb$');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.page.click("xpath=(//*[text()='Approve'])[1]");
    await base.wait(2);
    await base.threadone();

    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - After Denied - Approve 2');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // ======================== LOGOUT & LOGIN - finance_reconcile_npo (REJECT) ========================
    await base.performLogout();
    await base.thread();

    await base.performLogin('finance_reconcile_npo@gmail.com', 'I9y0qsXlTx2u37ygJwis');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.page.click("xpath=(//*[text()='Reject'])[1]");
    await base.wait(2);
    await base.threadone();

    await base.page.fill("xpath=//*[@autocomplete='off']", 'Testing - Reject');
    await base.threadhalf();
    await base.NextButton();

    await base.thread();
    await base.thread();

    // ======================== LOGOUT & LOGIN - branch_npo (FINAL) ========================
    await base.performLogout();
    await base.thread();

    await base.performLogin('branch_npo@gmail.com', 'P$2EorwK5cyc@Ar-8NOT');
    await base.thread();
    await base.thread();

    await base.tabNavigation(30);

    await base.EyeButton();
    await base.threadhalf();
    await base.textpath('History');
    await base.threadhalf();

    // Download icon
    await base.page.click("xpath=(//*[@role='button'])[6]");
    await base.thread();

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    //await base.quitbrowser();
  }
})();
