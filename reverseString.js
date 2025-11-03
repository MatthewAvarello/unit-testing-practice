export default function reverseString(string){
    let characters = string.split("")
    characters.reverse()
    let newString = characters.join("")
    return newString
}