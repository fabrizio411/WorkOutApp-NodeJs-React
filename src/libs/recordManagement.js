export const newRecordMax = (actualData, newDataArray) => {
    let newMax = actualData
    if (actualData <= Math.max(...newDataArray)) newMax = Math.max(...newDataArray)
    return newMax
}

export const newRecordAverage = (actualData, newDataArray, counter) => {
    const oldTotal = actualData * counter
    const newData = newDataArray.reduce((acc, val) => acc + val)
    console.log(counter)
    const newAverage = (oldTotal + newData) / (counter + newDataArray.length)
    
    const roundedNewAverage = Math.round(newAverage * 10) / 10
    return Number.isInteger(roundedNewAverage) ? newAverage : roundedNewAverage
}
}