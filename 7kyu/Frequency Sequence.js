/*
https://www.codewars.com/kata/frequency-sequence
Return an output string that translates an input string s/$s by replacing each character in s/$s
with a number representing the number of times that character occurs in s/$s and separating each number
with the character(s) sep/$sep.
*/

function freqSeq(s, sep) {
    return s.split('').map(function (char) {
        return s.split(char).length - 1
    }).join(sep)
}

const freqSeq = (s, sep) => s
    .split('')
    .map((char) => s.split(char).length - 1)
    .join(sep)