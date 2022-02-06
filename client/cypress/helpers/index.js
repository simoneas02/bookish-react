import axios from 'axios'

export const cleanUpStubBooks = async () => {
  try {
    return await axios.delete('http://localhost:8080/books?_cleanup=true')
  } catch (err) {
    return err
  }
}

export const feedStubBooks = () => {
  const books = [
    { name: 'Refactoring', id: 1 },
    { name: 'Domain-driven design', id: 2 },
    { name: 'Building Microservices', id: 3 },
  ]

  return books.map(item =>
    axios.post('http://localhost:8080/books', item, {
      headers: { 'Content-Type': 'application/json' },
    })
  )
}

export const gotoApp = () => {
  cy.visit('http://localhost:3000')
}

export const checkAppTitle = title => {
  cy.get('[data-test="heading"]').contains(title)
}

export const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should('exist')

  cy.get('div[data-test="book-item"]').should(books => {
    expect(books).to.have.length(expectation.length)

    const titles = [...books].map(book => book.querySelector('h2').innerHTML)
    expect(titles).to.deep.equal(expectation)
  })
}
