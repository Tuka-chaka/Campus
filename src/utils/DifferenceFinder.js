function findDifference(monthBefore, lastMonth) {
    let result = lastMonth-monthBefore
    let isGreater = result >= 0
    result = Math.abs(result)
    let percentage = (result/monthBefore) * 100

    return {
        difference: result,
        isGreater: isGreater,
        percentage: Math.round(percentage)
    }
}

export default findDifference