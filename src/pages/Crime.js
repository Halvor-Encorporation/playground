import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import DrinkingGame from '../classes/DrinkingGame';

const Crime = () => {
  const [players, setPlayers] = useState(JSON.parse(localStorage.getItem('players')) || ["Halvor","Martin","Edvard","Adrian"]);
  const [gameStarted, setGameStarted] = useState(JSON.parse(localStorage.getItem('gameStarted')) || false);
  const [gameState, setGameState] = useState(JSON.parse(localStorage.getItem('gameState')) || null);
  const [game, setGame] = useState(null);

  useEffect(() => {
    const savedGame = JSON.parse(localStorage.getItem('game'));
    if (savedGame) {
      const loadedGame = new DrinkingGame(savedGame.players);
      loadedGame.loadState(savedGame); // You need to implement loadState method in DrinkingGame class
      setGame(loadedGame);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players));
    localStorage.setItem('gameStarted', JSON.stringify(gameStarted));
    localStorage.setItem('gameState', JSON.stringify(gameState));
    if (game) {
      localStorage.setItem('game', JSON.stringify(game.saveState())); // You need to implement saveState method in DrinkingGame class
    }
  }, [players, gameStarted, gameState, game]);

  const exitGame = () => {
    // Reset game state
    setGameStarted(false);
    setGameState(null);
    setGame(null);
    // Clear saved game state from localStorage
    localStorage.removeItem('gameStarted');
    localStorage.removeItem('gameState');
    localStorage.removeItem('game');
  };

  function deletePlayer(index) {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  }

  function addPlayer() {
    const newPlayers = [...players, ""];
    setPlayers(newPlayers);
  }

  function startGame() {
    const filteredPlayers = players.filter(player => player !== "");
    if (filteredPlayers.length < 3) {
      alert("You need at least 3 players to start the game");
      return;
    }
    const newGame = new DrinkingGame(filteredPlayers);
    setGame(newGame);
    setGameStarted(true);
    const intialQuestion = newGame.getIntialQuestion();
    setGameState(intialQuestion);
  }

  function handlePlayerChange(index, value) {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  }

  function newQuestion() {
    if (game) {
      const next = game.nextQuestion();
      setGameState(next);
    }
  }

  function previousQuestion() {
    if (game) {
      const previous = game.previousQuestion();
      setGameState(previous);
    }
  }
  /*
  useEffect(() => {
    if (game) {
      newQuestion();
    }
  }, [game]);

  */

  return (
    <div className="App-body">
        <h1>Crime</h1>
    {gameStarted ? (
      <>
      <p>{gameState}</p>
      <div className="buttonContainer">
        <Button variant="contained" size="large" onClick={previousQuestion}>Forrige</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="contained" size="large" onClick={newQuestion}>Neste</Button>
        <br />
        <Button variant="contained" size="large" onClick={() => exitGame()}>Exit Game</Button>

      </div>
      </>
    ) : (
      <>
        <p>Velkommem til Crime!</p>
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
          <IconButton size="large" className="addButton" onClick={addPlayer} >
            <AddCircleOutline />
          </IconButton>
        </div>
        <Button variant="contained" size="large" onClick={startGame}>Lets do crime!</Button>
        </>
    )}
    </div>
  );
};

export default Crime;
