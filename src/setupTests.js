// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

export const renderWithRouter = component => ({
  ...render(<MemoryRouter>{component}</MemoryRouter>),
})

export const renderWithProviderRouter = component => ({
  ...render(
    <MemoryRouter>
      <Provider store={store}>{component}</Provider>
    </MemoryRouter>
  ),
})
