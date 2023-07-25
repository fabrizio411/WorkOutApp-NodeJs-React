export const newRecordMax = (actualDataArray, newDataArray, historyID) => {
    const newMax = Math.max(...newDataArray)


    for (let i = 0; i < actualDataArray.length; i++) {
        if (newMax > actualDataArray[i][0]) {
            actualDataArray.unshift([newMax, historyID])
            break
        }
    }

    let sortedArray = actualDataArray.sort((x, y) => y[0] - x[0])

    if (sortedArray.length > 3) sortedArray.pop()
    
    return sortedArray
}

export const newRecordAverage = (actualData, newDataArray, counter) => {
    const oldTotal = actualData * counter
    const newData = newDataArray.reduce((acc, val) => acc + val)
    const newAverage = (oldTotal + newData) / (counter + newDataArray.length)
    
    const roundedNewAverage = Math.round(newAverage * 10) / 10
    return Number.isInteger(roundedNewAverage) ? newAverage : roundedNewAverage
}

export const updateTotal = (actualData, oldDataArray, newDataArray, exerciseChange) => {
    const newTotal = actualData + newDataArray.reduce((acc, val) => acc + val)
    if (!exerciseChange) newTotal -= oldDataArray.reduce((acc, val) => acc + val)
    return newTotal
}

export const updateRecordMax = (actualDataArray, newDataArray, historyID) => {
    const newMax = Math.max(...newDataArray)

    for (let i = 0; i < actualDataArray.length; i++) {
        let oldValue = 0
        if (actualDataArray[i].includes(historyID)) {
            oldValue = actualDataArray[i]
            actualDataArray.splice(actualDataArray.indexOf(oldValue), 1, [0, ''])
        }

        if (newMax > actualDataArray[i][0]) {
            actualDataArray.unshift([newMax, historyID])
            break
        }
    }

    let sortedArray = actualDataArray.sort((x, y) => y[0] - x[0])

    if (sortedArray.length > 3) sortedArray.pop()
    
    return sortedArray
}

export const updateRecordAverage = (actualData, oldDataArray, newDataArray, counter) => {
    let inCounter = counter - oldDataArray.length
    const oldTotal = (actualData * counter) - oldDataArray.reduce((acc, val) => acc + val)


    const newData = newDataArray.reduce((acc, val) => acc + val)
    const newAverage = (oldTotal + newData) / (inCounter + newDataArray.length)

    const roundedNewAverage = Math.round(newAverage * 10) / 10
    return Number.isInteger(roundedNewAverage) ? newAverage : roundedNewAverage
}

export const updateRecordMaxIfChanged = (actualDataArray, historyID) => {
    for (let i = 0; i < actualDataArray.length; i++) {
        if (actualDataArray[i].includes(historyID)) {
            let oldValue = actualDataArray[i]
            actualDataArray.splice(actualDataArray.indexOf(oldValue), 1, [0, ''])
        }
    }

    let sortedArray = actualDataArray.sort((x, y) => y[0] - x[0])

    if (sortedArray.length > 3) sortedArray.pop()
    
    return sortedArray
}

export const updateRecordAverageIfChanged = (actualData, oldDataArray, counter) => {
    let total = actualData * counter
    let newTotal = total - oldDataArray.reduce((acc, val) => acc + val)
    let newCounter = counter - oldDataArray.length
    let newAverage = newTotal / newCounter
    return newAverage
}