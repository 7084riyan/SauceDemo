class InventoryPage {
  elements = {
    title: () => cy.get('.title'),
    inventoryItem: () => cy.get('.inventory_item'),
    cartLink: () => cy.get('.shopping_cart_link'), 
    cartBadge: () => cy.get('.shopping_cart_badge'),
    menuButton: () => cy.get('#react-burger-menu-btn'),
    logoutLink: () => cy.get('#logout_sidebar_link')
  };

  addFirstItemToCart() {
    this.elements.inventoryItem().first().find('.btn_inventory').click();
  }

  openCart() {
    this.elements.cartLink().click(); 
  }

  logout() {
    this.elements.menuButton().click();
    this.elements.logoutLink().click();
  }

  checkCartItemCount(count) {
    this.elements.cartBadge().should('contain', count);
  }
}

export default new InventoryPage();