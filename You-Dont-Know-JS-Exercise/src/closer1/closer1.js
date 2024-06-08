const isPrime = (() => {
  let prime = {}

  return (v) => {
    if (v in prime) {
      return prime[v]
    }

    if (v <= 3) {
      return (prime[v] = v > 1)
    }

    if (v % 2 === 0 || v % 3 === 0) {
      return (prime[v] = false)
    }

    let vSqrt = Math.sqrt(v)
    for (let i = 5; i <= vSqrt; i++) {
      if (v % i === 0 || v % (i + 2) === 0) {
        return (prime[v] = false)
      }
    }

    return (prime[v] = true)
  }
})()

const factorize = ((v) => {
  let factorize = {}

  return () => {
    if (v in factorize) {
      return factorize[v]
    }

    if (!isPrime(v)) {
      let i = Math.floor(Math.sqrt(v))
      while (v % i != 0) {
        i--
      }

      return (factorize[v] = [...factorize(i), ...factorize(v / i)])
    }

    return [v]
  }
})()
