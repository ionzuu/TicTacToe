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