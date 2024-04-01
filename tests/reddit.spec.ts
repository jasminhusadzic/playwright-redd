import { config } from "../config";
import { test, expect } from "../pageobjects/index";

test.describe("Comment on redit post", () => {

  test("User is able to post comment on any post", async ({ loginPage, homePage }) => {
    await loginPage.goto();

    await loginPage.login({
      username: config.username,
      password: config.password,
    });

    await homePage.firstPostShouldBeVisible();
  });
});
