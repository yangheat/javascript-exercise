import { useState } from "react";
import Letter from "./Letter";
import { initialLetters } from './data.js';

export default function ImplementMultipleSelection() {
    const [letters, setLetters] = useState(initialLetters)
    const selectedCount = letters.filter(letter => letter.isStarred).length
    const handleToggle = (selectedLetterId) => {
        setLetters(letters.map((letter) => {
            if (letter.id === selectedLetterId) {
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
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            // TODO: allow multiple selection
                            letter.isStarred
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    )
}