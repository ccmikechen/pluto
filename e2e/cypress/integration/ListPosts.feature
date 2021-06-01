Feature: List posts

  Background:
    Given 30 posts in the system

  Scenario: Displaying posts
    Given I am on the home page
    Then I see 10 posts
