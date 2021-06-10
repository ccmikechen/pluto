Feature: Post comments

  Scenario: Displaying post comments
    Given a post with comments as below
    | content   | inserted_at         |
    | Comment 1 | 2021-06-10 00:01:00 |
    | Comment 2 | 2021-06-10 00:00:00 |
    | Comment 3 | 2021-06-10 00:03:00 |
    And I am on the post page
    Then I see comments of the post
    | content   |
    | Comment 2 |
    | Comment 1 |
    | Comment 3 |
