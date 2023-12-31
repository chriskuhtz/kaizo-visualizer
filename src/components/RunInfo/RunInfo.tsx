import { useEffect, useState } from 'react';
import { getBaseStats } from '../../functions/getBaseStats';
import { Run } from '../../interfaces/Run';
import { MoveSection } from '../../shared/components/MoveSection/MoveSection';
import { NameAndSpriteSection } from '../../shared/components/NameAndSpriteSection/NameAndSpriteSection';
import { StatSection } from '../../shared/components/StatSection/StatSection';
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
			<NameAndSpriteSection
				dexId={run.dexId.toFixed()}
				name={run.name}
				level={run.level}
				nickname={run.nickname}
				owner={run.owner}
			/>
			<MoveSection moves={run.moves} />
			{baseStats && (
				<StatSection
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
