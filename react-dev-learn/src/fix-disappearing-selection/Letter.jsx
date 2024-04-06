export default function Letter ({letter, isHighlighted, onHover, onToggleStar}) {
    return (
        <>
            <li className={isHighlighted ? "highlighted" : ''} onPointerMove={() => onHover(letter.id)}>
                <button onClick={() => onToggleStar(letter)}>{letter.isStarred ? 'Start' : 'Unstart'}</button>
                {letter.subject}
            </li>
        </>
    )
}