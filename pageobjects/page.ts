import { expect, type Locator, type Page } from "@playwright/test";

export class BasePage {
  private url: string;
  readonly page: Page;

  constructor(url: string, page: Page) {
    this.url = url;
    this.page = page;
  }

  async goto(url?: string) {
    await this.page.goto(url || this.url);
    await this.page.waitForLoadState()
  }
}
