exports.RegisterPage = class RegisterPage {

    constructor(page) {
        this.page = page;
        this.register_username = page.getByRole('textbox', { name: 'Username' })
        this.register_email = page.getByRole('textbox', { name: 'Email Address' })
        this.register_password = page.getByRole('textbox', { name: 'Password', exact: true })
        this.password_visibility = page.getByRole('button').filter({ hasText: 'visibility_off' }).nth(0)
        this.confirm_password = page.getByRole('textbox', { name: 'Confirm Password' })
        this.confirm_visibility = page.locator('form div').filter({ hasText: 'Confirm Password *' }).getByRole('button')
        this.signup_button = page.getByRole('button', { name: 'SIGN UP' })
    }
    async gotoRegisterPage() {
        await this.page.goto('https://qa.planetimpossible.com/public/register')
    }
    async registerMethod(username, email, password) {
        await this.register_username.fill(username);
        await this.register_email.fill(email);
        await this.register_password.fill(password);
        await this.password_visibility.click();
        await this.confirm_password.fill(password);
        await this.confirm_visibility.click();
        await this.signup_button.click();
    }
}