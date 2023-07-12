export class orderProducts {
  getFeaturedProductSection() {
    return cy.get(
      '#shopify-section-template--14314682482774__5ba795e8-58ce-4b4b-ad21-a36d98e3f792'
    );
  }

  getHydrateCollectionListItem() {
    return cy.get('a[href="#carousel_skincare-tasmanian-spring-water"]');
  }

  getWonderBodyLotionProductTitle() {
    return cy.get('#product_form_featured_desktop_06570104848470>a');
  }

  getWonderBodyLotionProductButton() {
    return cy.get('#product_form_featured_desktop_06570104848470>button');
  }

  getMenuBarRoutineCollection() {
    return cy.get('li[data-url="/collections"]');
  }

  getMaskCollectionListItem() {
    return cy.get('a[href="/collections/face-mask"]');
  }

  getClearingFaceMaskProduct() {
    return cy.get('div');
  }

  getClearingFaceMaskQuantityTextBox() {
    return cy.get('#pdpQuantity');
  }

  getClearingFaceMaskAddToCartButton() {
    return cy.get('#product-form>div>button');
  }

  getHeaderCartDrawer() {
    return cy.get('li>a[data-target="#cart-drawer"]');
  }

  getCartDrawerQuantityInput() {
    return cy.get('[aria-label="Quantity"][value="1"]');
  }

  getSecureCheckoutButton() {
    return cy.get('button[type="button"]');
  }
}
