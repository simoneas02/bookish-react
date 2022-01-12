import { screen } from '@testing-library/react'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { renderWithProviderRouter } from '../setupTests'

import BookDetailContainer from './BookDetailContainer'

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({
    id: 2,
  }),
  useRouteMatch: () => ({ url: '/books/2' }),
}))

describe('BookDetailContainer', () => {
  it.skip('renders', async () => {
    const mock = new MockAdapter(axios)

    const expectedBook = [
      { name: 'Acceptance tests driven development with React', id: 2 },
    ]

    mock.onGet('http://localhost:8080/books/2').reply(200, expectedBook)

    renderWithProviderRouter(<BookDetailContainer />)

    expect(
      await screen.findByText('Acceptance tests driven development with React')
    ).toBeInTheDocument()
  })
})
