var fs = require("fs");

const fileReader = function (filepath) {
  return fs.readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("./sowpods.txt");

//iterate through strings using for loop
//.match every string for UU
//push to array
//return the array

function UU() {
    const finalArr = [];
    for (let i = 0; i <scrabbleWords.length; i++) {
        const word = scrabbleWords[i];
        if (word.includes('UU')) {
            finalArr.push(word);
        }
    }
console.log(finalArr)
}

//iterate over scrabblewords using map 
//see if word includes (X) && (Y) && (Z)
//return (word)
//return subarrray 

function XYZ() {
    const finalArr = scrabbleWords.filter((word)=> {
        if (word.includes("X") && word.includes("Y") && word.includes("Z")) {
            return true
        }
    })
    console.log(finalArr);    
}

//XYZ()

function qButNoU() {
    const finalArr = scrabbleWords.filter((word)=> {
       if (word.includes('Q') && !word.includes('U'))
        return true
    })
    console.log(finalArr);
}

//qButNoU()

function containsCATAnd5LettersLong() {
    const finalArr = scrabbleWords.filter((word) => {
        if (word.includes("CAT") && word.length === 5) {
            return true
        }
    })
    console.log(finalArr)
}
//containsCATAnd5LettersLong()

function noEOrA() {
    const finalArr = scrabbleWords.filter((word) => {
        if (!word.includes("E") && !word.includes("A") && word.length > 14) {
            return true
        }
    })
    console.log(finalArr)
}
//noEOrA()

function bAndX() {
    const finalArr = scrabbleWords.filter((word) => {
        if(word.includes('B') && word.includes('X') && word.length < 5) {
            return true
        }
    })
    console.log(finalArr)
}
//bAndX()

function startsAndEndsWithY() {
    const finalArr = scrabbleWords.filter((word) => {
        if (word[0] === 'Y' && word[word.length-1] === 'Y') {
            return true
        } 
    })
    console.log(finalArr)
}

//startsAndEndsWithY()

function noVowel() {
    const finalArr = scrabbleWords.filter((word) => {
        if (!word.includes('A') && !word.includes('E') && !word.includes('I')
        && !word.includes('O') && !word.includes('U') && !word.includes('Y')) {
            return true
        }
    })
    console.log(finalArr)
}
//noVowel()

function allVowels() {
    const finalArr = scrabbleWords.filter((word) => {
        if (word.includes('A') && word.includes('E') && word.includes('I')
        && word.includes('O') && word.includes('U')) {
            return true
        }
    })
    console.log(finalArr)
}
//allVowels();

function vowelsInAlphabeticalOrder() {
    //declare an empty array  
    const finalArr = [];
    //iterate over scrabbleWords array using for loop
    scrabbleWords.forEach((word) => {
        //grab current word 
        //if statement to see if word has all vowels
        if (word.includes('A') && word.includes('E') && word.includes('I') && word.includes('O') 
        && word.includes('U')) {
            //console.log(word);
            //create a variable equal to letter "A"
            let letterCheck = 'A';
            //create boolean to see if word is valid or not
            let isValid = true;
            //iterate over the word
            for (const letter of word) {
                //on each iteration, check to see if current letter is a vowel
                if (letter.includes('A') || letter.includes('E') || letter.includes('I') || letter.includes('O') 
                || letter.includes('U')) {
                    //
                    //if yes, compare letters to variable to see if larger or equal
                    if (letterCheck <= letter) {
                        //if yes, larger or equal, set variable equal to current letter; keeping track of last vowel encountered
                        letterCheck = letter
                    } else {
                        //if no, set boolean to false and break
                        isValid = false;
                        break;
                    }
                }
            }
            //if isValid, store word in results array finalArr
            if (isValid) {
                finalArr.push(word)
            }

        }

    })
    //return finalArr
    console.log(finalArr)   
}

//make a function that returns a boolean
//word returns whether word has vowels in order;



//vowelsInAlphabeticalOrder();

function subStrType() {
    //declare an array
    const finalArr = [];
    //use filter on scrabbleWords
    scrabbleWords.filter((word) => {
        //word.includes('TYPE')
        if (word.includes('TYPE')) {
            //push word to array
            finalArr.push(word)
        }
    })
    //return array.length
    console.log(finalArr.length) 
}

//subStrType();

function ghtly() {
    const finalArr = [];
    scrabbleWords.filter((word) => {
        if (word.includes('GHTLY')) {
            finalArr.push(word)
        }
    })
    console.log(finalArr);
}

//ghtly()

function shortestWordAllVowels() {
    const finalArr = scrabbleWords.filter((word) => {
        if (word.includes('A') && word.includes('E') && word.includes('I')
        && word.includes('O') && word.includes('U')) {
            return true
        }
    })
    const shortest = finalArr.reduce(function(a,b) {
        return a.length < b.length ? a : b;
    })
    console.log(shortest);
}

//shortestWordAllVowels(); //SEQUOIA

function noVowelLongest() {
    const finalArr = scrabbleWords.filter((word) => {
        if (!word.includes('A') && !word.includes('E') && !word.includes('I')
        && !word.includes('O') && !word.includes('U') && !word.includes('Y')) {
            return true
        }
    })
    const longest = finalArr.reduce(function(a,b) {
        return a.length > b.length ? a : b; 
    })

    console.log(longest)
}
//noVowelLongest()

function qXOrZLeastCommon() {
    const qWords = [];
    const xWords = [];
    const zWords = [];
    const finalArr = scrabbleWords.filter((word) => {
        if (word.includes('Q')) {
            qWords.push(word)
        } else if (word.includes('X')) {
            xWords.push(word)
        } else if (word.includes('Z')) {
            zWords.push(word)
        }
    })
    console.log('Q: ', qWords.length, 'X: ', xWords.length, 'Z: ', zWords.length)
}

//qXOrZLeastCommon();

function longestPalindrome2() {
    console.log("scrabbleWords: ", scrabbleWords.length);
    const finalArr = []; 
    const words = scrabbleWords.filter((word) => {
        if (word.split('').reverse().join('') === word) {
            finalArr.push(word)
        }
    })
    console.log("finalArr: ", finalArr);
    const longest = finalArr.reduce(function(a,b) {
        return a.length > b.length ? a : b;
    }, 0)
   
    console.log(longest)
}

//longestPalindrome2();

function longestPalindrome() {
    //initialize variable to empty string
    let longest = '';
    //iterate over scrabbleWords
    for (let i=0; i<scrabbleWords.length; i++) {
        //check if palindrome
        if (scrabbleWords[i].split('').reverse().join('') === scrabbleWords[i]) {
            //if yes, check if current palindrome 
            //in variable is longer than previous palindrome
            if (scrabbleWords[i].length > longest.length) {
                //if yes, save current palindrome's length in variable
                longest = scrabbleWords[i]
            }

        }
    }

    //return longest Palindrome    
    console.log(longest)
}   
//longestPalindrome();

function noDoubles(wordsFromScrabble) {
    const consecutiveLetters = new Set()

    for (const word of wordsFromScrabble) {
        for (let i=0; i<word.length-1; i++) {
            if (word[i] === word[i+1]) {
                consecutiveLetters.add(word[i])
            }


        }
    }
    console.log(consecutiveLetters)

    const arrayLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R','S','T','U','V','W','X','Y','Z']

    const filterLetters = arrayLetters.filter((letter) => {
        return !consecutiveLetters.has(letter)
    })
    return filterLetters
}


console.log(noDoubles(scrabbleWords));

