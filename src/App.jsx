import { useState, useEffect, useCallback } from 'react';
import { wordsList } from './data/words';

import './App.css'

import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickedWordCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category)
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word)

    return {word, category}
  }



  const startGame = () => {
    const {word, category} = pickedWordCategory();

    console.log(word, category);

    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);

    setGameStage(stages[1].name);
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <><div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
    </>
  )
}

export default App
