$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\com\\bhanu\\tester.feature");
formatter.feature({
  "line": 1,
  "name": "Life of IT Tester",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy\r\nI want to keep my boss happy",
  "id": "life-of-it-tester",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "I am a bad tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-bad-tester",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am a \"bad\" tester",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "line": 9,
  "name": "I go to work",
  "keyword": "When "
});
formatter.match({
  "location": "TestFactory.I_go_to_work()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "line": 10,
  "name": "I \"mess\" it",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "line": 11,
  "name": "My boss \"fires\" me",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "line": 12,
  "name": "The developer \"likes\" me",
  "keyword": "But "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "I am a good tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-good-tester",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am a \"good\" tester",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "line": 16,
  "name": "I go to work",
  "keyword": "When "
});
formatter.match({
  "location": "TestFactory.I_go_to_work()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "line": 17,
  "name": "I \"complete\" it",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "line": 18,
  "name": "My boss \"salutes\" me",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "line": 19,
  "name": "The developer \"hates\" me",
  "keyword": "But "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});