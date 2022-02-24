import { BasePage } from "./basePage"

export class CreateAccountPage extends BasePage {
    getInputField(name) {
        return $(`input[id="sView1:r1:0:${name}::content"]`);
    }

    getCookieFrame() {
        return $('iframe[title*=Cookie]');
    }

    getAcceptCookiesButton() {
        return $('//a[text()="Accept all"]');
    }

    getDropdownField(name) {
        return $(`select[id="sView1:r1:0:${name}::content"]`)
    }

    getSignupButton() {
        return $('div[id="sView1:r1:0:b1"]');
    }

    async setDropdownValue(name, value) {
        await this.getDropdownField(name).click()
        await this.getDropdownField(name).selectByAttribute('title', value)
    }
}