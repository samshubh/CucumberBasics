$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/vt1056.SRITADS/eclipse-workspace/CucumberTopics/src/main/java/feature/DataDrivenMultipleExamplesKeyword.feature");
formatter.feature({
  "line": 1,
  "name": "Kipos Application",
  "description": "",
  "id": "kipos-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Kipos login using examples keyword",
  "description": "",
  "id": "kipos-application;kipos-login-using-examples-keyword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user in landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title is Kipos Collective",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter the login details \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the current browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "kipos-application;kipos-login-using-examples-keyword;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 14,
      "id": "kipos-application;kipos-login-using-examples-keyword;;1"
    },
    {
      "cells": [
        "prashanth.burri@srijaytech.com",
        "welcome123"
      ],
      "line": 15,
      "id": "kipos-application;kipos-login-using-examples-keyword;;2"
    },
    {
      "cells": [
        "jay@srijaytech.com",
        "welcome123"
      ],
      "line": 16,
      "id": "kipos-application;kipos-login-using-examples-keyword;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Kipos login using examples keyword",
  "description": "",
  "id": "kipos-application;kipos-login-using-examples-keyword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user in landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title is Kipos Collective",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter the login details \"prashanth.burri@srijaytech.com\" and \"welcome123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the current browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.user_in_landing_page()"
});
formatter.result({
  "duration": 16904272198,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.title_is_Kipos_Collective()"
});
formatter.result({
  "duration": 34773099,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.click_on_login_button()"
});
formatter.result({
  "duration": 4116575183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashanth.burri@srijaytech.com",
      "offset": 30
    },
    {
      "val": "welcome123",
      "offset": 67
    }
  ],
  "location": "LoginUsingExamplesKeyword.user_enter_the_login_details_and(String,String)"
});
formatter.result({
  "duration": 8432287425,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.click_on_submit_button()"
});
formatter.result({
  "duration": 3110406185,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.close_the_current_browser()"
});
formatter.result({
  "duration": 1285972302,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Kipos login using examples keyword",
  "description": "",
  "id": "kipos-application;kipos-login-using-examples-keyword;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user in landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title is Kipos Collective",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enter the login details \"jay@srijaytech.com\" and \"welcome123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the current browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.user_in_landing_page()"
});
formatter.result({
  "duration": 17077447178,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.title_is_Kipos_Collective()"
});
formatter.result({
  "duration": 39845031,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.click_on_login_button()"
});
formatter.result({
  "duration": 4110005049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay@srijaytech.com",
      "offset": 30
    },
    {
      "val": "welcome123",
      "offset": 55
    }
  ],
  "location": "LoginUsingExamplesKeyword.user_enter_the_login_details_and(String,String)"
});
formatter.result({
  "duration": 8390035293,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.click_on_submit_button()"
});
formatter.result({
  "duration": 3083236708,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingExamplesKeyword.close_the_current_browser()"
});
formatter.result({
  "duration": 1224425730,
  "status": "passed"
});
});