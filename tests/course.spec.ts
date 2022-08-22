import { test , expect, chromium, firefox } from '@playwright/test'
import { coursePage } from '../framework/course'


test('videoplayer', async ({page}) => {
  const course = new coursePage(page);
  await page.goto('https://courses.ultimateqa.com/courses/react-and-nodejs');
  await page.waitForTimeout(5000);
  await course.mainPlayButton.click();
  await page.waitForTimeout(2000);
  await course.smallPlayButton.click();
  await page.waitForTimeout(2000);
  await course.smallPlayButton.click();
  await page.waitForTimeout(2000);
  await course.volumeButton.click();
  await page.waitForTimeout(2000);
  await course.volumeButton.click();
});

test('contentdisplaying', async ({page}) => {
  const course = new coursePage(page);
  await page.goto('https://courses.ultimateqa.com/courses/react-and-nodejs');
  await course.showcontentButton1.scrollIntoViewIfNeeded();
  await course.showcontentButton1.click();
  await page.waitForTimeout(2000);
  await course.showcontentButton2.click();

})


