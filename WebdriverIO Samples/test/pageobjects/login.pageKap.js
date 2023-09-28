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

    async setUserEmail(value) {
        await this.inputEmail.setValue(value);
    }

    async setUserPassword(value) {
        await this.inputPassword.setValue(value);
    }

    async clickOnLogInButton() {
        await this.btnLogIn.click();
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }

}

export default new LoginPage();
