import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.pageKap.js'
import KaptrnsexpensesPage from '../pageobjects/Kaptrnsexpenses.page.js'


describe('Login & Logout block', () => {
    it.skip('Test case #1 Valid Login', async () => {
        await browser.url('https://kapusta-qa.netlify.app/');

        // Step 1 - Enter valid login into "Email" field
        await LoginPage.setUserEmail('tester@sample.com');
        // Check if data is entered to the field
        await expect(LoginPage.inputEmail).toHaveValue('tester@sample.com');

        // Step 2 - Enter valid password into "Password" field
        await LoginPage.setUserPassword('testing11');
        // Check if data is entered to the field
        await expect(LoginPage.inputPassword).toHaveValue('testing11');
        // Check if data is reprresented as dots instead of characters
        await expect(LoginPage.inputPassword).toHaveAttribute('type', 'password');

        // Step 3 - Click "LOG IN" button
        await LoginPage.clickOnLogInButton();
        // Check if User is redirected to the transactions/expenses page. 
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/transactions/expenses');
        // Check if User email is displayed in the right top corner
        await expect(KaptrnsexpensesPage.userEmail).toHaveText('tester@sample.com');
    })

    it('Test case # 2 Login with invalid password', async () => {
        await browser.url('https://kapusta-qa.netlify.app/');

        // Step 1 - Enter valid login into "Email" field
        await LoginPage.setUserEmail('tester@sample.com');
        // Check if data is entered to the field
        await expect(LoginPage.inputEmail).toHaveValue('tester@sample.com');

        // Step 2 - Enter invalid password into "Password" field
        await LoginPage.setUserPassword('qwertyuio');
        // Check if data is entered to the field
        await expect(LoginPage.inputPassword).toHaveValue('qwertyuio');
        // Check if data is reprresented as dots instead of characters
        await expect(LoginPage.inputPassword).toHaveAttribute('type', 'password');

        // Step 3 - Click "LOG IN" button
        await LoginPage.clickOnLogInButton();
        // Check if red alert apears
        await expect(LoginPage.redAlert).toBeDisplayed();
        // Check if alert has message "Sorry but email doesn't exist / password is wrong"
       
        

    })
})

// await LoginPage.login('tomsmith', 'SuperSecretPassword!')