import lowerCaseShift from "./lowerCaseShift.js";
import upperCaseShift from "./upperCaseShift.js";

export default function caesarCipher(string,offset){
    let charcterArray = string.split("")
    let shiftArray = []
    console.log(charcterArray)
    charcterArray.forEach(char => {
        if (/[a-z]/.test(char)) {
            console.log("lower case charcter")
            let shiftedCharacter = lowerCaseShift(char,offset)
            shiftArray.push(shiftedCharacter)
            return
        } else if (/[A-Z]/.test(char)){
            console.log("upper case charcter")
            let shiftedCharacter = upperCaseShift(char,offset)
            shiftArray.push(shiftedCharacter)
            return
        } else {
            console.log("smth else")
            shiftArray.push(char)
        }
    });
    return shiftArray.join("")
}
console.log("a".charCodeAt())
console.log("z".charCodeAt())
console.log("A".charCodeAt())
console.log("Z".charCodeAt())
console.log("e".charCodeAt())
console.log(lowerCaseShift("z",1))
console.log(caesarCipher("Hello",1))
//caesarCipher("Hello my name is matthew!")
/*
Break into an array of charcters
Make space for new string in array
run a loop for each charcter in array
run a specific shifting function based off the type of charcter or ignore
so bunch of if statements in caesar cipher that connect to other functions
continue after any if statement.
once you have looped through every charcter in array and you have updated shift array form string back together and return it.
*/