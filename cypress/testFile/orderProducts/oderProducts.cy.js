import { orderProducts } from '../../support/pages/orderProductsPO/orderProductsPO';
const orderProductsObj = new orderProducts();
describe('Add Products To Cart & Checkout', function () {
  before(function () {
    cy.visit('/');
    // cy.fixture('dataFile.json').then(function (data) {
    //   this.user = data;
    // });
  });

  it('Add Products To Cart', function () {
    cy.closeEmailPopupCMD();
    orderProductsObj
      .getFeaturedProductSection()
      .contains('Featured Products')
      .scrollIntoView();
    orderProductsObj.getHydrateCollectionListItem().contains('Hydrate').click();
    orderProductsObj
      .getWonderBodyLotionProductTitle()
      .contains('Wonder Body Lotion');
    orderProductsObj
      .getWonderBodyLotionProductButton()
      .contains('Add to cart')
      .click();
    orderProductsObj
      .getMenuBarRoutineCollection()
      .contains('Routine')
      .scrollIntoView()
      .click({ force: true });
    cy.url().should('contains', '/collections');
    orderProductsObj
      .getMaskCollectionListItem()
      .contains('Mask')
      .click({ force: true });
    cy.url().should('contains', '/collections/face-mask');
    orderProductsObj
      .getClearingFaceMaskProduct()
      .contains('Clearing Face Mask')
      .click();
    orderProductsObj.getClearingFaceMaskQuantityTextBox().clear().type('3');
    orderProductsObj
      .getClearingFaceMaskAddToCartButton()
      .contains('Add to cart')
      .click();
    orderProductsObj.getHeaderCartDrawer().click();
    cy.url().should('contains', '/products/oil-control-clearing-face-mask');
    // orderProductsObj.getCartPromoCodeInputTextBox().contains('Promo Code');
    orderProductsObj.getCartDrawerQuantityInput().type('3');
    orderProductsObj
      .getSecureCheckoutButton()
      .contains('Secure Checkout')
      .click();
  });
});
