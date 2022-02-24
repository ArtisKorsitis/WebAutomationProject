import { NavigationTest } from '../testobjects/navigationTest';
import { LoginTest } from "../testobjects/loginTest";
import { SignupTest } from "../testobjects/signupTest";

class Tests {
    constructor() {
        this.navigationTest = new NavigationTest();
        this.loginTest = new LoginTest();
        this.signupTest = new SignupTest();
    }
}

export const tests = new Tests();
