export default function upperCaseShift(char,offset){
    const CAP_Z_CHAR_CODE = 90
    const CAP_A_CHAR_CODE = 65
    let charcterCode = char.charCodeAt(0)
    while(offset > 0){
        if(offset >= 26){
            offset -= 26
            continue
        }
        if (charcterCode == CAP_Z_CHAR_CODE) {
            charcterCode = CAP_A_CHAR_CODE
            offset--
            continue
        }
        charcterCode++
        offset--
    }
    let newCharacter = String.fromCharCode(charcterCode)
    return newCharacter
}