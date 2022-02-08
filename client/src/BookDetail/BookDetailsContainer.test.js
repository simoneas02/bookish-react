import { screen } from '@testing-library/react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { renderWithProviderRouter } from '../setupTests'
import BookDetailsContainer from './BookDetailsContainer'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '2',
  }),
  useRouteMatch: () => ({ url: '/books/id' }),
}))

describe('BookDetailContainer', () => {
  it('should renders a book', async () => {
    const mock = new MockAdapter(axios)

    const expectedBook = {
      name: 'Some name',
      description: 'Some description',
      id: '2',
    }

    mock.onGet('http://localhost:8080/books/2').reply(200, expectedBook)

    renderWithProviderRouter(<BookDetailsContainer />)

    const name = await screen.findByText('Some name')
    const description = await screen.findByText('Some description')

    expect(name).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
