import './App.css';
import Dice from './Dice.js';
import Title from './Title.js';
import Rollbutton from './Rollbutton.js';
import Scores from './Scores.js';
import Playername from './Playername.js';
import { useState, useRef } from 'react';

function App() {
	
	const [roll, setRoll] = useState(false);
	const player_name = useRef("");
	const player_score = useRef(0);


	function roll_dice(){
		setRoll(true);
	}

	function setPlayerName(name){
		player_name.current = name;
		console.log("El nombre del jugador es: "+name);
	}
	
	function setPlayerScore(total){
		player_score.current = total;
		console.log("Puntuación total: "+total);
	}

  return (
		<div className="rollmania">
			<Title titulo="~*ROLLMANIA*~" />
			<Playername onPlayerNameChanged={setPlayerName}/>
    	<main className="App">
				<Dice cantidad="3" roll={roll} onTotal={setPlayerScore}/>
    	</main>
				<Rollbutton roll_func={roll_dice}/>
				<Scores />
		</div>
  );
}

export default App;
