import { Move } from '../../interfaces/Move';
import './MoveSection.css';

export const MoveSection = ({ moves }: { moves: Move[] }): JSX.Element => {
	return (
		<div className="moveSection">
			<h2>Moves:</h2>
			<div className="movesGrid">
				{moves.map((m) => (
					<h4 key={m.name}>{m.name}</h4>
				))}
			</div>
		</div>
	);
};
