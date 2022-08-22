import { Locator, Page } from "@playwright/test";

class coursePage {
    test: any;
    page: Page;
    expect: any;
    ultimateqaButton: Locator;
    signinButton: Locator;
    mainPlayButton: Locator;
    smallPlayButton: Locator;
    volumeButton: Locator;
    settingsButton: Locator;
    fullscreenButton: Locator;
    showcontentButton1: Locator;
    showcontentButton2: Locator;
    showcontentButton3: Locator;
    showcontentButton4: Locator;
    showcontentButton5: Locator;
    showcontentButton6: Locator;
    getstartednowButton: Locator;


    constructor(page:Page) {
        this.page = page;
        this.ultimateqaButton = page.locator('[title="Ultimate QA"]');
        this.signinButton = page.locator('role=link[name="Sign In"]');
        this.mainPlayButton = page.locator('#w-vulcan-v2-45 >> nth=0');
        this.smallPlayButton = page.locator('#w-vulcan-v2-45 > div.w-bottom-bar.w-css-reset > div > div.w-bottom-bar-left.w-css-reset > div > div > div');
        this.volumeButton = page.locator('#w-vulcan-v2-45 > div.w-bottom-bar.w-css-reset > div > div.w-bottom-bar-right.w-css-reset > div.w-bottom-bar-right-inner-anchor.w-css-reset > div > div:nth-child(1) > div > button > div');
        this.settingsButton = page.locator('#w-vulcan-v2-45 > div.w-bottom-bar.w-css-reset > div > div.w-bottom-bar-right.w-css-reset > div.w-bottom-bar-right-inner-anchor.w-css-reset > div > div:nth-child(3) > div > button > div');
        this.fullscreenButton = page.locator('#w-vulcan-v2-45 > div.w-bottom-bar.w-css-reset > div > div.w-bottom-bar-right.w-css-reset > div.w-bottom-bar-right-inner-anchor.w-css-reset > div > div:nth-child(4) > div > button > div');
        this.showcontentButton1 = page.locator('[aria-label="toggle curriculum content"] >> nth=0');
        this.showcontentButton2 = page.locator('[aria-label="toggle curriculum content"] >> nth=1');
        this.showcontentButton3 = page.locator('');
        this.showcontentButton4 = page.locator('');
        this.showcontentButton5 = page.locator('');
        this.showcontentButton6 = page.locator('');
        this.getstartednowButton = page.locator('');
}
}

export {
    coursePage
}