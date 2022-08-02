$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Loginfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@BankCashScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on\"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on\"\u003cbankCash\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on\"\u003cnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should land on Accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters\"\u003caccountTitle\u003e\"in accounts page in AccountTitle",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"\u003cdescription\u003e\"in accounts page in description",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"\u003cinitialBalance\u003e\"in accounts page in initialBalance",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"\u003caccountNumber\u003e\"in accounts page in accountNumber",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"\u003ccontactPerson\u003e\"in accounts page in contactPerson",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"\u003cPhone\u003e\"in accounts page in phone",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters\"\u003cinternetBankingURL\u003e\"in accounts page in internetBankingURL",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on\"\u003csubmitnewAccount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "login",
        "bankCash",
        "newAccount",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "accountTitle",
        "internetBankingURL",
        "submitnewAccount"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "login",
        "bankCash",
        "newAccount",
        "Firsttitle",
        "sampledesc",
        "1234567",
        "77645",
        "Habibo",
        "98765433254",
        "titill",
        "https://www.techfios.com",
        "submitnewAccount"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "login",
        "bankCash",
        "newAccount",
        "MyTitle12",
        "samyondesc",
        "9234567",
        "77645",
        "rainbo",
        "98765432254",
        "titill",
        "https://www.techfios.com",
        "submitnewAccount"
      ],
      "line": 27,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2498682600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@BankCashScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on\"login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on\"bankCash\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on\"newAccount\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should land on Accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters\"Firsttitle\"in accounts page in AccountTitle",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"sampledesc\"in accounts page in description",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"1234567\"in accounts page in initialBalance",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"77645\"in accounts page in accountNumber",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"Habibo\"in accounts page in contactPerson",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"98765433254\"in accounts page in phone",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters\"https://www.techfios.com\"in accounts page in internetBankingURL",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on\"submitnewAccount\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 867884900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "LoginstepDefinition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3144337500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "LoginstepDefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3079367100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 15
    }
  ],
  "location": "LoginstepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 4274645200,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 20441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 15
    }
  ],
  "location": "LoginstepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 85787500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 15
    }
  ],
  "location": "LoginstepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 319872200,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_land_on_Accounts_page()"
});
formatter.result({
  "duration": 7444700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Firsttitle",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_accountTitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 154078200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sampledesc",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_description_in_accounts_page(String)"
});
formatter.result({
  "duration": 164586300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_initialBalance_in_accounts_page(String)"
});
formatter.result({
  "duration": 174253100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "77645",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_accountNumber_in_accounts_page(String)"
});
formatter.result({
  "duration": 195804700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Habibo",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_contactPerson_in_accounts_page(String)"
});
formatter.result({
  "duration": 161660800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98765433254",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_phone_in_accounts_page(String)"
});
formatter.result({
  "duration": 141563200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.techfios.com",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_internetBankingURL_in_accounts_page(String)"
});
formatter.result({
  "duration": 156371400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitnewAccount",
      "offset": 15
    }
  ],
  "location": "LoginstepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 978032300,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 136629300,
  "status": "passed"
});
formatter.after({
  "duration": 721369800,
  "status": "passed"
});
formatter.before({
  "duration": 1352092100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@BankCashScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on\"login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on\"bankCash\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks on\"newAccount\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should land on Accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters\"MyTitle12\"in accounts page in AccountTitle",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"samyondesc\"in accounts page in description",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"9234567\"in accounts page in initialBalance",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"77645\"in accounts page in accountNumber",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"rainbo\"in accounts page in contactPerson",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"98765432254\"in accounts page in phone",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters\"https://www.techfios.com\"in accounts page in internetBankingURL",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on\"submitnewAccount\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 733404200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "LoginstepDefinition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3147809800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "LoginstepDefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3084066900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 15
    }
  ],
  "location": "LoginstepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 4078009700,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 12922900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 15
    }
  ],
  "location": "LoginstepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 94953200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 15
    }
  ],
  "location": "LoginstepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 322969900,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_land_on_Accounts_page()"
});
formatter.result({
  "duration": 7752200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MyTitle12",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_accountTitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 197098300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samyondesc",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_description_in_accounts_page(String)"
});
formatter.result({
  "duration": 172372600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9234567",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_initialBalance_in_accounts_page(String)"
});
formatter.result({
  "duration": 175172600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "77645",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_accountNumber_in_accounts_page(String)"
});
formatter.result({
  "duration": 171514900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rainbo",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_contactPerson_in_accounts_page(String)"
});
formatter.result({
  "duration": 216880500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98765432254",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_phone_in_accounts_page(String)"
});
formatter.result({
  "duration": 124553700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.techfios.com",
      "offset": 12
    }
  ],
  "location": "LoginstepDefinition.user_enters_internetBankingURL_in_accounts_page(String)"
});
formatter.result({
  "duration": 176885600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submitnewAccount",
      "offset": 15
    }
  ],
  "location": "LoginstepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 10072445400,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 144464600,
  "status": "passed"
});
formatter.after({
  "duration": 731431000,
  "status": "passed"
});
});