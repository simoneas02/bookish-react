Feature: Book List
  As a reader
  I want to see books that are trending
  So I know what to read next
  
  Scenario: Heading
    Given I am a bookish user
    When I open the list page
    Then I can see the title "Bookish" is showing
