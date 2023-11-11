import { useMemo } from 'react';
import { getBaseStatTotal } from '../../functions/getBaseStatTotal';
import { StatObject } from '../../interfaces/StatObject';

export const StatChart = ({
	baseStats,
	ivs,
	evs,
	nature,
}: {
	baseStats: StatObject;
	ivs: StatObject;
	evs: StatObject;
	nature: string;
}): JSX.Element => {
	const bst = useMemo((): number | undefined => {
		if (baseStats) {
			return getBaseStatTotal(baseStats);
		}
	}, [baseStats]);

	return (
		<div>
			{bst && <h3>Total: {bst}</h3>}
			<h3>Nature: {nature}</h3>

			<table>
				<thead>
					<tr>
						<th></th>
						<th>HP:</th>
						<th>ATK:</th>
						<th>DEF:</th>
						<th>SPATK:</th>
						<th>SPDEF:</th>
						<th>SPEED:</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>IVs:</th>
						<th>{ivs.hp}</th>
						<th>{ivs.attack}</th>
						<th>{ivs.defence}</th>
						<th>{ivs.spatk}</th>
						<th>{ivs.spdef}</th>
						<th>{ivs.speed}</th>
					</tr>
					<tr>
						<th>EVs:</th>
						<th>{evs.hp}</th>
						<th>{evs.attack}</th>
						<th>{evs.defence}</th>
						<th>{evs.spatk}</th>
						<th>{evs.spdef}</th>
						<th>{evs.speed}</th>
					</tr>
					{baseStats && (
						<tr>
							<th>Base:</th>
							<th>{baseStats.hp}</th>
							<th>{baseStats.attack}</th>
							<th>{baseStats.defence}</th>
							<th>{baseStats.spatk}</th>
							<th>{baseStats.spdef}</th>
							<th>{baseStats.speed}</th>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
