function solution(babbling) {
    
    let count = 0
    babbling.forEach((word) => {
        if (word.replace(/(aya)?(ye)?(woo)?(ma)?/g, '') === '') {
            count++
        }
    })
    
    return count
}

module.exports = solution