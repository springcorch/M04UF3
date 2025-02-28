import './Playername.css';
import { useState, useEffect } from 'react';

function Playername(props) {
	let [player_name, setPlayerName] = useState("");
	let [show_name, setShowName] = useState(false);

	useEffect( () => {
		if(show_name != "")
			props.onPlayerNameChanged(player_name);
	});

	function update_name(event){
		console.log(event.target.value);
		setPlayerName (event.target.value);
	}

	function write_name(){
		console.log("Nomber: "+player_name);
		let pn_tmp = player_name.trim();
		if (pn_tmp.length < 3 || pn_tmp.length > 12)
			return;

		setShowName(true);
	}
	if (!show_name){
  	return (	
    	<form>
				<p>
					<input type="text" name="player_name"
					placeholder="Nombre del jugador/a" value={player_name}
					onChange={update_name} />
					<button onClick={write_name}>Guardar</button>
				</p>
			</form>
 		);
	}
	else{
		return(
			<h2> Nombre: {player_name}</h2>
		);
	}
}
export default Playername;
