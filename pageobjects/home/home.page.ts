import { BasePage } from "../page";
import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage extends BasePage {
  readonly firstPost: Locator;
  constructor(page: Page) {
    super("/", page);
    this.firstPost = page.locator('[slot="full-post-link"]').first();
  }

  async firstPostShouldBeVisible() {
   await this.firstPost.waitFor({ state: "visible" });
  }
}
