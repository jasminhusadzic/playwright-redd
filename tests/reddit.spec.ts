import { config } from "../config";
import { test, expect } from "../pageobjects/index";

test.describe("Comment on redit post", () => {
  test("User is able to post comment on any post", async ({
    loginPage,
    homePage,
  }) => {
    // Given
    await loginPage.goto();

    // When I login
    await loginPage.login({
      username: config.username,
      password: config.password,
    });

    // Then
    await homePage.firstPostShouldBeVisible();

    // And
    await homePage.commentFirstPost({ comment: "Hello World" });

    // Then
    await homePage.postShouldBePresent({ forUser: config.username });
  });
});
