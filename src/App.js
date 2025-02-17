import {useState} from 'react';

function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isCross, setCross] = useState(true);
    const [status, setStatus] = useState("X GOES FIRST");
    const [done, setDone] = useState(false);

    function resetBoard() {
        setSquares(Array(9).fill(null));
        setStatus("X GOES FIRST");
        setDone(false);
        setCross(true);
    }

    function handleClick(i) {
        if (squares[i] !== null || done)
            return
        const nextSquares = squares.slice();
        isCross ? nextSquares[i] = 'X' : nextSquares[i] = 'O';
        setCross(!isCross);
        setSquares(nextSquares);

        if (calculateWinner(nextSquares)) {
            setDone(true);
            isCross ? setStatus("X HAS WON!") : setStatus("O HAS WON!");
        } else {
            !isCross ? setStatus("X GOES NEXT") : setStatus("O GOES NEXT");
        }

    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return true;
            }
        }
        return null;
    }

    return (
        <>
            {[0, 1, 2].map(row => (
                <div className="board-row">
                    {[0, 1, 2].map(col => (
                        <Square value={squares[row * 3 + col]} onSquareClick={() => handleClick(row * 3 + col)}/>
                    ))}
                </div>
            ))}
            <div>
                {status}
            </div>
            <div>
                <button onClick={resetBoard}>reset</button>
            </div>
        </>
    )
        ;
}
