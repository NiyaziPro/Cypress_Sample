class LoginPage {
  constructor() {
    this.usernameField = '[data-test="username"]';
    this.passwordField = '[data-test="password"]';
    this.loginButton = '[data-test="login-button"]';
  }

  visit() {
    cy.visit("https://www.saucedemo.com/");
  }
  login(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
    cy.get(this.loginButton).click();
  }
}

export default LoginPage;
