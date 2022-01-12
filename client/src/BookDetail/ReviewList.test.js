import { screen } from '@testing-library/react'

import { renderWithRouter } from '../setupTests'

import ReviewList from './ReviewList'

describe('ReviewList', () => {
  it('should renders an empty list', () => {
    const props = {
      reviews: [],
    }

    renderWithRouter(<ReviewList {...props} />)

    const reviews = screen.getByRole('list')
    expect(reviews).toBeInTheDocument()
  })

  it('should renders a list when data is passed', () => {
    const props = {
      reviews: [
        {
          name: 'Juntao',
          date: '2018/06/21',
          content: 'Excellent work, really impressed by your efforts',
        },
        { name: 'Abruzzi', date: '2018/06/22', content: 'What a great book' },
      ],
    }

    renderWithRouter(<ReviewList {...props} />)

    const reviews = screen.getAllByRole('listitem')
    expect(reviews).toHaveLength(2)
    expect(reviews[0]).toHaveTextContent('Juntao')
  })
})
