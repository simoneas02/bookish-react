import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchBox from './SearchBox'

describe('SearchBox', () => {
  it('should renders input', () => {
    const props = {
      term: '',
      onSearch: jest.fn(),
    }
    render(<SearchBox {...props} />)
    const searchInput = screen.getByRole('textbox', { name: '' })

    userEvent.type(searchInput, 'domain')

    expect(props.onSearch).toHaveBeenCalled()
  })

  it('should trim empty strings', () => {
    const props = {
      term: '',
      onSearch: jest.fn(),
    }

    render(<SearchBox {...props} />)
    const searchInput = screen.getByRole('textbox', { name: '' })

    userEvent.type(searchInput, '  ')

    expect(props.onSearch).not.toHaveBeenCalled()
  })
})
