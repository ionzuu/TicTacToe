import { useEffect, useState, type JSX } from 'react';
import Square from './Square';
// import {handleSquareClick} from '../hooks/useSquareClick';

const Players: { player1: string; player2: string; winner: string | undefined } = {
    player1: 'X',
    player2: 'O',
    winner: '',
};
    
    export default function Board(): JSX.Element {
        const [turn, setTurn]   :   [number,    (turn: number)      => void] = useState(0);
        const [value, setValue] :   [string[],  (value: string[])   => void] = useState(Array(9).fill(''));

        function calculateWinner(value: string[]): JSX.Element | undefined {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        console.log('Calculating winner...');
        console.log(value);

        for (let i = 0; i < wins.length; i++) {
            const [a, b, c] = wins[i];
            console.log(`Checking combination: ${a}, ${b}, ${c}`);
            if(value[a] && value[a] === value[b] && value[a] === value[c]) {
                Players.winner = value[a];
                console.log('Winner found:', Players.winner);
                alert(`Winner: ${Players.winner}`);
                return <h2 className="winner">Winner: {Players.winner}</h2>;
            }
            else{
                console.log('No winner yet...');
            }
        }
    }

        function handleSquareClick(index: number): any {
            const nextSquares = value.slice();
            let currentPlayer: string = '';
            console.log({nextSquares});
            if (turn === 0){
                nextSquares[index] = Players.player1;
                setValue(nextSquares);
                setTurn(1);
                currentPlayer = Players.player1;
            } else {

            nextSquares[index] = Players.player2;
            setValue(nextSquares);
            setTurn(0);
            currentPlayer = Players.player2;
            // Players.winner = calculateWinner(value)
        }
    }

    useEffect(() => {
        calculateWinner(value);
    }, [value]);

    return (
        <>
            {Players.winner ? <h2 className="winner">Winner: {Players.winner}</h2> : null}
            <div className="table-row">
                <Square value={value[0]} onSquareClick={() => handleSquareClick(0)} />
                <Square value={value[1]} onSquareClick={() => handleSquareClick(1)} />
                <Square value={value[2]} onSquareClick={() => handleSquareClick(2)} />
            </div>
            <div className="table-row">
                <Square value={value[3]} onSquareClick={() => handleSquareClick(3)} />
                <Square value={value[4]} onSquareClick={() => handleSquareClick(4)} />
                <Square value={value[5]} onSquareClick={() => handleSquareClick(5)} />
            </div>
            <div className="table-row">
                <Square value={value[6]} onSquareClick={() => handleSquareClick(6)} />
                <Square value={value[7]} onSquareClick={() => handleSquareClick(7)} />
                <Square value={value[8]} onSquareClick={() => handleSquareClick(8)} />
            </div>
            <div>
                <h2>Turn: {turn === 0 ? Players.player1 : Players.player2}</h2>
            </div>
        </>
);
}