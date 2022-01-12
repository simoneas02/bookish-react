import { screen } from '@testing-library/react'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { renderWithProviderRouter } from '../setupTests'

import BookListContainer from './BookListContainer'

describe('BookListContainer', () => {
  it('renders book list', async () => {
    const mock = new MockAdapter(axios)

    const expectedBooks = [
      { name: 'Refactoring', id: 1 },
      { name: 'Acceptance tests driven development with React', id: 2 },
    ]

    mock.onGet('http://localhost:8080/books?q=').reply(200, expectedBooks)

    renderWithProviderRouter(<BookListContainer />)

    const book1 = await screen.findByText('Refactoring')
    const book2 = await screen.findByText(
      'Acceptance tests driven development with React'
    )

    expect(book1).toBeInTheDocument()
    expect(book2).toBeInTheDocument()
  })

  it('something went wrong', async () => {
    const mock = new MockAdapter(axios)

    mock.onGet('http://localhost:8080/books?q=').networkError()

    renderWithProviderRouter(<BookListContainer />)
    const error = await screen.findByText('An unexpected error ocurred')

    expect(error).toBeInTheDocument()
  })
})
