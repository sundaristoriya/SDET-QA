const{test,expect} = require ('@playwright/test')


test('frames',async({page})=>{

    await page.goto('https://demo.automationtesting.in/Frames.html');

    const frame = page.frame('//iframe[@id="singleframe"]');
    
   

    await page.waitForTimeout(2000);

});