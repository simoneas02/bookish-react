describe('Bookisn application', () => {
  it('Visits the bookish', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="book-list"]').should('exist')
    cy.get('li.book-item').should('have.length', 2)

    cy.get('li.book-item').should(books => {
      expect(books).to.have.length(2)

      const titles = [...books].map(book => book.querySelector('h2').innerHTML)

      expect(titles).to.deep.equal(['Refactoring', 'Domain-driven design'])
    })
  })
})
