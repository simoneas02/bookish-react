import { screen } from '@testing-library/react'

import { renderWithRouter } from '../setupTests'

import Review from './Review'

describe('Review', () => {
  it('should renders a review', () => {
    const props = {
      review: {
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Excellent work, really impressed by your efforts',
      },
    }

    renderWithRouter(<Review {...props} />)

    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText('Juntao')).toBeInTheDocument()
    expect(screen.getByText('2018/06/21')).toBeInTheDocument()
    expect(
      screen.getByText('Excellent work, really impressed by your efforts')
    ).toBeInTheDocument()
  })
})
