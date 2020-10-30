$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("F:/Print Orders/Print_Orders/src/test/java/Print_Orders/PrintOrders.feature");
formatter.feature({
  "line": 3,
  "name": "Marketplace",
  "description": "",
  "id": "marketplace",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@COMMUNITY-553"
    },
    {
      "line": 2,
      "name": "@REQ_COMMUNITY-2"
    }
  ]
});
formatter.before({
  "duration": 5889322500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Tests As a business I want to be able to print all order for my accounting reporting"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Acceptance Criteria:"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "## Print a report for all orders"
    },
    {
      "line": 10,
      "value": "## Sort orders by time submitted"
    }
  ],
  "line": 12,
  "name": "Verify if a business user can print a report",
  "description": "",
  "id": "marketplace;verify-if-a-business-user-can-print-a-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TEST_COMMUNITY-574"
    },
    {
      "line": 11,
      "name": "@REQ_COMMUNITY-435"
    },
    {
      "line": 11,
      "name": "@TESTSET_COMMUNITY-573"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User logs into account",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User clicks on market and selects order",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the print button and confirms print",
  "keyword": "When "
});
formatter.match({
  "location": "Print_steps.user_logs_into_account()"
});
formatter.result({
  "duration": 8646627200,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.user_clicks_on_market_and_selects_order()"
});
formatter.result({
  "duration": 10105669500,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.user_clicks_on_the_print_button_and_confirms_print()"
});
formatter.result({
  "duration": 5054003700,
  "status": "passed"
});
formatter.after({
  "duration": 629428800,
  "status": "passed"
});
});