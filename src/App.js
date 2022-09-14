import React from 'react';
import './App.css';
import Die from './Die';

function App() {


  /**
 Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
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

  console.log(dice)

  return (
    <div className="game-board">
      {diceRender}
      <button>Roll Dice</button>
    </div>
  );
}

export default App;
