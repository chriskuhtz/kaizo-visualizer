import { Move } from '../../interfaces/Move';
import { PokeApiMovePill } from '../MovePill/PokeApiMovePill';
import './MoveSection.css';

export const MoveSection = ({ moves }: { moves: Move[] }): JSX.Element => {
	return (
		<div className="moveSection">
			<h2>Moves:</h2>
			<div className="movesGrid">
				{moves.map((m) => (
					<PokeApiMovePill name={m.name} />
				))}
			</div>
		</div>
	);
};
