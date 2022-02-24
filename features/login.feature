Feature: Oracle Login test

  @login
  Scenario Outline: Invalid login with user
    Given User has opened Oracle Profile page
    When User inputs <email> as the email
    And User inputs <password> as the password
    And User presses the sign in button
    Then User sees invalid credentials message

    Examples:
      | email            | password    |
      | sdhgsg@gmail.com | Password123 |
# | ajkgnmg@gmail.com         | Password123dfhr        |
# | aj35dghljnkgnmg@gmail.com | Passw26463gford123dfhr |


