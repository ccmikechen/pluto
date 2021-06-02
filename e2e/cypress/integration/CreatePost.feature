Feature: Create post
  Scenario Outline: Creating a post
    Given I am on the home page
    When I write post content of "<content>"
    And I submit the post content
    Then I see the post is created with post content of "<content>"

    Examples:
    | content                     |
    | Give me some money please   |
    | When I write down my though |
