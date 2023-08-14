import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
const LoginPage = new Login();
const HPage = new HomePage();
describe('Test with Page Object Pattern using', () => {
    it('Test 1', () => {
        LoginPage.navigate();
        LoginPage.insertEmail("user888@gmail.com");
        LoginPage.insertPassword("1234567890");
        LoginPage.clickButton();
        HPage.checkLogo();
        HPage.logOut();
    })
    it('Test 2', () => {
        LoginPage.navigate();
        LoginPage.insertEmail("testowyqa@qa.team");
        LoginPage.insertPassword("QA!automation-1");
        LoginPage.clickButton();
        HPage.checkLogo();
        HPage.logOut();
    })
})
