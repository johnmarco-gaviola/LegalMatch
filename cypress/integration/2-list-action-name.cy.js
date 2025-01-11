import { homepage } from "../page_object_model/homepage.js"

const home = new homepage()

describe('List each of the action name for each category in JSON format', () => {
    it('List each of the action name for each category in JSON format', () => {
        cy.readFile('../LegalMatch/cypress/fixtures/testdata.json').then((testdata) => {
            cy.visit(testdata.login.baseURL)
            home.listActionNames()
        })
    });
});
