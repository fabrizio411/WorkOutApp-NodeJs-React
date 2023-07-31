export const getTotal = (historyArray, witchData) => {
    let total = 0
    historyArray.forEach(val => {
        if (witchData === 'MAIN') {
            val.mainData.forEach(number => total += number)
        } else if (witchData === 'SECONDARY') {
            val.secondaryData.forEach(number => total += number)
        }
    })
    return total
}

export const getMax = (historyArray, witchData) => {
    let max = 0
    historyArray.forEach(val => {
        if (witchData === 'MAIN') {
            val.mainData.forEach(number => {
                if (number > max) max = number
            })
        } else if (witchData === 'SECONDARY') {
            val.secondaryData.forEach(number => {
                if (number > max) max = number
            })
        }
    })
    return max
}

export const getAverage = (historyArray, witchData) => {
    const dataArray = []
    historyArray.forEach(val => {
        if (witchData === 'MAIN') {
            val.mainData.forEach(number => dataArray.push(number))
        } else if (witchData === 'SECONDARY') {
            val.secondaryData.forEach(number => dataArray.push(number))
        }
    })

    let sum = dataArray.reduce((acc, val) => acc + val) 
    let average = sum / dataArray.length

    return average
}