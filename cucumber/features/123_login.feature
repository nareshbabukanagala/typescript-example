Feature: Verify the Login Functionality
Scenario: Verify the Login functionality
  Given I open application
  When I type username
  And I type password
  And I type username2
  And I click on login button
  Then title should contains "Protractor"

 Scenario Outline: Verify the Login
  Given I open application
  When I type "<username>" in username field
  And I type "<password>" in password field
  And I type "<username2>" in username2 field
  And I click on login button
  Then title should contains "<title>"  

Examples:
|username|password|username2|title|
|angular|password|angular|Protractor|
|abc    |xyz     |abc    |protractor|
