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
}