import { useState} from 'react';
import type { Players } from '../gameInterfaces';

interface SquareClickResult {
    turn: number;
    value: string[];
    currentPlayer: string;
    Players: {
        player1: string;
        player2: string;
    };
}

function useSquareClick(index: number, Players: Players): SquareClickResult {
    const [turn, setTurn]: [number, (turn: number) => void] = useState(0);
    const [value, setValue]: [string[], (value: string[]) => void] = useState(Array(9).fill(' '));
    
    let currentPlayer: string;
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
    return {turn, value, currentPlayer, Players};
}

export { useSquareClick as handleSquareClick, };