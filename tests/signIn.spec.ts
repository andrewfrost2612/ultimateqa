import { test , expect } from '@playwright/test'
import { sign_inPage } from '../framework/signIn'


test('basic', async ({page}) => {
    const sign_in = new sign_inPage(page);
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    expect(page.locator('[title="Ultimate QA"]').isVisible());
    await sign_in.ultimateQaImage();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections');
    await sign_in.TopSignInButton();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/users/sign_in');
    await page.locator('input[type=checkbox]').check();
    expect(await page.locator('input[type=checkbox]').isChecked()).toBeTruthy();
    await page.locator('input[type=checkbox]').uncheck();
    expect(await page.locator('input[type=checkbox]').isChecked()).toBeFalsy();
});


test('loginsuccess', async ({page}) => {
    const sign_in = new sign_inPage(page);
    const locator = page.locator('text="Signed in successfully."');
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.emailField();
    await sign_in.passwordField();
    await page.locator('input[type=checkbox]').check();
    expect(await page.locator('input[type=checkbox]').isChecked()).toBeTruthy();
    await sign_in.MainSignInButton();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections');
    await expect(locator).toHaveText('Signed in successfully.');
    //await page.pause();
});

test('invalid_login', async ({page}) => {
    const sign_in = new sign_inPage(page);
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.email.fill('admin');
    await sign_in.password.fill('admin');
    await sign_in.MainSignInButton();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/users/sign_in');
    expect(page.locator('text="Invalid email or password."').isVisible());    
});

test('loginfailed_emptyEmail', async ({page}) => {
    const sign_in = new sign_inPage(page);
    const locator1 = page.locator('[data-message="Invalid email or password."]');
    const locator2 = page.locator('.notice__form-error');
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.passwordField();
    await sign_in.MainSignInButton();
    await expect(locator1).toHaveText('Invalid email or password.');      
    await expect(locator2).toHaveText('Invalid email or password.');
});

test('loginfailed_emptyPassword', async ({page}) => {
    const sign_in = new sign_inPage(page);
    const locator1 = page.locator('[data-message="Invalid email or password."]');
    const locator2 = page.locator('.notice__form-error');
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.emailField();
    await sign_in.MainSignInButton();
    await expect(locator1).toHaveText('Invalid email or password.');      
    await expect(locator2).toHaveText('Invalid email or password.');
});

test('forgotpass', async ({page}) => {
    const sign_in = new sign_inPage(page);
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.ForgotPass();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/users/password/new');   
});

test('linkedin_login', async ({page}) => {
    const sign_in = new sign_inPage(page);
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.LinkedinButton();
    await expect(page.url()).toContain('/uas/login?session_redirect');   
});

test('facebook_login', async ({page}) => {
    const sign_in = new sign_inPage(page);
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.FBButton();
    await expect(page.url()).toContain('/login.php?skip_api_login');   
});

test('google_login', async ({page}) => {
    const sign_in = new sign_inPage(page);
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.GoogleButton();
    await expect(page.url()).toContain('/o/oauth2/auth?access_type=offline');   
});

test('create account', async ({page}) => {
    const sign_in = new sign_inPage(page);
    await page.goto('https://courses.ultimateqa.com/users/sign_in');
    await sign_in.CreateAccountButton();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/users/sign_up');   
});