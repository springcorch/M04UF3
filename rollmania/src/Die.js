import './Die.css';
import {useState, useEffect, useRef} from 'react';

function Die(props) {
	const [number, setNumber] = useState("-");
	const randomized = useRef(false);
	
	useEffect(() => {
		if(number != "-")
			props.onResult(number);
	});

	function getRandom() {
		let min = 1;
		let max = 6;
		return Math.floor(Math.random() * (max) + min);
	}

	function setRandom(){
		let r = getRandom();
		setNumber(r);	
	}
	
	if(props.roll && !randomized.current){
		setRandom();
		randomized.current = true;
	}

return (
    <button className="Die" onClick={setRandom}>
			<p className="DieNumber">{number}</p>
    </button>
  );
}

export default Die;
