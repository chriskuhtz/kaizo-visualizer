import { PokemonType } from '../../interfaces/PokemonType';

export const MovePill = ({
	name,
}: {
	name: string;
	maxPP: number;
	availablePP?: number;
	type: PokemonType;
	description?: string;
}) => {
	return <h4 key={name}>{name}</h4>;
};
