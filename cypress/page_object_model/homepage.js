export class homepage {
    categories = '.linkbox'

    listActionNames() {
        const output = {};
        cy.get(this.categories).each(($category) => {
            cy.wrap($category).within(() => {
                cy.get('h1').invoke('text').then((text) => {
                    const actionName = text.trim();
                    const actions = [];
                    cy.get('li').each(($action) => {
                        actions.push($action.text().trim());
                    }).then(() => {
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