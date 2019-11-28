Feature: Kipos Login Test
 
Scenario: Login Test scenario
 
 Given user is already on landing page
 When title of the page is Kipos Collective
 Then user clicks on login button
 Then user enters email and password
 Then user clicks on submit button
 Then close the browser