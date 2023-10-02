import { $ } from '@wdio/globals'

class LoginPage  {
    
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogIn () {
        return $('//*[@id="root"]/section/div/div/div/form/div[3]/button[2]');
    }

    get redAlert () {
        return $('div[role="alert"]');
    }

    get logoutButton () {
        return $('.UserLogOut_logOutBtn__oTEqX')
    }

    get yesLogoutButton () {
        return $('//*[@id="root"]/header/div/div[3]/div[2]/div/div[2]/button[1]');
    }

    async setUserEmail(value) {
        await this.inputEmail.setValue(value);
    }

    async setUserPassword(value) {
        await this.inputPassword.setValue(value);
    }

    async clickOnLogInButton() {
        await this.btnLogIn.click();
    }

    async clickOnLogoutButton() {
        await this.logoutButton.click();
    }

    async clickOnYesLogoutButton() {
        await this.yesLogoutButton.click();
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }

}

export default new LoginPage();
