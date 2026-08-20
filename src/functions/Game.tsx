import { type JSX } from "react";
import Board from "./Board";
import calculateWinner from "../hooks/calculateWinner";
import type { Players } from "../gameInterfaces";


export default function Game(): JSX.Element {
    const players: Players = {
        player1: 'X',
        player2: 'O',
        winner: '',
    };
    if (players.winner === '') {
        players.winner = calculateWinner(players);
    }else{
        
    }
    return (
        players.winner !== '' ? (
            <div className="game"><h2 className="winner">Winner: {players.winner}</h2></div>
        ) : (
        <div className="game"><Board Players={players} /></div>
    ))
}