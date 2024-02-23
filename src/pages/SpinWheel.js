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
    const [players, setPlayers] = useState([]);
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
    }, [gameStarted]);

    
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

        setPlayers(players);
        setGameStarted(true);
    };

        
    if (!gameStarted || !game) return (
        <div className="App-body">
            <h1>Spin The Wheel Game</h1>
            <RegisterPlayerField players={players} setPlayers={setPlayers} startGame={startGame} playerLowerLimit = {2} />
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
                    segments={['Drink 1', 'Give 1', 'Drink 2', 'Give 1', 'Give 1', 'Drink 2', 'Give 1', 'Give 2', 'Drink 4', 'Skip', 'Drink 5', 'Drink 3', 'Drink 1', 'Drink 2', 'Give 2', 'Drink 1', 'Drink 3', 'Shot', 'Drink 1']}
                    segColors={['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FF4500', '#FFD700', '#FF69B4', '#8A2BE2', '#00FF7F', '#FF1493', '#FF6347', '#FF00FF', '#FF0000', '#00FF00', '#0000FF']}
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
