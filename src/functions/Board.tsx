import { useEffect, useState, type JSX } from 'react';
import button from './Square';
import type {Players} from '../gameInterfaces';
import { handleSquareClick } from '../hooks/useSquareClick';
// import {handleSquareClick} from '../hooks/useSquareClick';

// const Players: { player1: string; player2: string; winner: string | undefined } = {
//     player1: 'X',
//     player2: 'O',
//     winner: '',
// };
    
    export default function Board(Players: Players): JSX.Element {
        console.log('Board component rendered with Players:', Players);

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

    //     function handleSquareClick(index: number): any {
    //         const nextSquares = value.slice();
    //         let currentPlayer: string = '';
    //         console.log({nextSquares});
    //         if (turn === 0){
    //             nextSquares[index] = Players.player1;
    //             setValue(nextSquares);
    //             setTurn(1);
    //             currentPlayer = Players.player1;
    //         } else {

    //         nextSquares[index] = Players.player2;
    //         setValue(nextSquares);
    //         setTurn(0);
    //         currentPlayer = Players.player2;
    //         // Players.winner = calculateWinner(value)
    //     }
    // }
    // useEffect(() => {
    //     calculateWinner(value);
    // }, [value]);

    return (
        <>
            {Players.winner ? <h2 className="winner">Winner: {Players.winner}</h2> : null}
            <div className="table-row">
                <button className="square" onClick={() => handleSquareClick(0, Players)} />  
                <button className="square" onClick={() => handleSquareClick(1, Players)} />
                <button className="square" onClick={() => handleSquareClick(2, Players)} />
            </div>
            <div className="table-row">
                <button className="square" onClick={() => handleSquareClick(3, Players)} />
                <button className="square" onClick={() => handleSquareClick(4, Players)} />
                <button className="square" onClick={() => handleSquareClick(5, Players)} />
            </div>
            <div className="table-row">
                <button className="square" onClick={() => handleSquareClick(6, Players)} />
                <button className="square" onClick={() => handleSquareClick(7, Players)} />
                <button className="square" onClick={() => handleSquareClick(8, Players)} />
            </div>
        </>
);
}