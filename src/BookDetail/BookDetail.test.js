import { screen } from '@testing-library/react'
import { renderWithRouter } from '../setupTests'

import BookDetail from './BookDetail'

describe('BookDetail', () => {
  it('should renders title', () => {
    const props = {
      book: {
        name: 'Refactoring',
      },
    }

    renderWithRouter(<BookDetail {...props} />)
    const title = screen.getByRole('heading', { name: 'Refactoring' })

    expect(title).toBeInTheDocument()
  })

  it('should renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description:
          "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.",
      },
    }

    renderWithRouter(<BookDetail {...props} />)
    const description = screen.getByText(
      "Martin Fowler's Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software."
    )

    expect(description).toBeInTheDocument()
  })

  it('should displays the book name when no description was given', () => {
    const props = {
      book: {
        name: 'Refactoring',
      },
    }
    renderWithRouter(<BookDetail {...props} />)
    const description = screen.getAllByText('Refactoring')

    expect(description).toHaveLength(2)
  })
})
