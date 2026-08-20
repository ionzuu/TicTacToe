import { type JSX } from "react";
import Board from "./Board";
import { type Players} from "../gameInterfaces";


export default function Game(): JSX.Element {
    const players: Players = {
        player1: 'X',
        player2: 'O',
        winner: '',
    };
    return (
        players.winner ? (
            <div className="game">
                <h2 className="winner">Winner: {players.winner}</h2>
            </div>
        ) : (
        <div className="game">
            <Board Players={players} />
        </div>
    ))
}