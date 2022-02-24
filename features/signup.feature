Feature: Oracle signup test

    @signup
    Scenario: Sign up with new user
        Given User has opened Oracle Profile page
        When User presses the Create Account button
        And User fills out create account form
        And User presses the Sign Up button
        Then User is redirected to Check Your Email page