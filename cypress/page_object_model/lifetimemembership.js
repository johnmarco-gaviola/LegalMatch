export class lifetimemembership {

    carousel = '.pp-info-box-carousel-wrap'
    titleBox = '.elementor-image-box-title'
    leftButton = '.swiper-button-prev'
    getStartedBtn = '.pp-button-text'
    carouselCard = '.pp-info-box-content-wrap'
    

    scrollToVideoLibrary() {
        cy.get(this.titleBox)
          .should('have.text', '30+ Courses video library FREE ACCESS')
          .click()
          .scrollIntoView()
          .should('be.visible')
        cy.wait(2000)
    }
    navigateToTargetItem(target) {
      function clickPrevCard() {
        cy.contains('.swiper-slide', target)
          .then(el => {
            if (Cypress.dom.isVisible(el)) {
              cy.wrap(el).contains('Get Started').click()
            } else {
              cy.get('.swiper-button-prev').click()
                .then(clickPrevCard)
            }
        })
      }
      clickPrevCard()
    }
    verifyURL(URL) {
        cy.url()
          .should('eq', URL)
    }

}