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

const composeReview = (name, content) => {
  cy.get('input[name="name"]').type(name)
  cy.get('textarea[name="content"]').type(content)
  cy.get('button[name="submit"]').click()
}

const checkReview = () => {
  cy.get('ul[data-test="reviews-container"]').should('have.length', 1)
}

const performSearch = term => {
  cy.get('[data-test="search"] input').type(term)
}

describe('Bookish application', () => {
  afterEach(async () => {
    cleanUpStubBooks()
  })

  beforeEach(() => {
    feedStubBooks()
  })

  before(async () => {
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

  it('Search for a title', () => {
    gotoApp()
    checkBookListWith([
      'Refactoring',
      'Domain-driven design',
      'Building Micro-service',
    ])
    performSearch('design')
    checkBookListWith(['Domain-driven design'])
  })

  it('Write a review for a book', () => {
    gotoApp()
    gotoNthBookInTheList(0)
    checkBookDetail()
    composeReview('Juntao Qiu', 'Excellent work')
    checkReview()
  })
})
