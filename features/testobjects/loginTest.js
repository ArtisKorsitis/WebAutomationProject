import { pages } from "../support/pages";

export class LoginTest {
    async fillEmailField(email) {
        await pages.basePage.getEmailInputField().setValue(email);
    }

    async fillPasswordField(password) {
        await pages.basePage.getPasswordInputField().setValue(password);
    }

    async assertInvalidCredentialsMsg() {
        await pages.basePage.getInvalidCredetialsMsg().waitForDisplayed({ timeout: 5000 });
        await expect(await pages.basePage.getInvalidCredetialsMsg()).toHaveText("Invalid username and/or password.");
    }
}