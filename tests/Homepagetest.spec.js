const {test, expect} = require ('@playwright/test');

test('Hoeme page ',async ({page})=>{

    await page.goto('https://demoblaze.com/');

    const pageurl = await page.url();
    console.log(pageurl);

    const pageTitile = await page.title('STORE');
    console.log(pageTitile);

    await expect(page).toHaveURL('https://demoblaze.com/');

    await expect(page).toHaveTitle('STORE');

    await page.close();
});
