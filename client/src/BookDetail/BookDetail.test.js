import { screen } from '@testing-library/react'
import { renderWithProviderRouter } from '../setupTests'

import BookDetail from './BookDetail'

describe('BookDetail', () => {
  it('should renders title', () => {
    const props = {
      book: {
        name: 'Refactoring',
      },
    }

    renderWithProviderRouter(<BookDetail {...props} />)
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

    renderWithProviderRouter(<BookDetail {...props} />)
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
    renderWithProviderRouter(<BookDetail {...props} />)
    const description = screen.getAllByText('Refactoring')

    expect(description).toHaveLength(2)
  })

  it('should renders reviews', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description:
          'Martin Fowler’s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.',
        reviews: [
          {
            name: 'Juntao',
            date: '2018/06/21',
            content: 'Excellent work, really impressed by your efforts',
          },
        ],
      },
    }

    renderWithProviderRouter(<BookDetail {...props} />)

    const reviews = screen.getAllByRole('listitem')

    expect(reviews).toHaveLength(1)
    expect(screen.getByText('Juntao')).toBeInTheDocument()
    expect(screen.getByText('2018/06/21')).toBeInTheDocument()
    expect(
      screen.getByText('Excellent work, really impressed by your efforts')
    ).toBeInTheDocument()
  })

  it('should renders reviews form', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description:
          'Martin Fowler’s Refactoring defined core ideas and techniques that hundreds of thousands of developers have used to improve their software.',
      },
    }

    renderWithProviderRouter(<BookDetail {...props} />)

    const nameInput = screen.getAllByText('Name')[0]
    const contentTextArea = screen.getAllByText('Content')[0]
    const submitButton = screen.getByRole('button', { name: 'Submit' })

    expect(nameInput).toBeInTheDocument()
    expect(contentTextArea).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})
