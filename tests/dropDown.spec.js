const {test,expect} = require ('@playwright/test')

test('Dropdwon Handle',async({page})=>{
    
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{type : 'submit'}).click();

    //await page.locator('.product_sort_container').selectOption('Price (low to high)');
   // await page.locator('.product_sort_container').selectOption({value : 'lohi'});
      await page.locator('.product_sort_container').selectOption({label : 'Price (low to high)'});

    await page.waitForTimeout(5000);





})