import './Rollbutton.css';
import { useState, useEffect } from 'react';

function Rollbutton(props) {

	let [count, setCount] = useState (5);
	useEffect(() => {
		setTimeout(() => {
			setCount(count - 1);
		}, 1000);
	});

	//useEffect( () => alert(count) );

return (

    <button 
		className="Rollbutton" 
		onClick={props.roll_func}
		disabled={count > 0 ? "true" : ""}
		>
			{count > 0 ? count : "ROLL!!!"}
    </button>
  );
}

export default Rollbutton;
