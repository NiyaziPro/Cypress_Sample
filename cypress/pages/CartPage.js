class CartPage {
  constructor() {
    this.cartItem = ".cart_item";
    this.productName = ".inventory_item_name";
  }

  verifyProduct() {
    cy.url().should("include", "/cart.html");
  }

  verifyProductName(expectedName) {
    cy.get(this.productName).should("have.text", expectedName);
  }
  verifyProductCount(expectedCount) {
    cy.get(this.cartItem).should("have.length", expectedCount);
  }
}

export default CartPage;
