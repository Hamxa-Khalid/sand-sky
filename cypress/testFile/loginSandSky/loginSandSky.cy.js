describe('Log In To Sand Sky', function () {
  beforeEach(function () {
    cy.visit('/');
    cy.fixture('dataFile.json').then(function (data) {
      this.data = data;
    });
  });

  it('Login Sky Sand', function () {
    cy.loginCMD(this.data.creds.email, this.data.creds.password);
  });
});
