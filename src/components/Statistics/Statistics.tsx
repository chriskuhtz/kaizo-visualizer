import { useMemo } from 'react';
import { runs } from '../../data/runs';
import { Run } from '../../interfaces/Run';

const getFurthestRun = (): Run => {
	return [...runs].sort((a, b) => b.level - a.level)[0];
};
export const Statistics = ({
	setSelected,
}: {
	setSelected: (x: Run) => void;
}): JSX.Element => {
	const furthestRun = useMemo(() => {
		return getFurthestRun();
	}, []);
	const medianLevel = useMemo(() => {
		return [...runs].sort((a, b) => b.level - a.level)[runs.length / 2].level;
	}, []);
	const avgLevel = useMemo(() => {
		return Math.floor([...runs].reduce((a, b) => a + b.level, 0) / runs.length);
	}, []);
	return (
		<div>
			<h1>Stats</h1>
			<h3>Number of Runs: {runs.length}</h3>
			<h3>
				Furthest Level: {furthestRun.level}
				<span onClick={() => setSelected(furthestRun)}>
					{' '}
					({furthestRun.name})
				</span>
			</h3>
			<h3>Median Level: {medianLevel}</h3>
			<h3>Avg. Level: {avgLevel}</h3>
		</div>
	);
};
