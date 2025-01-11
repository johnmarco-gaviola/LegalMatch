export class automationarchitect {

    expandBtn = '#more_lecture_sections'
    items = '.item'
    startBtn = '.lecture-start'
    title = '#lecture_heading'
    payUSD = '.product_4632690.checkout-button-group'
    productPrice = '.product-price'
    enrollBtn = '#enroll-button'

    verifyURL(URL) {
        cy.url()
          .should('eq', URL)
    }
    clickExpandBtn() {
        cy.get(this.expandBtn)
          .should('be.visible')
          .click()
    }
    findCourseAndStart(course) {
        cy.get(this.items)
          .contains(course)
          .find(this.startBtn)
          .click()
    }
    verifyCourseTitle(course) {
        cy.get(this.title)
          .should('be.visible')
          .should('contain', course)
    }
    selectUSD() {
        cy.get(this.payUSD)
          .scrollIntoView()
          .click()
    }
    verifyAmount(amt) {
        cy.get(this.payUSD)
          .within(() => {
            cy.get(this.productPrice)
              .should('be.visible')
              .should('contain', amt)
            })
    }
    clickEnrolAndVerify() {
        cy.get(this.enrollBtn)
          .should('be.visible')
          .should('contain', 'Enroll in Course')
          .click()
          .should('contain', 'Processing...')
    }
}