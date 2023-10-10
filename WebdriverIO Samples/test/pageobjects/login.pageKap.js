
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

    get btnRegistr () {
        return $('//*[@id="root"]/section/div/div/div/form/div[3]/button[1]');
    }

    get inputWarning () {
        return $('//*[@id="root"]/section/div/div/div/form/div[1]/p');
    }

    get passwordWarning () {
        return $('//*[@id="root"]/section/div/div/div/form/div[2]/p')
    }

    get redAlert () {
        return $('div[role="alert"]');
    }

    get emailRedAsterisk () {
        return $('//*[@id="root"]/section/div/div/div/form/div[1]/label/span');
    }

    get passwordRedAsterisk () {
        return $('//*[@id="root"]/section/div/div/div/form/div[2]/label/span');
    }

    get emailRedWarning () {
        return $('//*[@id="root"]/section/div/div/div/form/div[1]/p');
    }

    get passwordRedWarning () {
        return $('//*[@id="root"]/section/div/div/div/form/div[2]/p');
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

    async clickOnRegistrButton() {
        await this.btnRegistr.click();
    }


    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogIn.click();
    }

}

export default new LoginPage();
