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

    constructor(page:Page) {
        this.page = page;
        this.ultimateqaButton = page.locator('[title="Ultimate QA"]');
        this.signinButton = page.locator('role=link[name="Sign In"]');
        this.mainPlayButton = page.locator('#w-vulcan-v2-45 >> nth=0');
        this.smallPlayButton = page.locator('#w-vulcan-v2-45 > div.w-bottom-bar.w-css-reset > div > div.w-bottom-bar-left.w-css-reset > div > div > div');
        this.volumeButton = page.locator('#w-vulcan-v2-45 > div.w-bottom-bar.w-css-reset > div > div.w-bottom-bar-right.w-css-reset > div.w-bottom-bar-right-inner-anchor.w-css-reset > div > div:nth-child(1) > div > button > div');
}
}

export {
    coursePage
}