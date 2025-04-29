exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.visibility = page.getByRole('button').filter({ hasText: 'visibility_off' })
        this.login_button = page.getByRole('button', { name: 'LOG IN' })
    }
    async gotoLoginPage() {
        await this.page.goto('https://qa.planetimpossible.com/agentlogin')
    }
    async loginMethod(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.visibility.click();
        await this.login_button.click();
    }
}