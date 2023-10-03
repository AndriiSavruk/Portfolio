import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.pageKap.js'
import KaptrnsexpensesPage from '../pageobjects/Kaptrnsexpenses.page.js'


describe('Login & Logout block', () => {
    it('Test case #1 Valid Login', async () => {
         // Precondition
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
    });
    

    it('Test case # 2 Login with invalid password', async () => {
        await browser.reloadSession();
        // Precondition
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
        // Check if user stays at login page
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/');
    });

    it('Test case #3 Login with invalid login', async () => {
        await browser.reloadSession();
        // Precondition
        await browser.url('https://kapusta-qa.netlify.app/');

        // Step 1 Enter invalid login into "Email" field
        const invalEmail = Math.random().toString(5).substring(2)+"@gmail.com";
        await LoginPage.setUserEmail(invalEmail);
        // Check if data is entered to the field
        await expect(LoginPage.inputEmail).toHaveValue(invalEmail);

        // Step 2 Enter valid password into "Password" field
        await LoginPage.setUserPassword('testing11');
        // Check if data is entered to the field
        await expect(LoginPage.inputPassword).toHaveValue('testing11');
        // Check if data is reprresented as dots instead of characters
        await expect(LoginPage.inputPassword).toHaveAttribute('type', 'password');

        // Step 3 Click "LOG IN" button
        await LoginPage.clickOnLogInButton();
        // Check if red alert apears
        await expect(LoginPage.redAlert).toBeDisplayed();
        // Check if user stays at login page
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/');
    })

    it('Test case #4 Logout', async () => {
        await browser.reloadSession();
        // Preconditions
        await browser.url('https://kapusta-qa.netlify.app/');
        await LoginPage.login('tester@sample.com','testing11');
        // Check if User is on the transactions/expenses page. 
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/transactions/expenses');

        // Step 1 Click on the "Exit" link at the top right corner
        await KaptrnsexpensesPage.clickOnLogoutButton();
        // Check if modal window appears
        await expect(KaptrnsexpensesPage.exitModalContainer).toBeDisplayed();
        // Check if modal window has text 'Do you really want to leave?'
        await expect(KaptrnsexpensesPage.exitModalContainer).toHaveTextContaining('Do you really want to leave?');

        // Step 2 - Click on the "Yes" button
        await KaptrnsexpensesPage.clickOnYesLogoutButton();
        // Check if user is redirected to the Login page
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/');
        // Check if "Username" and "Password" field have text "your@email.com" and "password"
        await expect(LoginPage.inputEmail).toHaveAttribute('placeholder','your@email.com');
        await expect(LoginPage.inputPassword).toHaveAttribute('placeholder','password');
    })
})

// 