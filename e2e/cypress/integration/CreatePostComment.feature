Feature: Create post comment

  Scenario: Reply to a post
    Given I am on the post page
    When I submit the comment 'comment'
    Then I see the comment at the bottom
