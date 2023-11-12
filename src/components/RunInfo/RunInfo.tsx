import { useEffect, useState } from 'react';
import { getBaseStats } from '../../functions/getBaseStats';
import { Run } from '../../interfaces/Run';
import { StatChart } from '../../shared/components/StatChart/StatChart';
import { StatObject } from '../../shared/interfaces/StatObject';

export const RunInfo = ({ run }: { run: Run }): JSX.Element => {
	const [baseStats, setBaseStats] = useState<StatObject | undefined>();

	useEffect(() => setBaseStats(undefined), [run]);

	useEffect(() => {
		if (baseStats === undefined) {
			const getStats = async () => {
				const res = await getBaseStats(run);
				if (res) {
					setBaseStats(res);
				}
			};
			getStats();
		}
	}, [baseStats, run]);

	return (
		<div>
			<h1>
				{run.name}{' '}
				{run.nickname !== run.name.toUpperCase() && (
					<span>: {run.nickname}</span>
				)}
			</h1>
			<h3>Trainer: {run.owner}</h3>
			<h3>Level: {run.level}</h3>

			<h3>Nature: {run.nature}</h3>
			<div>
				<h3>Moves:</h3>
				{run.moves.map((m) => (
					<h4 key={m.name}>{m.name}</h4>
				))}
			</div>
			{baseStats && (
				<StatChart
					ivs={run.ivs}
					evs={run.evs}
					nature={run.nature}
					baseStats={baseStats}
					level={run.level}
				/>
			)}
		</div>
	);
};
