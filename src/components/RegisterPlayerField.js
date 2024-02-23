import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { useEffect } from 'react';

const RegisterPlayerField = (props) => {
    /**
     * Props passed to the RegisterPlayerField component.
     * 
     * - players: List of players.
     * - setPlayers: Function to update players.
     * - startGame: Function to begin the game.
     * - buttonText: Text for the button (optional, default is "Start Game").
     * - playerLowerLimit: Minimum number of players allowed (optional, default is 3).
     * - otherProps: Additional props.
     */

    const {
        players,
        setPlayers,
        startGame,
        buttonText,
        playerLowerLimit,
        ...otherProps
    } = props;

    const finalButtonText = buttonText ? buttonText : 'Start Game';
    const finalPlayerLowerLimit = playerLowerLimit ? playerLowerLimit : 3;
    const localStoredPlayers = JSON.parse(localStorage.getItem('players'));

    useEffect(() => {
        // Fetch players from localStorage when component mounts
        if (players.length === 0) {
            setPlayers(localStoredPlayers || [Array(finalPlayerLowerLimit).fill('')]);
        }
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    useEffect(() => {
        if (players.length === 0) { //In case this is runned before the players are set
            const validPlayers = players.filter(player => player.trim() !== '');
            localStorage.setItem('players', JSON.stringify(validPlayers));
        }
            
    }, [players]);

    function addPlayer() {
        const newPlayers = [...players, ''];
        setPlayers(newPlayers);
    }

    function deletePlayer(index) {
        const newPlayers = [...players];
        newPlayers.splice(index, 1);
        setPlayers(newPlayers);
    }

    function handlePlayerChange(index, value) {
        const newPlayers = [...players];
        newPlayers[index] = value;
        setPlayers(newPlayers);
    }

    function checkThenStartGame() {
        const filteredPlayers = players.filter((player) => player !== '');
        if (filteredPlayers.length < finalPlayerLowerLimit) {
            alert(`You need at least ${finalPlayerLowerLimit} players to start the game`);
            return;
        }
        startGame();
    }

    return (
        <div {...otherProps}>
            <div className="inputFieldContainer">
                {players.map((player, index) => (
                    <div key={index}>
                        <TextField
                            id={`outlined-basic-${index}`}
                            variant="outlined"
                            className="inputField"
                            value={player}
                            onChange={(e) => handlePlayerChange(index, e.target.value)}
                        />
                        <IconButton size="large" className="deleteButton" onClick={() => deletePlayer(index)}>
                            <DeleteForever />
                        </IconButton>
                    </div>
                ))}
                <IconButton size="large" className="addButton" onClick={addPlayer}>
                    <AddCircleOutline />
                </IconButton>
            </div>
            <Button variant="contained" size="large" onClick={checkThenStartGame}>
                {finalButtonText}
            </Button>
        </div>
    );
};

export default RegisterPlayerField;
