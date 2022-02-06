import { checkBookListWith } from '../../helpers'

import { And } from 'cypress-cucumber-preprocessor/steps'

And(`there is a book list`, table => {
  const actual = table.rows().map(x => x[0])
  checkBookListWith(actual)
})
