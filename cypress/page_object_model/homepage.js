export class homepage {
    categories = '.linkbox'

    listActionNames() {
        const output = {};
        //Get common web element locator for the categories
        cy.get(this.categories).each(($category) => {
            //Work within each the category
            cy.wrap($category).within(() => {
                cy.get('h1').invoke('text').then((text) => {
                    const actionName = text.trim();
                    const actions = [];
                    //Get the name of each action
                    cy.get('li').each(($action) => {
                        actions.push($action.text().trim());
                    }).then(() => {
                        //Compile to output
                        output[actionName] = actions;
                    })
                })
            })
        }).then(() => {
            cy.log(JSON.stringify(output, null, 2))
            console.log(output)
            cy.writeFile('./cypress/downloads/actions.json', output)
        })
    }

    retrieveAndVisitURL(action) {
        cy.contains(new RegExp(`^${action}$`))
          .closest('a')
          .invoke('attr', 'href')
          .then((url) => {
            cy.log('Retrieved URL: ', url)
            cy.visit(url)
        })
    }
}