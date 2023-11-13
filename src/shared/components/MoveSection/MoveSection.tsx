import { Move } from '../../interfaces/Move';
import './MoveSection.css';

export const MoveSection = ({ moves }: { moves: Move[] }): JSX.Element => {
	return (
		<div>
			<h3>Moves:</h3>
			<div className="movesGrid">
				{moves.map((m) => (
					<h4 key={m.name}>{m.name}</h4>
				))}
			</div>
		</div>
	);
};
