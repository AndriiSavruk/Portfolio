
class TrnsexpensesPage {

    get userEmail () {return $('//*[@id="root"]/header/div/div[3]/p')};
    

    get logoutButton () {
        return $('.UserLogOut_logOutBtn__oTEqX')
    }

    get yesLogoutButton () {
        return $('//*[@id="root"]/header/div/div[3]/div[2]/div/div[2]/button[1]');
    }

    get exitModalContainer () {return $('//*[@id="root"]/header/div/div[3]/div[2]/div');}
    get dateField () {return $('//*[@id="root"]/section/div/div/div/div[3]/form/label[1]/div/div/input');}
    get balanceField () {return $('//*[@id="root"]/section/div/div/div/div[1]/form/div/label/input');}
    get productDescriptionField () {return $('input[name="description"]');}
    get productCategoryBtn () {return $('.css-tlfecz-indicatorContainer')}
    get productCategoryProductsChoose () {return $('#react-select-2-option-1')}
    get productCategoryField () {return $('.css-aep54n-singleValue');}
    get productSumField () {return $('input[name="amount"]');}
    get inputButton () {return $('.FormTransaction_buttonInput__Fqdxq');}
    get expensesTable () {return $('.ExpensesComponent_transactions__GBp52')}
    async clickOnLogoutButton() {
        await this.logoutButton.click();
    }

    async clickOnYesLogoutButton() {
        await this.yesLogoutButton.click();
    }

    async clickOnInputButton() {
        await this.inputButton.click();
    }

}

export default new TrnsexpensesPage();