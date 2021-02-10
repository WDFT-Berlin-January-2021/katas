/*
https://www.codewars.com/kata/57fe50d000d05166720000b1
You need to approach your boss. Her decision will be based on three parameters:
val= your value to the organisation
happ= her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string 'x'.
Note that if x contains three instances of the letter 'l', that still scores three points,
even though there is only one in the word sabbatical.
If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!',
else return 'Back to your desk, boy.'.
*/

function sabb(s, val, happiness) {
    let sabb = 0;
    for (let letter of s) {
        if ('sabbatical'.split('').includes(letter)) sabb++
    }
    let total = sabb + val + happiness;
    if (total > 22) return 'Sabbatical! Boom!';
    else return 'Back to your desk, boy.';
}

function sabb(s, val, happiness) {
    const lookUp = ["s", "a", "b", "t", "i", "c", "l"]
    let occuranceCounter = 0;
    s.split("").forEach(letter => {
        lookUp.forEach(element => {
            if (letter === element) {
                occuranceCounter++
            }
        })
    })
    occuranceCounter += val + happiness
    if (occuranceCounter > 22) {
        return "Sabbatical! Boom!"
    } else {
        return "Back to your desk, boy."
    }
}

// using reduce
function sabb(s, val, happiness) {
    let sabb = s.split('').reduce((acc, letter) => {
        if ('sabbatical'.includes(letter)) acc++;
        return acc
    }, 0)
    return (sabb + val + happiness > 22) ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
}