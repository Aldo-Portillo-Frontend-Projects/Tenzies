import React from 'react';
import './App.css';
import Die from './Die';

function App() {


/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
 */

  const [dice, setDice] = React.useState(allNewDice())

  function randomDie() {
    return Math.floor(Math.random() * 6 + 1);
  }

  const diceRender = dice.map(die => {
    return <Die value={die} />
  })

  function allNewDice() {
    let newDiceArr = [];

    for (let i = 0; i < 10; i++){
      newDiceArr.push(randomDie())
    }

    return newDiceArr
  }

  function rollDice() {
    setDice(allNewDice)
  }

  return (
    <div className="game-board">
      {diceRender}
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default App;
