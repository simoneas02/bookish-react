Feature: Book List
  As a reader
  I want to see books that are trending
  So I know what to read next
  
  Scenario: Heading
    Given I am a bookish user
    When I open the list page
    Then I can see the title "Bookish" is showing

  Scenario: Book List
      Given I am a bookish user
      When I open the list page
      And there is a book list
        | name                   | price |
        | Refactoring            | $100  |
        | Domain-driven design   | $120  |
        | Building Microservices | $80   |

  Scenario: Search by keyword
    Given I am a bookish user
    When I open the list page
    And I typed "design" to perform a search
    Then I should see "Domain-driven design" is matched

  Scenario: Write a Review
    Given I am a bookish user
    When I open the list page
    When I open the book detail page for the first item
    And I add a review to that book
      | name       | content       |
      | Some name  | Some content  |
    Then I can see it displayed beneath the description section with the text "Some content"
