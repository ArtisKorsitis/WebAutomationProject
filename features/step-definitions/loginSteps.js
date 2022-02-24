import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from "../support/tests";

When("User inputs {word} as the email", async function (email) {
    await tests.loginTest.fillEmailField(email);
});

When("User inputs {word} as the password", async function (password) {
    await tests.loginTest.fillPasswordField(password);
});

Then("User sees invalid credentials message", async function () {
    await tests.loginTest.assertInvalidCredentialsMsg();
});

