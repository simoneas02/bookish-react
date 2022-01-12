import { screen } from '@testing-library/react'
import App from '.'

import { renderWithProviderRouter } from '../setupTests'

describe('App', () => {
  it('should return a title', () => {
    renderWithProviderRouter(<App />)

    const title = screen.getByRole('heading', { name: 'Bookish' })

    expect(title).toBeInTheDocument()
  })
})
