import { useMemo } from 'react';
import { runs } from '../../data/runs';
import { getFurthestRun } from '../../functions/getFurthestRun';
import { Run } from '../../interfaces/Run';
import { IconWithTag } from '../../shared/components/IconWithTag/IconWithTag';
import { StatToLevelChart } from '../StatToLevelChart/StatToLevelChart';
import { AllRuns } from '../allRuns/AllRuns';
import './Statistics.css';

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

	const runsThatLeftTheLab = useMemo(() => {
		return runs.filter((r) => r.level > 5);
	}, []);
	const runsThatBeatBrock = useMemo(() => {
		return runs.filter((r) => r.level > 22);
	}, []);

	return (
		<div className="statistics">
			<h1>Stats</h1>
			<AllRuns />
			<div>
				<h3>Runs that left the lab: {runsThatLeftTheLab.length}</h3>
				<div className="iconGroup">
					{runsThatLeftTheLab.map((r) => (
						<span onClick={() => setSelected(r)}>
							<IconWithTag
								key={r.filename}
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${r.dexId}.png
        `}
							/>
						</span>
					))}
				</div>
			</div>

			<div>
				<h3>Runs that beat brock: {runsThatBeatBrock.length}</h3>
				<div className="iconGroup">
					{runsThatBeatBrock.map((r) => (
						<span onClick={() => setSelected(r)}>
							<IconWithTag
								key={r.filename}
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${r.dexId}.png
        `}
							/>
						</span>
					))}
				</div>
			</div>

			<h3>
				Furthest Level:
				<span onClick={() => setSelected(furthestRun)}>
					<IconWithTag
						tag={furthestRun.level}
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${furthestRun.dexId}.png
        `}
					/>
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
