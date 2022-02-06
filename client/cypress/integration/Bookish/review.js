import { And, Then, When } from 'cypress-cucumber-preprocessor/steps'
import { checkReview, composeReview, gotoNthBookInTheList } from '../../helpers'

When('I open the book detail page for the first item', () => {
  gotoNthBookInTheList(0)
})

And('I add a review to that book', table => {
  const reviews = table.hashes()
  const { name, content } = reviews[0]

  composeReview(name, content)
})

Then(
  'I can see it displayed beneath the description section with the text {string}',
  content => {
    checkReview(content)
  }
)
