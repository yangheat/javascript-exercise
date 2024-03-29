import { useState } from "react";
import { initialLetters } from "./data";
import Letter from "./Letter";

import "./style.css"

export default function FixDisappearingSelection () {
    const [letters, setLetters] = useState(initialLetters)
    const [highlightedLetterId, setHighlightedLetterId] = useState(null)

    const handleHover = (letterId) => {
        setHighlightedLetterId(letterId)
    }

    const handleStart = (currentLetter) => {
        setLetters(letters.map((letter) => {
            if (currentLetter.id === letter.id) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                }
            } else {
                return letter
            }
        }))
    }
    return (
        <>
            <ul>
                {letters.map((letter) => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={letter.id === highlightedLetterId}
                        onHover={handleHover}
                        onToggleStar={handleStart}
                    />
                ))}
            </ul>
        </>
    )
}