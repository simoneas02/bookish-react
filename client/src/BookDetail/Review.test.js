import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithProviderRouter } from '../setupTests'
import * as actions from '../redux/actions/actions'

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

    renderWithProviderRouter(<Review {...props} />)

    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByText('Juntao')).toBeInTheDocument()
    expect(screen.getByText('2018/06/21')).toBeInTheDocument()
    expect(
      screen.getByText('Excellent work, really impressed by your efforts')
    ).toBeInTheDocument()
  })

  it('should render the Submit button when clicking on the Edit button on each review', async () => {
    const props = {
      review: {
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Excellent work, really impressed by your efforts',
      },
    }

    renderWithProviderRouter(<Review {...props} />)

    const editButton = await screen.findByRole('button', { name: 'Edit' })
    expect(editButton).toBeInTheDocument()

    userEvent.click(editButton)

    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    expect(submitButton).toBeInTheDocument()
  })

  it('should copy content to a textarea for editing', async () => {
    const props = {
      review: {
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Some review content',
      },
    }

    renderWithProviderRouter(<Review {...props} />)

    const content = await screen.findByText('Some review content')
    const editButton = await screen.findByRole('button', { name: 'Edit' })

    expect(content).toBeInTheDocument()
    expect(editButton).toBeInTheDocument()

    userEvent.click(editButton)

    const editContent = await screen.findByRole('textbox')

    expect(editContent).toBeInTheDocument()
    expect(await screen.findByText('Some review content')).toBeInTheDocument()
  })

  it('should send requests', async () => {
    const fakeUpdateReview = () => () => Promise.resolve({})

    jest
      .spyOn(actions, 'updateReview')
      .mockImplementation(() => fakeUpdateReview)

    const props = {
      bookId: 123,
      review: {
        id: 2,
        bookId: 1,
        name: 'Juntao',
        date: '2018/06/21',
        content: 'Some review content',
      },
    }

    renderWithProviderRouter(<Review {...props} />)

    const editButton = await screen.findByRole('button', { name: 'Edit' })

    userEvent.click(editButton)

    const editContent = await screen.findByRole('textbox')
    const submitButton = await screen.findByRole('button', { name: 'Submit' })

    userEvent.clear(editContent)
    userEvent.type(editContent, 'New review content')
    userEvent.click(submitButton)

    expect(actions.updateReview).toHaveBeenCalledWith(1, {
      bookId: 1,
      content: 'New review content',
      name: 'Juntao',
      date: '2018/06/21',
      id: 2,
    })
  })
})
