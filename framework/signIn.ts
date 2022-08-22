import { Locator, Page } from '@playwright/test';

class sign_inPage {
    test: any;
    page: Page;
    expect: any;
    ultimateqaImage: Locator;
    topSignInButton: Locator;
    email: Locator;
    password: Locator;
    //rememberme: Locator;
    forgotpassword: Locator;
    mainSignInButton:Locator;
    linkedinButton: Locator;
    facebookButton: Locator;
    googleButton: Locator;
    createaccountButton: Locator;
    captcha: Locator;

    constructor(page: Page){
        this.page=page;
        this.ultimateqaImage = page.locator('[title="Ultimate QA"]');
        this.topSignInButton = page.locator('role=link[name="Sign In"]');
        this.email = page.locator('input[type=email]');
        this.password = page.locator('input[type=password]');
        //this.rememberme = page.locator('#user\[remember_me\]');
        this.mainSignInButton = page.locator('.button >> text=Sign in');
        this.forgotpassword = page.locator('[href="/users/password/new"]');
        this.linkedinButton = page.locator('.linkedin');
        this.facebookButton = page.locator('.facebook');
        this.googleButton = page.locator('.google');
        this.createaccountButton = page.locator('text=Create a new account');


    }
    async ultimateQaImage () {
        await this.ultimateqaImage.click();

    }

    async TopSignInButton () {
        await this.topSignInButton.click();

    }
    
    async emailField() {
        await this.email.click();
        await this.email.fill('andrey.didenko@mobindustry.net');
    }
    
    async passwordField() {
        await this.password.click();
        await this.password.fill('Qwerty123456');
    }

    async MainSignInButton () {
        await this.mainSignInButton.click();

    }

    async ForgotPass () {
        await this.forgotpassword.click();

    }

    async LinkedinButton () {
        await this.linkedinButton.click();

    }

    async FBButton () {
        await this.facebookButton.click();

    }

    async GoogleButton () {
        await this.googleButton.click();

    }

    async CreateAccountButton () {
        await this.createaccountButton.click();

    }

    async Login () {
        await this.page.goto('https://courses.ultimateqa.com/users/sign_in');
        await this.email.click();
        await this.email.fill('andrey.didenko@mobindustry.net');
        await this.password.click();
        await this.password.fill('Qwerty123456');
        await this.mainSignInButton.click();
    }
}

export {
    sign_inPage
}