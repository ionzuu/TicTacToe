import type {Players} from '../gameInterfaces';
import { type JSX } from 'react';
import useSquareClick from '../hooks/useSquareClick';
    
    export default function Board({Players}: { Players: Players }): JSX.Element {
        console.log('Board component rendered with Players:', Players);
        const {winner, value, handleSquareClick, handleResetGame} = useSquareClick(Players);
        if (winner && winner !== '') {
            return (
                    <div className="game" onClick={() => handleResetGame()}><h2 className="winner">Winner: {Players.winner}</h2></div>
            );
        }
        else if (Players.winner === 'Draw') {
            return (
                <div className="game" onClick={() => handleResetGame()}><h2 className="winner">Draw!</h2></div>
            );
        }
        else {
            return (
                <>
            <div className="table-row">
                <button className="square" onClick={() => handleSquareClick(0)}>{value[0]}</button>  
                <button className="square" onClick={() => handleSquareClick(1)}>{value[1]}</button>
                <button className="square" onClick={() => handleSquareClick(2)}>{value[2]}</button>
            </div>
            <div className="table-row">
                <button className="square" onClick={() => handleSquareClick(3)}>{value[3]}</button>
                <button className="square" onClick={() => handleSquareClick(4)}>{value[4]}</button>
                <button className="square" onClick={() => handleSquareClick(5)}>{value[5]}</button>
            </div>
            <div className="table-row">
                <button className="square" onClick={() => handleSquareClick(6)}>{value[6]}</button>
                <button className="square" onClick={() => handleSquareClick(7)}>{value[7]}</button>
                <button className="square" onClick={() => handleSquareClick(8)}>{value[8]}</button>
            </div>
        </>
);
}
}