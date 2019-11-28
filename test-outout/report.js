$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vt1056.SRITADS/eclipse-workspace/CucumberTopics/src/main/java/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Kipos Login Test",
  "description": "",
  "id": "kipos-login-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login Test scenario",
  "description": "",
  "id": "kipos-login-test;login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is Kipos Collective",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefiniton.title_of_the_page_is_Kipos_Collective()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefiniton.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefiniton.user_enters_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefiniton.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefiniton.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});