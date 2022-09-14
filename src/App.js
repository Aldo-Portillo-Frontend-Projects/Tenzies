import './App.css';
import Die from './Die';

function App() {

  function randomDie() {
    return Math.floor(Math.random() * 6 + 1);
  }

  function allNewDice() {
    let newDiceArr = [];

    for (let i = 0; i < 10; i++){
      newDiceArr.push(randomDie())
    }

    return newDiceArr
  }

  console.log(allNewDice())

  return (
    <div className="game-board">
      <Die value="1"/>
      <button>Roll Dice</button>
    </div>
  );
}

export default App;
