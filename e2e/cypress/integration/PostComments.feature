Feature: Post comments

  Background:
    Given a post with comments as below
    | content   | inserted_at         |
    | Comment 1 | 2021-06-10 00:01:00 |
    | Comment 2 | 2021-06-10 00:00:00 |
    | Comment 3 | 2021-06-10 00:03:00 |
    And I am on the post page

  Scenario: Displaying post comments
    Then I see comments of the post
    | content   |
    | Comment 2 |
    | Comment 1 |
    | Comment 3 |

  Scenario: Directing to detail page of comment
    When I click the comment of "Comment 1"
    Then I go to the detail page of the comment
