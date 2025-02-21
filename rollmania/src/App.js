import './App.css';
import Dice from './Dice.js';
import Title from './Title.js';
import Rollbutton from './Rollbutton.js';

function App() {
	function roll_dice(){
		alert("Wiiiiii!");
	}
  return (
		<div className="rollmania">
			<Title titulo="~*ROLLMANIA*~"/>
    	<main className="App">
				<Dice cantidad="3" />
    	</main>
				<Rollbutton roll_func={roll_dice}/>
		</div>
  );
}

export default App;
