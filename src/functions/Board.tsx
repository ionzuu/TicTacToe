import { useState, type JSX } from 'react';
import Square from './Square';

 const Players = {
    player1: 'X',
    player2: 'O'
};

let currentPlayer: string;

export default function Board(): JSX.Element {
    const [turn, setTurn]: [number, (turn: number) => void] = useState(0);
    const [value, setValue]: [string[], (value: string[]) => void] = useState(Array(9).fill(' '));
    function handleSquareClick(index: number): void {
 
        const nextSquares = value.slice();
        if (turn === 0){
            nextSquares[index] = Players.player1;
            setValue(nextSquares);
            setTurn(1);
            console.log({turn, value});
            currentPlayer = Players.player1;
        } else {
            nextSquares[index] = Players.player2;
            setValue(nextSquares);
            setTurn(0);
            console.log({turn, value});
            currentPlayer = Players.player2;
        }
    }
        function calculateWinner(value: string[]) {
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

            for (let i = 0; i < wins.length; i++) {
                const [a, b, c] = wins[i];
                if(value[a] === ' ' && value[a] === value[b] && value[a] === value[c]) {
                return value[a];
            }
        }
    }

    return (
        <>
            <div className="table-row">
                <Square key={0} value={value[0]} onSquareClick={() => handleSquareClick(0)} />
                <Square key={1} value={value[1]} onSquareClick={() => handleSquareClick(1)} />
                <Square key={2} value={value[2]} onSquareClick={() => handleSquareClick(2)} />
            </div>
            <div className="table-row">
                <Square key={3} value={value[3]} onSquareClick={() => handleSquareClick(3)} />
                <Square key={4} value={value[4]} onSquareClick={() => handleSquareClick(4)} />
                <Square key={5} value={value[5]} onSquareClick={() => handleSquareClick(5)} />
            </div>
            <div className="table-row">
                <Square key={6} value={value[6]} onSquareClick={() => handleSquareClick(6)} />
                <Square key={7} value={value[7]} onSquareClick={() => handleSquareClick(7)} />
                <Square key={8} value={value[8]} onSquareClick={() => handleSquareClick(8)} />
            </div>
            <div>
                <h2>Turn: {turn === 0 ? Players.player1 : Players.player2}</h2>
                {!calculateWinner(value) ? <h1 className="winner">Winner: {currentPlayer || ' '}</h1> : <h1 className="not-winner"></h1>}
            </div>
        </>
);
}