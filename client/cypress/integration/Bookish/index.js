import { feedStubBooks, cleanUpStubBooks } from '../../helpers'

import { Before, After } from 'cypress-cucumber-preprocessor/steps'

After(() => {
  cleanUpStubBooks()
})

Before(() => {
  feedStubBooks()
})
