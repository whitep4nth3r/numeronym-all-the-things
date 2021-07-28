"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeNumeronym = makeNumeronym;

function doWord(word) {
  return word.charAt(0) + (word.length - 2) + word.charAt(word.length - 1);
}

function makeNumeronym(input) {
  var returnVal = "";
  var words = input.split(" ");

  for (var i = 0; i < words.length; i++) {
    returnVal += doWord(words[i]) + " ";
  }

  return returnVal.trim();
}