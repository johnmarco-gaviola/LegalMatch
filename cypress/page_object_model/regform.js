export class regform {

    registrationform = '#load_box.popupbox'
    name = '[name="name"]'
    phone = '[name="phone"]'
    email = '[name="email"]'
    country = '[name="country"]'
    city = '[name="city"]'
    username = '[name="username"]'
    password = '[name="password"]'

    enterName(name) {
        cy.get(this.name)
          .should('be.visible')
          .type(name)
    }
    enterPhone(phone) {
        cy.get(this.phone)
          .should('be.visible')
          .type(phone)
    }
    enterEmail(email) {
        cy.get(this.email)
          .should('be.visible')
          .type(email)
    }
    selectCountry(country) {
        cy.get(this.country)
          .should('be.visible')
          .select(country)
    }
    enterCity(city) {
        cy.get(this.city)
          .should('be.visible')
          .type(city)
    }
    enterUserName(username) {
        cy.get(this.registrationform).within(() => {
            cy.get(this.username)
              .should('be.visible')
              .type(username)
        })
    }
    enterPassword(password) {
        cy.get(this.registrationform).within(() => {
            cy.get(this.password)
              .should('be.visible')
              .type(password)
        })
    }
    clickExplore() {
      cy.get(this.registrationform).within(() => {
        cy.contains('EXPLORE LIFETIME MEMBERSHIP', {timeout: 10000})
          .should('be.visible')
          .click()
      })
    }
}