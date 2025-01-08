class ProductPage {
  constructor() {
    this.pageTitle = ".title";
    this.addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.cartLink = ".shopping_cart_link";
  }

  verifyPageLoaded() {
    cy.url().should("include", "/inventory.html");
    cy.get(this.pageTitle).should("have.text", "Products");
  }

  addToCart() {
    cy.get(this.addToCartButton).click();
  }

  goToCartPage() {
    cy.get(this.cartLink).click();
  }
}

export default ProductPage;