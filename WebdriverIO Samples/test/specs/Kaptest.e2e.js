
import LoginPage from '../pageobjects/login.pageKap.js'
import KaptrnsexpensesPage from '../pageobjects/Kaptrnsexpenses.page.js'


describe.skip('Login & Logout block', () => {
    it('Test case #1 Valid Login', async () => {
        await browser.reloadSession();
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

describe.skip('Registration block', () => {

    it('Test case #5 Registration with valid data', async () => {
        await browser.reloadSession();
        // Preconditions
        await browser.url('https://kapusta-qa.netlify.app/');

        // Step 1 Enter valid login into Email field
        const randomEmail = Math.random().toString(5).substring(2)+"@gmail.com";
        await LoginPage.setUserEmail(randomEmail);
        // Check if data is entered to the field
        await expect(LoginPage.inputEmail).toHaveValue(randomEmail);

        // Step 2 Enter valid password into Password field
        const randomPassword = Math.random().toString(5).substring(2);
        await LoginPage.setUserPassword(randomPassword);
        // Check if data is entered to the field
        await expect(LoginPage.inputPassword).toHaveValue(randomPassword);
        // Check if data is reprresented as dots instead of characters
        await expect(LoginPage.inputPassword).toHaveAttribute('type', 'password');

        // Step 3 Click on Registration button
        await LoginPage.clickOnRegistrButton();
        // Check if User is redirected to the transactions/expenses page. 
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/transactions/expenses');
        // Check if User email is displayed in the right top corner
        await expect(KaptrnsexpensesPage.userEmail).toHaveText(randomEmail);

        // Step 4 Click on the "Exit" link at the top right corner
        await KaptrnsexpensesPage.clickOnLogoutButton();
        // Check if modal window appears
        await expect(KaptrnsexpensesPage.exitModalContainer).toBeDisplayed();
        // Check if modal window has text 'Do you really want to leave?'
        await expect(KaptrnsexpensesPage.exitModalContainer).toHaveTextContaining('Do you really want to leave?');
        // Click on Yes button
        await KaptrnsexpensesPage.clickOnYesLogoutButton();
        // Check if user is redirected to the Login page
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/');

        // Steps 5,6,7 Login with the same data
        await LoginPage.login(randomEmail,randomPassword);
        // Check if User is redirected on the transactions/expenses page. 
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/transactions/expenses');
        // Check if User email is displayed in the right top corner
        await expect(KaptrnsexpensesPage.userEmail).toHaveText(randomEmail);
    })

    it('Test case #6 Registration with invalid login', async () => {
        await browser.reloadSession();
        // Preconditions
        await browser.url('https://kapusta-qa.netlify.app/');

        // Step 1 Enter invalid login into "Email" field
        const invalidLogin = 'abc@dfg';
        await LoginPage.setUserEmail(invalidLogin);
        // Check if data is entered to the field
        await expect(LoginPage.inputEmail).toHaveValue(invalidLogin);
        // Leaving the field
         await LoginPage.inputPassword.click();
         await browser.pause(2000);
        // Check if red warning appears and has text 'Invalid email'
        await expect(LoginPage.inputWarning).toBeDisplayed();
        await expect(LoginPage.inputWarning).toHaveText('Invalid email');

        // Step 2 Enter valid password into "Password" field
        const randomPassword = Math.random().toString(5).substring(2);
        await LoginPage.setUserPassword(randomPassword);
        // Check if data is entered to the field
        await expect(LoginPage.inputPassword).toHaveValue(randomPassword);
        // Check if data is reprresented as dots instead of characters
        await expect(LoginPage.inputPassword).toHaveAttribute('type', 'password');

        // Step 3 Click on the "Registration" button
        await LoginPage.clickOnRegistrButton();
        // Check if user is still on the login page
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/');
    })

    it('Test case #7 Registration with invalid password', async () => {
        await browser.reloadSession();
        // Preconditions
        await browser.url('https://kapusta-qa.netlify.app/');

        // Step 1 Enter valid login into Email field
        const randomEmail = Math.random().toString(5).substring(2)+"@gmail.com";
        await LoginPage.setUserEmail(randomEmail);
        // Check if data is entered to the field
        await expect(LoginPage.inputEmail).toHaveValue(randomEmail);

        // Step 2 Enter invalid password into the "Password" field
        const invalidPassword = 'abc';
        await LoginPage.setUserPassword(invalidPassword);
        // Check if data is entered to the field
        await expect(LoginPage.inputPassword).toHaveValue(invalidPassword);
        // Check if data is reprresented as dots instead of characters
        await expect(LoginPage.inputPassword).toHaveAttribute('type', 'password');
        // Leaving the field
        await LoginPage.inputEmail.click();
        await browser.pause(2000);
        // Check if red warning appears and has text 'Min length 7'
        await expect(LoginPage.passwordWarning).toBeDisplayed();
        await expect(LoginPage.passwordWarning).toHaveText('Min length 7');

        // Step 3 Click on the "Registration" button
        await LoginPage.clickOnRegistrButton();
        // Check if user is still on the login page
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/');
    })

    it('Test case #8 Registration with empty form', async () => {
        await browser.reloadSession();
        // Preconditions
        await browser.url('https://kapusta-qa.netlify.app/');

        // Step 1 Click on the "Registration" button
        await LoginPage.clickOnRegistrButton();
        await browser.pause(2000);
        // Check if user is still on the login page
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/');
        // Check if red asterisk near the "Email" string appears
        await expect(LoginPage.emailRedAsterisk).toBeDisplayed();
        // Check if red asterisk near the "Password" string appears
        await expect(LoginPage.passwordRedAsterisk).toBeDisplayed();
        // Check if red warning under the login field appears and has text "This is a required field"
        await expect(LoginPage.emailRedWarning).toBeDisplayed();
        await expect(LoginPage.emailRedWarning).toHaveText('This is a required field');
        // Check if red warning under the login field appears and has text "This is a required field"
        await expect(LoginPage.passwordRedWarning).toBeDisplayed();
        await expect(LoginPage.passwordRedWarning).toHaveText('This is a required field');
    })
})

describe('Operations block', () => {

    it('Test case #9 Insert expense operation', async () => {
        await browser.reloadSession();
        // Preconditions
        await browser.url('https://kapusta-qa.netlify.app/');
        await LoginPage.login('tester@sample.com','testing11');
        // Check if User is on the transactions/expenses page. 
        await expect(browser).toHaveUrl('https://kapusta-qa.netlify.app/transactions/expenses');

        // Step 1 Enter the product description
        await KaptrnsexpensesPage.productDescriptionField.setValue('Some potato');
        // Check if data is entered to the field
        await expect(KaptrnsexpensesPage.productDescriptionField).toHaveValue('Some potato');

        // Step 2 Choose the category
        await KaptrnsexpensesPage.productCategoryBtn.click();
        await KaptrnsexpensesPage.productCategoryProductsChoose.click();
        await browser.pause(2000);
        // Check if data is entered to the field
        await expect(KaptrnsexpensesPage.productCategoryField).toHaveText('Products');

        // Step 3 Enter sum of money
        await KaptrnsexpensesPage.productSumField.setValue('50');
        // Check if data is entered to the field
        await expect(KaptrnsexpensesPage.productSumField).toHaveValue('50');

        // Step 4 Click on 'Input' button
        await KaptrnsexpensesPage.clickOnInputButton();
        await browser.pause(2000);
        // Check if the operation is added to the table
        await expect(KaptrnsexpensesPage.expensesTable).toHaveTextContaining('Some potato');

    })
})

