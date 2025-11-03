export default function analyzeArray(array){
    let min = Math.min(...array)
    let max = Math.max(...array)
    let length = array.length
    let sum = array.reduce((total, current) => total + current)
    let average = sum / array.length

    return{average,min,max,length}
}