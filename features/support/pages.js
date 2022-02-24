import { BasePage } from '../pageobjects/basePage';
import { CreateAccountPage } from "../pageobjects/createAcountPage";
import { CheckEmailPage } from "../pageobjects/checkEmailPage";

class Pages {
    constructor() {
        this.basePage = new BasePage();
        this.createAccountPage = new CreateAccountPage();
        this.checkEmailPage = new CheckEmailPage();
    }
}

export const pages = new Pages();