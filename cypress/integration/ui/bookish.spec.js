import axios from 'axios'

before(async () => {
  try {
    return await axios.delete('http://localhost:8080/books?_cleanup=true')
  } catch (err) {
    return err
  }
})

afterEach(async () => {
  try {
    return await axios.delete('http://localhost:8080/books?_cleanup=true')
  } catch (err) {
    return err
  }
})

beforeEach(() => {
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
})

describe('Bookisn application', () => {
  it('Visits the bookish', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2[data-test="heading"]').contains('Bookish')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="book-list"]').should('exist')
    cy.get('li.book-item').should('have.length', 3)

    cy.get('li.book-item').should(books => {
      expect(books).to.have.length(3)

      const titles = [...books].map(book => book.querySelector('h2').innerHTML)

      expect(titles).to.deep.equal([
        'Refactoring',
        'Domain-driven design',
        'Building Microservices',
      ])
    })
  })
})
