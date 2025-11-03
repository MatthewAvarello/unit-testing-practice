export default function lowerCaseShift(char,offset){
    const Z_CHAR_CODE = 122
    const A_CHAR_CODE = 97
    let charcterCode = char.charCodeAt(0)
    while(offset > 0){
        if(offset >= 26){
            offset -= 26
            continue
        }
        if (charcterCode == Z_CHAR_CODE) {
            charcterCode = A_CHAR_CODE
            offset--
            continue
        }
        charcterCode++
        offset--
    }
    let newCharacter = String.fromCharCode(charcterCode)
    return newCharacter
}