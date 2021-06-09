Feature: Post comments

  Scenario: Displaying post comments
    Given a post with comments as below
    | content   |
    | Comment 1 |
    | Comment 2 |
    | Comment 3 |
    And I am on the post page
    Then I see comments of the post
