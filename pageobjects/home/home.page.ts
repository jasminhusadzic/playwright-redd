import { BasePage } from "../page";
import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage extends BasePage {
  readonly firstPost: Locator;
  readonly commentButton: Locator;
  readonly addCommentButton: Locator;
  readonly commentInput: Locator;
  readonly submitPostButton: Locator;
  //  readonly postComment => (username: string): Locator;
  public readonly posts: (username: string) => Locator;

  constructor(page: Page) {
    super("/", page);
    
    this.firstPost = page.locator('[slot="full-post-link"]').first();
    this.commentButton = page
      .locator('[name="comments-action-button"]')
      .first();
    this.addCommentButton = page.locator(
      '[slot="ready"] [data-testid="trigger-button"]'
    );
    this.commentInput = page.locator(
      '[slot="ready"] [data-lexical-editor="true"]'
    );
    this.submitPostButton = page.locator(
      '[slot="ready"] [slot="submit-button"]'
    );
    this.posts = (username: string) => page.locator(`[noun="comment_author"] [href="/user/${username}/"]`);
  }

  async firstPostShouldBeVisible() {
    await this.firstPost.waitFor({ state: "visible" });
  }

  async clickOnComment() {
    await this.commentButton.waitFor({ state: "visible" });
    await this.commentButton.click();
  }

  async invokeAddComment() {
    await this.addCommentButton.waitFor({ state: "visible" });
    await this.addCommentButton.click();
  }

  async insertComment(options: { comment: string }) {
    await this.commentInput.waitFor({ state: "visible" });
    await this.commentInput.fill(options.comment);
  }

  async submitPost() {
    await this.submitPostButton.waitFor({ state: "visible" });
    this.submitPostButton.click();
  }

  async commentFirstPost(options: { comment: string }) {
    await this.clickOnComment();
    await this.invokeAddComment();
    await this.insertComment(options);
    await this.submitPost();
  }

  async postShouldBePresent(options: { forUser: string }) {
    await this.posts(options.forUser).waitFor({ state: "visible" });
  }
}
