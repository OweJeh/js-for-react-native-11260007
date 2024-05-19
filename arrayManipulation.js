
function processArray(numbers) {
    let number = []

    for (let i of numbers) {
        if (i%2 === 0) {
            number[number.length] = i * i
        } else {
            number[number.length] = i * 3
        }
    }
    return number
}

console.log(processArray([1,2,3,4,5,6,7]))



function formatArrayStrings(stringArray, numbers) {
    let str = []

    for (let i= 0; i < stringArray.length; i++) {
        let arrStr = stringArray[i]
        let arrNum = numbers[i]

        if (arrNum%2===0) {
            str[str.length]=arrStr.toUpperCase()
        } else {
            str[str.length]=arrStr.toLowerCase()
        }
    }

    return str
}

const results = formatArrayStrings(["hi","hello", "you","mine","hers"], processArray([1, 2, 3,4]))
console.log(results)

