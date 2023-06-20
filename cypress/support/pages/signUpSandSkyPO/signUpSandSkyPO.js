export class signUpSandSky {
  getEmailSignupCloseButton() {
    return cy.get('button[title="Close Modal"]');
  }

  getUserAccountDropdown() {
    return cy.get("#dropdownMenuUser");
  }

  getCreateAccountButton() {
    return cy.get('a[href="#dropdown__register"]');
  }

  getCreateAccountFirstNameTextBox() {
    return cy.get("#dropdownFormFName");
  }

  getCreateAccountLastNameTextBox() {
    return cy.get("#dropdownRegisterFormLName");
  }

  getCreateAccountEmailTextBox() {
    return cy.get("#dropdownRegisterFormEmail");
  }

  getCreateAccountPasswordTextBox() {
    return cy.get("#dropdownRegisterFormPassword");
  }

  getCreateAccountAgreementCheckBox() {
    return cy.get("#dropdownAgreement-dropdown__register");
  }

  getSubmitAccountButton() {
    return cy.get('button[type="submit"]');
  }

  getAfterSignupViewMyAccountButton() {
    return cy.get('a[href="/account#dashboard"');
  }

  getLogoutButton() {
    return cy.get('a[href="/account/logout"]');
  }
}
