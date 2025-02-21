import './Die.css';
import {useState} from 'react';

function Die(props) {
	let [number, setNumber] = useState("-");
	let [roll, setRoll] = useState(false);
	
	function getRandom() {
		let min = 1;
		let max = 6;
		return Math.floor(Math.random() * (max) + min);
	}

	function setRandom(){
		let r = getRandom();
		setNumber(r);		
	}
	
	if(props.roll){
		number = getRandom();
	}

return (
    <button className="Die" onClick={setRandom}>
			<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
