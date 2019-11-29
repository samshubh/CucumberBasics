Feature: Kipos Application

Scenario Outline: Kipos login using examples keyword

Given user in landing page
When title is Kipos Collective
Then click on login button
Then user enter the login details "<email>" and "<password>"
Then click on submit button
Then close the current browser

Examples:
    
    |email|password|
    |prashanth.burri@srijaytech.com|welcome123|
    |jay@srijaytech.com|welcome123|