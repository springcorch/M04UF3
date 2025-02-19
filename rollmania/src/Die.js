import './Die.css';
import {useState} from 'react';

function Die() {
	let [number, setNumber] = useState(1);
	function roll () {
		let min = 1;
		let max = 6;
		let rand = Math.floor(Math.random() * (max) + min);

		setNumber(rand);
	}

return (
    <button className="Die" onClick={roll}>
			<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
