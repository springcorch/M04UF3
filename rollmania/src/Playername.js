import './Playername.css';
import { useState } from 'react';

function Playername(props) {
	let [player_name, setPlayerName] = useState("");
	console.log(player_name);	
  return (
		
		//if(player_name = ""){
    <form>
			<p>
				<input type="text" name={setPlayerName} placeholder="Nombre del jugador/a" /><button>Guardar</button>
			</p>
		</form>
		//} else {
			//<h2> {player_name} </h2>
		//}
  );
}

export default Playername;
