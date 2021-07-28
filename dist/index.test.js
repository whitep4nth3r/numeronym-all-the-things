"use strict";

var _index = require("./index.js");

test("internationalisation returns i18n", function () {
  var result = (0, _index.makeNumeronym)("internationalisation");
  expect(result).toEqual("i18n");
});
test("whitep4nth3r yolo returns w10r y2o", function () {
  var result = (0, _index.makeNumeronym)("whitep4nth3r yolo");
  expect(result).toEqual("w10r y2o");
});
test("whitep4nth3r yolo internationalisation outrageous returns w10r y2o i18n o8s", function () {
  var result = (0, _index.makeNumeronym)("whitep4nth3r yolo internationalisation outrageous");
  expect(result).toEqual("w10r y2o i18n o8s");
});