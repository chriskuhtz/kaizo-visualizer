import { useMemo } from 'react';
import { runs } from '../../data/runs';
import { getFurthestRun } from '../../functions/getFurthestRun';
import { Run } from '../../interfaces/Run';
import { StatToLevelChart } from '../StatToLevelChart/StatToLevelChart';

export const Statistics = ({
	setSelected,
}: {
	setSelected: (x: Run | undefined) => void;
}): JSX.Element => {
	const furthestRun = useMemo(() => {
		return getFurthestRun();
	}, []);

	const avgLevel = useMemo(() => {
		return Math.floor([...runs].reduce((a, b) => a + b.level, 0) / runs.length);
	}, []);

	return (
		<div>
			<h1>Stats</h1>
			<h3>Number of Runs: {runs.length}</h3>
			<h3>Runs that left the lab: {runs.filter((r) => r.level > 5).length}</h3>
			<h3>Runs that beat brock: {runs.filter((r) => r.level > 22).length}</h3>
			<h3>
				Furthest Level: {furthestRun.level}
				<span onClick={() => setSelected(furthestRun)}>
					{' '}
					({furthestRun.name})
				</span>
			</h3>

			<h3>Avg. Level: {avgLevel}</h3>
			<StatToLevelChart
				onTooltipClick={(name) =>
					setSelected(runs.find((r) => r.filename === name))
				}
			/>
		</div>
	);
};
