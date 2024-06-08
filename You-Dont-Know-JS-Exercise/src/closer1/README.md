# 클로저 1 p325

- 첫 번째로 값이 소수인지 확인, 숫자에 대한 소인수 목록을 생성하는 일반적인 컴퓨터 수학 연산을 구현하면서 클로저를 연습

# 구현 후 적용 결과

```javascript
isPrime(11) // true
isPrime(12) // false

factorize(11) // [ 11 ]
factorize(12) // [ 3, 2, 2 ] < 3*2*2=12
```

- 프로그램에서 isPrime(4327)을 여러 번 호출하면 매번 수십 번의 비교와 연산을 거치게 됩니다.
- factorize()를 보면 소인수 목록 계산을 위해 isPrime()을 여러 번 호출하는데, 이 중 대부분은 반복 호출일 가능성이 높습니다.
- 따라서 엄청난 낭비입니다.

# 첫 번째 연습 문제

- 클로저를 사용해 isPrime() 실행 결과를 캐시로 기억

# 두 번째 연습 문제

- 클로저를 사용해 factorize() 실행 결과를 캐시로 기억

# 제공 코드

```javascript
function isPrime(v) {
  if (v <= 3) {
    return v > 1
  }

  if (v % 2 === 0 || v % 3 === 0) {
    return false
  }

  let vSqrt = Math.sqrt(v)
  for (let i = 5; i <= vSqrt; i++) {
    if (v % i === 0 || v % (i + 2) === 0) {
      return false
    }
  }

  return true
}

function factorize(v) {
  if (!isPrime(v)) {
    let i = Math.floor(Math.sqrt(v))
    while (v % i != 0) {
      i--
    }

    return [...factorize(i), ...factorize(v / i)]
  }

  return [v]
}
```
