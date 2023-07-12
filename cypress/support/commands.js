// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import { loginSandSky } from './pages/loginSandSkyPO/loginSandSkyPO';
import { signUpSandSky } from './pages/signUpSandSkyPO/signUpSandSkyPO';
import { checkoutSandSky } from './pages/checkoutSandSkyPO/checkoutSandSkyPO';
import { faker } from '@faker-js/faker';
const signUpSandSkyObj = new signUpSandSky();
const logInSandSkyObj = new loginSandSky();
const checkoutSandSkyobj = new checkoutSandSky();

Cypress.Commands.add('closeEmailPopupCMD', () => {
  cy.url().should('include', '/');
  cy.get('button[title="Close Modal"]').first().click();
});

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

Cypress.Commands.add('CheckoutCMD', () => {
  checkoutSandSkyobj
    .getCheckoutEmailInputTextbox()
    .type(faker.internet.email());
  checkoutSandSkyobj.getCheckoutReciveEmailCheckBox().uncheck();
  checkoutSandSkyobj.getCheckoutCountryDropdown().select('Singapore');
  checkoutSandSkyobj
    .getCheckoutFirstnameTextbox()
    .type(faker.person.firstName());
  checkoutSandSkyobj.getCheckoutLastnameTextbox().type(faker.person.lastName());
  checkoutSandSkyobj
    .getCheckoutAddressTextbox()
    .type(faker.location.streetAddress());
  checkoutSandSkyobj
    .getCheckoutApartmentTextbox()
    .type(faker.location.street());
  checkoutSandSkyobj.getCheckoutZipCodeTextbox().type('238882');
  checkoutSandSkyobj.getCheckoutPhoneNumberTextbox().type(faker.phone.number());
  checkoutSandSkyobj.getCheckoutContinueShoppingButton().click();
  checkoutSandSkyobj.getCheckoutContinueToPaymentButton().click();
  cy.url().should('contains', '/checkout');
  checkoutSandSkyobj
    .getCheckoutPaymentHeading()
    .contains('Payment')
    .should('have.text', '\n      Payment\n    ');
  checkoutSandSkyobj
    .getCheckoutPaymentLable()
    .should(
      'have.text',
      '\n        All transactions are secure and encrypted.\n      '
    );
  checkoutSandSkyobj
    .getCheckoutCreditCardNumberTextbox()
    .type('4400000000000008');
  checkoutSandSkyobj.getCheckoutCreditCardName().type('Jack');
  checkoutSandSkyobj.getCheckoutCreditCardExpDate().type('03/30');
  checkoutSandSkyobj.getCheckoutCreditCardCVC().type('737');
  checkoutSandSkyobj.getCheckoutPaynowButton().click();
  checkoutSandSkyobj
    .getCheckCardIncorrectLabel()
    .contains('Card number is incorrect')
    .should('have.text', 'Card number is incorrect');
});
