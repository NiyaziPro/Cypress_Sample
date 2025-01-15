/// <reference types="cypress" />
import LoginPage from "../../pages/LoginPage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";
import data from "../../fixtures/credentials.json";

describe("Small project Test", () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const productPage = new ProductPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.login(data.username, data.password);
  });
  it("Login dogrulama", () => {
    productPage.verifyPageLoaded();
  });
  it("Urun sepete ekleme", () => {
    productPage.verifyPageLoaded();
    productPage.addToCart();
    productPage.goToCartPage();
    cartPage.verifyProduct();
    cartPage.verifyProductCount(1);
    cartPage.verifyProductName("Sauce Labs Backpack");
  });
});
