import { Locator, Page } from '@playwright/test';

class collectionsPage {
    test: any;
    page: Page;
    expect: any;
    topArrowButton: Locator;
    dropdownmenu: Locator;
    dropdown_MyAccount: Locator;
    dropdown_MyDashboard: Locator;
    dropdown_Support: Locator;
    dropdown_signOut: Locator;
    search: Locator;
    courseitem: Locator;
    leftarrow: Locator;
    rightarrow: Locator;
    firstpage: Locator;
    secondpage: Locator;
    thirdpage: Locator;



    constructor(page: Page) {
        this.page = page;
        this.topArrowButton = page.locator('.dropdown__toggle-button');
        this.dropdownmenu = page.locator('.dropdown__menu');
        this.dropdown_MyAccount = page.locator('.dropdown__menu-item >> text=My Account');
        this.dropdown_MyDashboard = page.locator('.dropdown__menu-item >> text=My Dashboard');
        this.dropdown_Support = page.locator('.dropdown__menu-item >> text=Support');
        this.dropdown_signOut = page.locator('.dropdown__menu-item >> text=Sign Out');
        this.search = page.locator('.form__control.form__control-search');
        this.courseitem = page.locator('.course-card__body >> nth=1');
        this.leftarrow = page.locator('.pagination__pages [aria-label="Previous page"]');
        this.rightarrow = page.locator('.pagination__pages [aria-label="Next page"]');
        this.firstpage = page.locator('.pagination__page-number >> text=1');
        this.secondpage = page.locator('.pagination__page-number >> text=2');
        this.thirdpage = page.locator('.pagination__page-number >> text=3');

    }

    async Dropdown_myaccount() {
        await this.topArrowButton.click();
        await this.dropdown_MyAccount.click();
    }

    async Dropdown_dashboard() {
        await this.topArrowButton.click();
        await this.dropdown_MyDashboard.click();
    }

    // async Dropdown_support() {
    //     await this.dropdownmenu.click();
    //     await this.dropdown_Support.click();
    // }

    async Dropdown_signout() {
        await this.topArrowButton.click();
        await this.dropdown_signOut.click();
    }


    
}

export {
    collectionsPage
}