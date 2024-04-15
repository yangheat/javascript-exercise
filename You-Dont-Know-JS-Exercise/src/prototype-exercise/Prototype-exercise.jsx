import { useState } from 'react'

const reel = {
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

const slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin()
    })
  },
  display() {
    const result = []
    this.reels.forEach((reel) => {
      result.push(reel.display())
    })

    return result
  },
}

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max
}

export default function Prototypeexercise() {
  const [slot, setSlot] = useState(slotMachine.display())

  function handleSpin() {
    slotMachine.spin()
    setSlot(slotMachine.display())
  }

  return (
    <>
      <div className="flex justify-center h-screen items-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-sm">
          <header className="text-2xl font-semibold mb-4">
            프로토타입 연습하기
          </header>
          <main>
            <section className="flex flex-row justify-center gap-3 my-3">
              {slot.map((reel, index) => (
                <article className="flex flex-col" key={index}>
                  <figure className="w-10 h-2 rounded-md transition-all duration-200 cursor-pointer flex flex-row justify-center bg-rose-400"></figure>
                  <p className="flex justify-center">{reel}</p>
                </article>
              ))}
            </section>
            <section className="flex justify-center gap-3">
              <button
                className="px-3 py-1 shadow-lg shadow-gray-500/50 bg-black text-white rounded-lg text-[15px] cursor-pointer active:scale-[.97]"
                onClick={handleSpin}
              >
                Spin!
              </button>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
