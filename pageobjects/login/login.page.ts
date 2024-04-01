import { BasePage } from "../page";
import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super("login", page);
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole("button", { name: "Log In" });
  }

  async login(options: { username: string; password: string }) {
    await this.page.waitForLoadState();
    await this.insertUsername(options.username);
    await this.insertPassword(options.password);
    await this.loginButton.click();
  }

  async insertUsername(username: string) {
    await this.usernameInput.waitFor({ state: "visible" });
    await this.usernameInput.fill(username);
  }

  async insertPassword(password: string) {
    await this.passwordInput.waitFor({ state: "visible" });
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.waitFor({ state: "visible" });
    await this.loginButton.click();
  }
}
