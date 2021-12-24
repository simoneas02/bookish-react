import { render, screen } from '@testing-library/react'
import App from '.'

describe('App', () => {
  it.only('should return a title', () => {
    render(<App />)

    const title = screen.getByRole('heading', { name: 'Bookish' })

    expect(title).toBeInTheDocument()
  })
})
