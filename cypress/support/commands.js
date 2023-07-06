// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import { loginSandSky } from './pages/loginSandSkyPO/loginSandSkyPO';
import { signUpSandSky } from './pages/signUpSandSkyPO/signUpSandSkyPO';
import { faker } from '@faker-js/faker';
const signUpSandSkyObj = new signUpSandSky();
const logInSandSkyObj = new loginSandSky();

Cypress.Commands.add('signupCMD', () => {
  cy.url().should('include', '/');
  signUpSandSkyObj.getEmailSignupCloseButton().first().click();
  cy.scrollTo('top');
  signUpSandSkyObj.getUserAccountDropdown().click({ force: true });
  signUpSandSkyObj.getCreateAccountButton().contains('Create Account').click();
  signUpSandSkyObj
    .getCreateAccountFirstNameTextBox()
    .type(faker.person.firstName());
  signUpSandSkyObj
    .getCreateAccountLastNameTextBox()
    .type(faker.person.lastName());
  signUpSandSkyObj.getCreateAccountEmailTextBox().type(faker.internet.email());
  signUpSandSkyObj
    .getCreateAccountPasswordTextBox()
    .type(faker.internet.password());
  signUpSandSkyObj.getCreateAccountAgreementCheckBox().check({ force: true });
  signUpSandSkyObj.getSubmitAccountButton().contains('Create Account').click();
  signUpSandSkyObj
    .getAfterSignupViewMyAccountButton()
    .contains('View My Account')
    .click();
  cy.scrollTo('top');
  signUpSandSkyObj
    .getLogoutButton()
    .contains('Log out')
    .should('have.text', 'Log out');
});

Cypress.Commands.add('loginCMD', (email, password) => {
  cy.url().should('include', '/');
  logInSandSkyObj.getEmailSignupCloseButton().first().click();
  cy.scrollTo('top');
  logInSandSkyObj.getUserAccountDropdown().click({ force: true });
  logInSandSkyObj
    .getLoginEmailTextboxSelector()
    .click({ force: true })
    .type(email);
  logInSandSkyObj
    .getLoginPasswordTextboxSelector()
    .click({ force: true })
    .type(password);
  logInSandSkyObj.getLoginUserButton().contains('Log In').click();
});
