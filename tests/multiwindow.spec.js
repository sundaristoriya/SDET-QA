const{test,expect,chromium} = require('@playwright/test')

test('Handling multi window', async({page})=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1= await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');


    const pageprmiss = context.waitForEvent('page');
    await page1.click('//a [@href="http://www.orangehrm.com"]');

    const newPage = await pageprmiss;
    await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');


     await page1.waitForTimeout(3000);
    await newpage.waitForTimeout(3000);

    await browser.close();



})