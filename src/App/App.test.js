import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '.'

const renderWithRouter = component => ({
  ...render(<MemoryRouter>{component}</MemoryRouter>),
})

describe('App', () => {
  it('should return a title', () => {
    renderWithRouter(<App />)

    const title = screen.getByRole('heading', { name: 'Bookish' })

    expect(title).toBeInTheDocument()
  })
})
