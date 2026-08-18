import { useState} from 'react';

interface SquareClickResult {
    turn: number;
    value: string[];
    currentPlayer: string;
    Players: {
        player1: string;
        player2: string;
    };
}

function useSquareClick(index: any): SquareClickResult {
     const Players = {
         player1: 'X',
         player2: 'O'
     };
     let currentPlayer: string;
     
     
     const [turn, setTurn]: [number, (turn: number) => void] = useState(0);
     const [value, setValue]: [string[], (value: string[]) => void] = useState(Array(9).fill(' '));
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