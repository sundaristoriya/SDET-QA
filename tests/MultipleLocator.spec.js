const{test,expect}= require("@playwright/test")

test('Locatemultiplelements',async({page})=>{

    //Launch URL
    // await page.goto('https://demoblaze.com/');

    // const links = await page.$$('a');

    // for(const link of links){

    //  const linkText = await link.textContent();
    //  console.log(linkText)


    // }

    await page.goto('https://demoblaze.com/');

    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

  const products =  await page.$$("//div[@id='tbodyid']//h4/a") ;

    
  for(const product of products){

        const productname = await product.textContent();

        console.log(productname);
  }

  

});