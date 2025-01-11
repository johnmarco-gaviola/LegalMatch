import { homepage } from "../page_object_model/homepage.js"
import { regform } from "../page_object_model/regform.js"
import { lifetimemembership } from "../page_object_model/lifetimemembership.js"
import { automationarchitect } from "../page_object_model/automationarchitect.js"

const home = new homepage()
const reg = new regform()
const ltm = new lifetimemembership()
const aas = new automationarchitect()

describe('Navigate to Submit Button Clicked', () => {
    it('Retrieve and Visit the Link', () => {
        cy.readFile('../LegalMatch/cypress/fixtures/testdata.json').then((testdata) => {
            cy.visit(testdata.login.baseURL)
            home.retrieveAndVisitURL('Submit Button Clicked')
            reg.enterName(testdata.info.name)
            reg.enterPhone(testdata.info.phone)
            reg.enterEmail(testdata.info.email)
            reg.selectCountry(testdata.info.country)
            reg.enterCity(testdata.info.city)
            reg.enterUserName(testdata.info.username)
            reg.enterPassword(testdata.info.password)
            reg.clickExplore()
            ltm.scrollToVideoLibrary()
            ltm.navigateToTargetItem(testdata.navigation.carousel)
            aas.verifyURL(testdata.URLs.autoArchSel)
            aas.clickExpandBtn()
            aas.findCourseAndStart(testdata.navigation.course)
            aas.verifyCourseTitle(testdata.navigation.course)
            cy.origin('https://selenium-tutorial.com', () => {
                cy.visit('https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects');})
            aas.selectUSD()
            aas.verifyAmount(testdata.info.amt)
            aas.clickEnrolAndVerify()
            cy.wait(5000)
            cy.get('iframe[src*=recaptcha]')
              .its('0.contentDocument')
              .should(d => d.getElementById('recaptcha-token').click())
        })
    });
});
