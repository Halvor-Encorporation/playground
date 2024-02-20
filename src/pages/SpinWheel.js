// ./pages/SpinWheel.js
import React, { useState, useEffect } from 'react';
import { WheelComponent } from '../components/WheelComponent.js';
import SpinWheelGame from '../classes/SpinWheelGame.js';
import { Button, TextField, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

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
        localStorage.setItem('players', JSON.stringify(players));
    }, [players]);

    const handleSpinFinished = (option) => {
        // Check if game is not null before proceeding
        if (game) {
            const currentPlayer = game.getCurrentPlayer();
            const nextPlayerExists = game.nextPlayer();
            const newCurrentPlayer = game.getCurrentPlayer();
            setResult(`Result: ${currentPlayer} - ${option}`);
            if (nextPlayerExists) {
                setCurrentPlayer(newCurrentPlayer);
            } else {
                setResult(`Game finished. Last result: ${newCurrentPlayer} - ${option}`);

                //TODO: Handle the game finished case, maybe by showing a message or disabling the wheel
            }
        } else {
            console.error("Game not initialized when spinning finished");
            // Handle the error case, maybe by disabling the wheel or showing a message
        }
    };
    

    const startGame = () => {
        if (players.length < 2) {
            alert('You need at least 2 players to start the game');
            return;
        }
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
            {players.map((player, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <TextField
                        variant="outlined"
                        value={player}
                        onChange={(event) => handlePlayerChange(index, event)}
                        style={{ marginRight: '10px' }}
                    />
                    <IconButton onClick={() => deletePlayer(index)}>
                        <DeleteForeverIcon />
                    </IconButton>
                </div>
            ))}
            <IconButton onClick={addPlayer} style={{ marginTop: '10px' }}>
                <AddCircleOutlineIcon />
            </IconButton>
            <br />
            <Button variant="contained" onClick={startGame} style={{ marginTop: '20px' }}>Start Game</Button>
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
                        InputProps={{ // Use the InputProps to apply styles directly to the input element
                            style: { minWidth: '500px' } // Adjust minWidth as needed
                        }}
                    />
                </div>
                <WheelComponent
                    segments={['Drink 1', 'Drink 2', 'Skip', 'Give 2']} // Define your segments here
                    segColors={['#FF0000', '#00FF00', '#0000FF', '#FFFF00']} // Define colors for each segment
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
