import './Rollbutton.css';

function Rollbutton(props) {
	
return (
    <button className="Rollbutton" onClick={props.roll_func}>
			ROLL!!!
    </button>
  );
}

export default Rollbutton;
