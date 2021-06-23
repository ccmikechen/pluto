Feature: List posts

  Background:
    Given 30 posts in the system

  Scenario: Displaying posts
    Given I am on the home page
    Then I see 10 posts

  Scenario: Loading more posts
    Given I am on the home page
    When I scroll to the "bottom"
    Then I see 15 posts

  Scenario: Displaying reply to 
    Given a post replying to the latest post
    And I am on the home page
    When I click the "Reply to" button on the post
    Then I am in the detail page of the replied post
