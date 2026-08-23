import type { Players } from "../gameInterfaces";

 export default function calculateWinner(players: Players, value: string[]): string | undefined {
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
        if(value.every(square => square === ' ')) {
            console.log('No moves made yet.');
            return undefined;
        }else{
            for (let i = 0; i < wins.length; i++) {
                const [a, b, c] = wins[i];
                if(value[a] !== '' && value[a] !== ' ' && value[a] === value[b] && value[a] === value[c]) {
                    players.winner = value[a];
                    console.log('Winner found:', players.winner);
                    return players.winner;
                }
                else{
                    console.log('No winner yet...');
                }
            }
        }
    }