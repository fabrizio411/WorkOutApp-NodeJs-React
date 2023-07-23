export const newRecordMax = (actualData, newDataArray) => {
    if (actualData < Math.max(newData)) return newData
    return actualData
}

export const newRecordAverage = (actualData, newDataArray, counter) => {
    const oldTotal = actualData * counter
    const newData = newDataArray.reduce((acc, val) => acc + val)
    const newAverage = (oldTotal + newData) / (counter + 1)
    return newAverage
}