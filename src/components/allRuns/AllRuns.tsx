import { useMemo } from 'react';
import { runs } from '../../data/runs';
import { IconWithTag } from '../../shared/components/IconWithTag/IconWithTag';

export const AllRuns = (): JSX.Element => {
	const differentPokemon = useMemo((): Record<string, number> => {
		const res: Record<string, number> = {};

		runs.forEach((r) => {
			if (!res[r.dexId]) {
				res[r.dexId] = 1;
			} else res[r.dexId] += 1;
		});

		return res;
	}, []);
	return (
		<div>
			<h3>Number of Runs: {runs.length}</h3>
			<div className="iconGroup">
				{Object.entries(differentPokemon).map(([dexId, amount]) => (
					<IconWithTag
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexId}.png
        `}
						key={dexId}
						tag={amount.toString()}
					/>
				))}
			</div>
		</div>
	);
};
