# 프로토타입 연습하기

- 독립적으로 돌아가는 릴 세 개가 있는 슬롯머신을 정의
- spin()을 실행하면 세 릴이 돌고, display()를 실행하면 결과가 출력됩니다.
- 릴 하나의 동작은 reel 객체에 정의되어 있습니다.
- 여러 릴이 있으므로 각 릴은 reel을 상속받아야 합니다.
- 릴에는 position 프로퍼티도 필요합니다.
- 일반적으로 슬롯머신의 릴은 결과에 해당하는 기호 하나(position)와 앞 기호 (position - 1), 뒤 기호 (position + 1)를 함께 표시합니다.
- display()를 실행하면 3X3 그리드의 총 9개의 기호가 출력되도록 해봅시다.

## 제공하는 코드

```javascript
function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max
}

var reel = {
  symbols: [
    '♠️', '❤️', '♦️', '♣️', '🙂', '⭐️', '🌘', '☀️'
    ],
  spin() {
    if (this.position == null) {
      this.position = randMax(
        this.symbols.length - 1
      )
    }
    this.position = (
      this.position + 100 + randMax(100)
    ) % this.symbols.length
  },
  display() {
    if (this.position == null) {
      this.position = randMax(
        this.symbols.length - 1
      )
    }
    return this.symbols[this.position]
  }
}

var slotMachine = {
  reels: [
    // ...여기에 코드를 작성하세요...
    // 슬롯머신에는 세 개의 릴이 필요합니다.
    // 힌트: Object.create()를 사용하세요.
  ],
  spin: {
    this.reels.forEach(function spinReel(reel) {
      reel.spin()
    })
  },
  display() {
    // ...여기에 코드를 작성하세요...
  }
}

slotMachine.spin()
slotMachine.display()
// 🌘 | ☀️ | ⭐️

slotMachine.spin()
slotMachine.display()
// 🌘 | ☀️ | ⭐️
```

## 책에서 제안하는 모범 답안

- model.answer.js 참고
