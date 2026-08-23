import { useState } from 'react';
import type { Players } from '../gameInterfaces';
import calculateWinner from './calculateWinner';

interface SquareClickResult {
    turn: number;
    value: string[];
    currentPlayer: string;
    Players: Players;
    winner: string | undefined;
    handleSquareClick: (index: number) => void;
}

export default function useSquareClick(Players: Players): SquareClickResult {
    const [turn, setTurn] = useState<number>(0);
    const [value, setValue] = useState<string[]>(Array(9).fill(' '));


    const currentPlayer = turn === 0 ? Players.player1 : Players.player2;
    const winner = calculateWinner(Players, value);


    function handleSquareClick(index: number): void {
        if (value[index] !== ' ') return;

        const nextSquares = value.slice();
        
        if (turn === 0) {
            nextSquares[index] = Players.player1;
            setValue(nextSquares);
            setTurn(1);
        } else {
            nextSquares[index] = Players.player2;
            setValue(nextSquares);
            setTurn(0);
        }
    }

    return { winner, turn, value, currentPlayer, Players, handleSquareClick };
}
