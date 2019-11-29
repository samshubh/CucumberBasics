Feature: Kipos Collective Application

Scenario: Login without using examples keyword

Given user is already in landing page 
When title of the page is kipos
Then user click on login button
Then user enter "jay@srijaytech.com" and "welcome123"
Then user click on submit button
Then closing the browser