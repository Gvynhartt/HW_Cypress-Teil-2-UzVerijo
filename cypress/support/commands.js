
Cypress.Commands.add('createUserFromFixt', (userObject) => {

    cy.request('POST', "/", userObject)
    .then((response) => {

      expect(response.status).to.eq(200);
    });
})
