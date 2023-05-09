"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeralToNumber = void 0;
exports.numeralToNumber = (str) => {
    if (!str) {
        return NaN;
    }
    var wordsA = str.toLowerCase().trim().split('-').join(' ');
    var wordsB = wordsA.split(' and ').join(' ');
    var words = wordsB.split(',').join('');
    words += ' ';
    var input = 0;
    var singles = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninty"];
    var hundos = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    var powers = ["", "thousand", "million"];
    var allNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninty", "thousand", "million", "hundred"];
    for (let i = powers.length - 1; i >= 0; i--) {
        if (powers[i]) {
            let index = words.indexOf(powers[i]);
            if (index >= 0 && words[index + powers[i].length] == ' ') {
                let count = exports.numeralToNumber(words.substring(0, index));
                input += (count * Math.pow(1000, i));
                words = words.substring(index);
            }
        }
    }
    for (let i = hundos.length - 1; i >= 0; i--) {
        if (hundos[i]) {
            let index = words.indexOf(hundos[i]);
            if (index >= 0 && words[index + hundos[i].length] == ' ') {
                input += (i * 100);
                words = words.substring(index);
            }
        }
    }
    for (let i = tens.length - 1; i >= 0; i--) {
        if (tens[i]) {
            let index = words.indexOf(tens[i]);
            if (index >= 0 && words[index + tens[i].length] == ' ') {
                input += (i * 10);
                words = words.substring(index);
            }
        }
    }
    for (let i = teens.length - 1; i >= 0; i--) {
        if (teens[i]) {
            let index = words.indexOf(teens[i]);
            if (index >= 0 && words[index + teens[i].length] == ' ') {
                input += (i + 10);
                words = words.substring(index);
            }
        }
    }
    for (let i = singles.length - 1; i >= 0; i--) {
        if (singles[i]) {
            let index = words.indexOf(singles[i] + ' ');
            if (index >= 0 && words[index + singles[i].length] == ' ') {
                input += (i);
                words = words.substring(index);
            }
        }
    }
    if (!allNum.includes(words.trim()) && words != "") {
        return NaN;
    }
    return input;
};