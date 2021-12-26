import axios from 'axios'

const feedStubBooks = () => {
  const books = [
    { name: 'Refactoring', id: 1 },
    { name: 'Domain-driven design', id: 2 },
    { name: 'Building Micro-service', id: 3 },
  ]

  return books.map(item =>
    axios.post('http://localhost:8080/books', item, {
      headers: { 'Content-Type': 'application/json' },
    })
  )
}

const cleanUpStubBooks = async () => {
  try {
    return await axios.delete('http://localhost:8080/books?_cleanup=true')
  } catch (err) {
    return err
  }
}

const gotoApp = () => {
  cy.visit('http://localhost:3000/')
}

const checkAppTitle = () => {
  cy.get('[data-test="heading"]').contains('Bookish')
}

const checkBookListWith = (expectation = []) => {
  cy.get('[data-test="book-list"]').should('exist')

  cy.get('[data-test="book-item"]').should(books => {
    expect(books).to.have.length(expectation.length)

    const titles = [...books].map(book => book.querySelector('h2').innerHTML)
    expect(titles).to.deep.equal(expectation)
  })
}

const gotoNthBookInTheList = nth => {
  cy.get('[data-test="book-item"]').contains('View Details').eq(nth).click()
}

const checkBookDetail = () => {
  cy.get('[data-test="book-title"]').contains('Refactoring')
}

export const performSearch = term => {
  cy.get('[data-test="search"] input').type(term)
}

describe('Bookish application', () => {
  beforeEach(() => {
    feedStubBooks()
  })

  before(async () => {
    cleanUpStubBooks()
  })

  afterEach(async () => {
    cleanUpStubBooks()
  })

  it('Visits the bookish', () => {
    gotoApp()
    checkAppTitle()
  })
  it('Shows a book list', () => {
    gotoApp()
    checkBookListWith([
      'Refactoring',
      'Domain-driven design',
      'Building Micro-service',
    ])
  })
  it('Goes to the detail page', () => {
    gotoApp()
    gotoNthBookInTheList(0)
    checkBookDetail()
  })
})
