import { test , expect, chromium } from '@playwright/test'
import { collectionsPage } from '../framework/collections'
import { sign_inPage } from '../framework/signIn';

test('dropdownMenu',async({page})=>{
    const sign_in = new sign_inPage(page);
    const collections = new collectionsPage(page);
    await sign_in.Login();
    // const email = page.locator('input[type=email]');
    // const password = page.locator('input[type=password]');
    // const signinbutton = page.locator('.button >> text=Sign in');
    // await page.goto('https://courses.ultimateqa.com/users/sign_in');
    // await email.fill('andrey.didenko@mobindustry.net');
    // await password.fill('Qwerty123456');
    // await signinbutton.click();
    // //await page.waitForTimeout(10000);
    // await expect(page).toHaveURL('https://courses.ultimateqa.com/collections');
    (await page.waitForSelector('text="Signed in successfully."')).isHidden();
    await collections.Dropdown_myaccount();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/account');
    await page.goto('https://courses.ultimateqa.com/collections');
    await collections.Dropdown_dashboard();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/enrollments');
    await page.goto('https://courses.ultimateqa.com/collections');
    await collections.Dropdown_signout();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/');
});

test('notifButton', async({page}) => {
    const sign_in = new sign_inPage(page);
    await sign_in.Login();
    (await page.waitForSelector('text="Signed in successfully."')).isHidden();
    const notifButton = page.locator('.notification-bell__icon >> nth=0');
    await notifButton.click();
    await expect(page.locator('.pane-header-wrapper')).toBeVisible();
    await notifButton.click();
    await expect(page.locator('.pane-header-wrapper')).toBeHidden();
});

test('allcoursesButton', async({page}) => {
    const browser = await chromium.launch();
    const sign_in = new sign_inPage(page);
    await sign_in.Login();
    const allcoursesButton = page.locator('a:has-text("All Courses")');
    await allcoursesButton.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections/courses');
    await browser.close();
});

test('search', async({page}) => {
    const sign_in = new sign_inPage(page);
    const collections = new collectionsPage(page);
    await sign_in.Login();
    await collections.search.click();
    await collections.search.fill('node');
    await page.keyboard.press('Enter');
    const label = page.locator('text = Search result for');
    await expect(label).toBeVisible();
    const searchresult = page.locator('div > h3');
    await expect(searchresult).toContainText(['node'], {ignoreCase:true});
});

test('gotocourse', async({page}) => {
    const collections = new collectionsPage(page);
    await page.goto('https://courses.ultimateqa.com/collections');
    await collections.courseitem.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/courses/coding-and-testing-an-authentication-api-nodejs-cypress');
});

test('pagination', async({page}) =>{
    const collections = new collectionsPage(page);
    await page.goto('https://courses.ultimateqa.com/collections');
    await collections.rightarrow.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections?page=2');
    await collections.rightarrow.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections?page=3');
    await collections.firstpage.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections?page=1');
    await collections.secondpage.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections?page=2');
    await collections.thirdpage.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections?page=3');
    await collections.leftarrow.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections?page=2');
    await collections.leftarrow.click();
    await expect(page).toHaveURL('https://courses.ultimateqa.com/collections?page=1');
});




