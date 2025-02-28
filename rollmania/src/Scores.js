//import './Scores.css';
import Scoreitems from './Scoreitems.js';

function Scores(props) {
  let score_list = [
		<Scoreitems player_name="Jacinto" player_score="20" key="0" />,
		<Scoreitems player_name="Benito" player_score="12" key="1" />,
		<Scoreitems player_name="Pablo" player_score="43" key="2" />,
		<Scoreitems player_name="Maria" player_score="56" key="3" />,
	];


	return (
    <section className="Scores">
			<h2>Scores</h2>

			<ol>
				{score_list}
			</ol>
    </section>
  );
}

export default Scores;
