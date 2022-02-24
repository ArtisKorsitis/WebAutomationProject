import { pages } from "../support/pages";
import { data } from "../support/data";

export class SignupTest {
    async fillOutCreateAccountForm() {
        if (await pages.createAccountPage.getCookieFrame().isDisplayed({ timeout: 5000 })) {
            await browser.switchToFrame(await pages.createAccountPage.getCookieFrame())
            await pages.createAccountPage.getAcceptCookiesButton().click()
            // await browser.switchToFrame(null)
        }

        await pages.createAccountPage.getInputField("email").setValue(await data.userData.oracleUser.email);
        await pages.createAccountPage.getInputField("password").setValue(await data.userData.oracleUser.password);
        await pages.createAccountPage.setDropdownValue("country", await data.userData.oracleUser.country);
        await pages.createAccountPage.setDropdownValue("state", await data.userData.oracleUser.state);
        await pages.createAccountPage.getInputField("retypePassword").setValue(await data.userData.oracleUser.password);
        await pages.createAccountPage.getInputField("firstName").setValue(await data.userData.oracleUser.firstName);
        await pages.createAccountPage.getInputField("lastName").setValue(await data.userData.oracleUser.lastName);
        await pages.createAccountPage.getInputField("lastName").setValue(await data.userData.oracleUser.lastName);
        await pages.createAccountPage.getInputField("jobTitle").setValue(await data.userData.oracleUser.jobTitle);
        await pages.createAccountPage.getInputField("workPhone").setValue(await data.userData.oracleUser.phone);
        await pages.createAccountPage.getInputField("companyName").setValue(await data.userData.oracleUser.company);
        await pages.createAccountPage.getInputField("address1").setValue(await data.userData.oracleUser.address);
        await pages.createAccountPage.getInputField("city").setValue(await data.userData.oracleUser.city);
        await pages.createAccountPage.getInputField("postalCode").setValue(await data.userData.oracleUser.postCode);
    }

    async assertCheckEmailPage() {
        await pages.checkEmailPage.getCheckEmailHeader().waitForDisplayed({ timeout: 5000 });
        await expect(await pages.checkEmailPage.getEmailText()).toHaveText(`We sent an email to ${await data.userData.oracleUser.email} with a button to verify your email address.`);
    }
}