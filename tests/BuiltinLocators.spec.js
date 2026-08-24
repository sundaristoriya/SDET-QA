//locators represent a way to find element(s) on the page at any moment.

// These are the recommended built-in locators.

// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

const {test,expect} = require ('@playwright/test');

test('Buildin locators',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // page.getByAltText() to locate an element, usually image, by its text alternative.
    await expect(page.getByAltText('company-branding')).toBeVisible('orangehrm-login-branding');

    // page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // page.getByPlaceholder() to locate an input by placeholder.
    await page.getByRole('button',{type:"submit"}).click();
    
    // page.getByText() to locate by text content.
    await expect(await page.getByText('manda user')).toBeVisible();


    // page.getByLabel() to locate a form control by associated label's text.
    await page.getByText('Admin').click();
    await page.getByLabel("Username")

   
    await page.waitForTimeout(5000);



})

