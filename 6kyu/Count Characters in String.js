/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091
The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

const count = s => {
    // create an empty object
    let obj = {}
    // iterate over the string
    s.split('').forEach(char => {
        // is this char a key in the object?
        if (obj[char]) {
            // if yes: increment the value
            obj[char]++
        } else {
            // if not: add the key with value one
            obj[char] = 1;
        }
    })
    return obj;
}

const count = s => {
    const obj = {}
    s.split('').forEach(char => {
        s.split(char).length - 1

    })
}

// using reduce
function count(string) {
    return string.split('').reduce((obj, char) => {
        // obj[char] = obj[char] === undefined ? 1 : obj[char] + 1
        // same logic without ternary
        if (obj[char] === undefined) {
            obj[char] = 1
        } else {
            obj[char]++
        }
        return obj
    }, {})
}