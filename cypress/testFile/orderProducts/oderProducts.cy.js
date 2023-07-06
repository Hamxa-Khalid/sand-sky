describe('Add Products To Cart & Checkout', function () {
  before(function () {
    cy.visit('/');
    // cy.fixture('dataFile.json').then(function (data) {
    //   this.user = data;
    // });
  });

  it('Close Email Pop Up', function () {
    cy.closeEmailPopupCMD();
  });
});
