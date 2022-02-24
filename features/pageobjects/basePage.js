export class BasePage {
    getEmailInputField() {
        return $('#sso_username');
    }

    getPasswordInputField() {
        return $('#ssopassword');
    }

    getSignInButton() {
        return $('#signin_button');
    }

    getCreateAccountButton() {
        return $('.cb41create-btn');
    }

    getInvalidCredetialsMsg() {
        return $("//span[@class='error-show']/div[@class='cb41error']")
    }
} 