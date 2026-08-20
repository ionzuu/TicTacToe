import { useState } from 'react';
import type { Players } from '../gameInterfaces';

interface SquareClickResult {
    turn: number;
    value: string[];
    currentPlayer: string;
    Players: Players;
    handleSquareClick: (index: number) => void; // El componente usará esto
}

export default function useSquareClick(Players: Players): SquareClickResult {
    const [turn, setTurn] = useState<number>(0);
    const [value, setValue] = useState<string[]>(Array(9).fill(' '));

    const currentPlayer = turn === 0 ? Players.player1 : Players.player2;

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

    return { turn, value, currentPlayer, Players, handleSquareClick };
}
