// ./pages/SpinWheel.js
import React, { useState, useEffect } from 'react';
import { WheelComponent } from '../components/WheelComponent.js';
import SpinWheelGame from '../classes/SpinWheelGame.js';
import { Button, TextField, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import RegisterPlayerField from '../components/RegisterPlayerField.js';
const SpinWheel = () => {
    const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players')) || []);
    const [game, setGame] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const [result, setResult] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        if (gameStarted) {
            const newGame = new SpinWheelGame(players);
            setGame(newGame);
            setCurrentPlayer(newGame.getCurrentPlayer());
        }
    }, [gameStarted, players]);

    useEffect(() => {
        const validPlayers = players.filter(player => player.trim() !== '');
        localStorage.setItem('players', JSON.stringify(validPlayers));
    }, [players]);

    const handleSpinFinished = (option) => {
        // Check if game is not null before proceeding
        if (game) {
            const currentPlayer = game.getCurrentPlayer();
            const nextPlayerExists = game.nextPlayer();
            const newCurrentPlayer = game.getCurrentPlayer();
            setResult(`${currentPlayer} - ${option}`);
            if (nextPlayerExists) {
                setCurrentPlayer(newCurrentPlayer);
            } else {
                setCurrentPlayer('Game Finished');
                setResult(`${newCurrentPlayer} - ${option}`);

                //TODO: Handle the game finished case, maybe by showing a message or disabling the wheel
            }
        } else {
            console.error("Game not initialized when spinning finished");
            // Handle the error case, maybe by disabling the wheel or showing a message
        }
    };
    

    const startGame = () => {
        const validPlayers = players.filter(player => player.trim() !== '');
        if (players.length < 2) {
            alert('You need at least 2 players to start the game');
            return;
        }
        setPlayers(validPlayers);
        setGameStarted(true);
    };

    const addPlayer = () => {
        const newPlayer = '';
        setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
    };

    const deletePlayer = (index) => {
        setPlayers(prevPlayers => prevPlayers.filter((_, i) => i !== index));
    }

    const handlePlayerChange = (index, event) => {
        setPlayers(prevPlayers => prevPlayers.map((player, i) => i === index ? event.target.value : player));
    }
        
    if (!gameStarted || !game) return (
        <div className="App-body">
            <h1>Spin The Wheel Game</h1>
            <RegisterPlayerField players={players} setPlayers={setPlayers} startGame={startGame} />
        </div>
    );

    return (
        <div className="App-body">
            <>
                <div>
                    <h2>{currentPlayer}</h2>
                    <TextField
                        id="result"
                        label="Result"
                        value={result}
                        variant="outlined"
                        disabled
                        InputProps={{
                            style: {
                                width: '100%', // Set the initial width to 100% of the container
                                '@media (min-width: 600px)': {
                                    minWidth: '500px', // Adjust minWidth for screens wider than 600px
                                },
                            },
                        }}
                    />
                </div>
                <WheelComponent
                    segments={['Drink 1', 'Drink 2', 'Skip', 'Give 2', 'Drink 3', 'Drink 4', 'Give 1', 'Drink 5', 'Shot']}
                    segColors={['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FF4500']}
                    onFinished={handleSpinFinished}
                    disabled={game && game.gameFinished()}
                />
                {game && game.gameFinished() && (
                    <Button variant="contained" onClick={() => navigate('/')}>Go Home</Button>
                )}
            </>
        </div>
    );
};

export default SpinWheel;
