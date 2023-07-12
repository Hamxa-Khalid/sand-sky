export class checkoutSandSky {
  getCheckoutEmailInputTextbox() {
    return cy.get('#checkout_email');
  }

  getCheckoutReciveEmailCheckBox() {
    return cy.get('#checkout_buyer_accepts_marketing');
  }

  getCheckoutCountryDropdown() {
    return cy.get('#checkout_shipping_address_country');
  }

  getCheckoutDropdownSingaporeOption() {
    return cy.get('option[value="Singapore"]');
  }

  getCheckoutFirstnameTextbox() {
    return cy.get('#checkout_shipping_address_first_name');
  }

  getCheckoutLastnameTextbox() {
    return cy.get('#checkout_shipping_address_last_name');
  }

  getCheckoutAddressTextbox() {
    return cy.get('#checkout_shipping_address_address1');
  }

  getCheckoutApartmentTextbox() {
    return cy.get('#checkout_shipping_address_address2');
  }

  getCheckoutZipCodeTextbox() {
    return cy.get('#checkout_shipping_address_zip');
  }

  getCheckoutPhoneNumberTextbox() {
    return cy.get('#checkout_shipping_address_phone');
  }

  getCheckoutContinueShoppingButton() {
    return cy.get('#continue_button');
  }

  getCheckoutContinueToPaymentButton() {
    return cy.get('#continue_button');
  }

  getCheckoutCreditCardNumberTextbox() {
    return cy.get('#number:visible');
  }

  getCheckoutCreditCardName() {
    return cy.get('#name');
  }

  getCheckoutCreditCardExpDate() {
    return cy.get('#expiry');
  }

  getCheckoutCreditCardCVC() {
    return cy.get('#verification_value');
  }

  getCheckoutPaynowButton() {
    return cy.get('#continue_button');
  }

  getCheckCardIncorrectLabel() {
    return cy.get('[class="notice__text"]');
  }

  getCheckoutPaymentHeading() {
    return cy.get('#main-header');
  }

  getCheckoutPaymentLable() {
    return cy.get('h2#main-header + p');
  }
}
