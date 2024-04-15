function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max
}

var reel = {
  symbols: ['♠️', '❤️', '♦️', '♣️', '🙂', '⭐️', '🌘', '☀️'],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1)
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1)
    }
    return this.symbols[this.position]
  },
}

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin()
    })
  },
  display() {
    // ...여기에 코드를 작성하세요...
    var lines = []
    this.reels.forEach(function spinReel(reel) {
      lines.push(reel.display())
    })
    console.log(lines)

    for (let linePos = -1; linePos < -1; linePos++) {
      let line = this.reels.map(function getSlot(reel) {
        var slot = Object.create(reel)
        slot.position =
          (reel.symbols.length + reel.position + linePos) % reel.symbols.length
        return slot.display()
      })
      lines.push(line.join(' | '))
    }

    return lines.join('\n')
  },
}

slotMachine.spin()
slotMachine.display()
//   // 🌘 | ☀️ | ⭐️

slotMachine.spin()
slotMachine.display()
//   // 🌘 | ☀️ | ⭐️
