function calculator() {
  let numberStr = ''
  let numberArr = []
  let oprationArr = []

  return (value) => {
    if (isNaN(parseInt(value))) {
      if (value === '=') {
        numberArr.push(parseInt(numberStr))
        let total = numberArr[0]
        oprationArr.forEach((opration, index) => {
          switch (opration) {
            case '+':
              total += numberArr[index + 1]
              break
            case '-':
              total -= numberArr[index + 1]
              break
            case '*':
              total *= numberArr[index + 1]
              break
            case '/':
              total /= numberArr[index + 1]
              break
          }
        })
        console.log(total)
        numberArr = [total]
        oprationArr = []
        numberStr = ''
      } else {
        numberStr && numberArr.push(parseInt(numberStr))
        oprationArr.push(value)
        numberStr = ''
      }
    } else {
      numberStr += value
    }
  }
}

var calc = calculator()

calc('4') // 4
calc('+') // +
calc('7') // 7
calc('3') // 3
calc('-') // -
calc('2') // 2
calc('=') // 75
calc('*') // *
calc('4') // 4
calc('=') // 300
calc('5') // 5
calc('-') // -
calc('5') // 5
calc('=') // 0
