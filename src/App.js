import './App.css';
import Die from './Die';

function App() {


  return (
    <div className="game-board">
      <Die value="1"/>
      <button>Roll Dice</button>
    </div>
  );
}

export default App;
