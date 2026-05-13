const{test,expect}=require('@playwright/test');


test('locators',async({page})=>{

await page.goto('https://demoblaze.com/');
//click on login buttton
await page.click('id=login2');
//provide username
await page.fill('#loginusername',"pavanol");
//provide password
await page.fill('#loginpassword',"test@123");
//click on login button
await page.click('//button[@onclick="logIn()"]');

// verify logout link presence
const logoutlink = await page.locator("//a[@id='logout2']");





await page.close();



}); 