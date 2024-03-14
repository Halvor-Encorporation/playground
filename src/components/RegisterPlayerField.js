import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { useRef, useEffect } from 'react';

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
    const localStoredPlayers = [""]//JSON.parse(localStorage.getItem('players'));

    const inputRefs = useRef([]);

    useEffect(() => {
        // Fetch players from localStorage when component mounts
        //console.log(players)
        //console.log(localStoredPlayers)
        if (players.length !== 0) return;

        /*
        if (localStoredPlayers === undefined || localStoredPlayers.length === 0) {
            setPlayers(Array(finalPlayerLowerLimit).fill(''));
            return;
        }
        */

        if (localStoredPlayers.length < finalPlayerLowerLimit) {
            setPlayers(Array(finalPlayerLowerLimit).fill(''));
            return;
        }

        setPlayers(localStoredPlayers);
        
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    useEffect(() => {
        if (players.length !== 0) { //In case this is runned before the players are set
            const validPlayers = players.filter(player => player.trim() !== '');
            localStorage.setItem('players', JSON.stringify(validPlayers));
        }
            
    }, [players]);

    function addPlayer() {
        const newPlayers = [...players, ''];
        setPlayers(newPlayers);
        
        setTimeout(() => {
            if (inputRefs.current[newPlayers.length - 1]) {
                inputRefs.current[newPlayers.length - 1].focus();
            }
        }, 100);
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

    function handleKeyPress(e, index) {
        if (e.key === 'Enter') {
            if (index === players.length - 1) {
                // Add new player if it's the last input field
                addPlayer();
            } else {
                // Move to the next input field
                if (inputRefs.current[index + 1]) {
                    inputRefs.current[index + 1].focus();
                }
            }
            e.preventDefault(); // Prevent the default action
        }
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
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            // Assign a ref to each input field
                            inputRef={el => inputRefs.current[index] = el}
                        />
                        <IconButton
                            size="large"
                            className="deleteButton"
                            onClick={() => deletePlayer(index)}
                            style={{ visibility: players.length > finalPlayerLowerLimit ? 'visible' : 'hidden' }}
                        >
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
