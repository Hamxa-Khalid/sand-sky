export class loginSandSky {
  getEmailSignupCloseButton() {
    return cy.get('button[title="Close Modal"]');
  }

  getUserAccountDropdown() {
    return cy.get('#dropdownMenuUser');
  }

  getLoginEmailTextboxSelector() {
    return cy.get('#dropdownLoginFormEmail');
  }

  getLoginPasswordTextboxSelector() {
    return cy.get('#dropdownLoginFormPassword');
  }

  getLoginUserButton() {
    return cy.get('button[type="submit"]');
  }
}
