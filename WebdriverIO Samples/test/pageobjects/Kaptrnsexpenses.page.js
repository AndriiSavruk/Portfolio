
class TrnsexpensesPage {

    get userEmail () {return $('//*[@id="root"]/header/div/div[3]/p')};
    

    get logoutButton () {
        return $('.UserLogOut_logOutBtn__oTEqX')
    }

    get yesLogoutButton () {
        return $('//*[@id="root"]/header/div/div[3]/div[2]/div/div[2]/button[1]');
    }

    get exitModalContainer () {return $('//*[@id="root"]/header/div/div[3]/div[2]/div');}
    get productDescriptionField () {return $('input[name="description"]');}
    get productCategoryField () {return $('#react-select-4-input');}
    get productSumField () {return $('input[name="amount"]');}
    async clickOnLogoutButton() {
        await this.logoutButton.click();
    }

    async clickOnYesLogoutButton() {
        await this.yesLogoutButton.click();
    }

}

export default new TrnsexpensesPage();