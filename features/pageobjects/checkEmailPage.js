import { BasePage } from "./basePage"

export class CheckEmailPage extends BasePage {
    getCheckEmailHeader() {
        return $('.x28a');
    }

    getEmailText() {
        return $('//span[@class="x283"][1]');
    }
}
