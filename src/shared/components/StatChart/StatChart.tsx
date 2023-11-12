import { useMemo } from 'react';
import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
} from 'recharts';
import { calculateStat } from '../../functions/calculateStat';
import { getBaseStatTotal } from '../../functions/getBaseStatTotal';
import { Stat, StatObject } from '../../interfaces/StatObject';
import { Nature } from '../../interfaces/Natures';

export type StatChartDataPoint = {
	statName: string;
	value: number;
};
export type StatChartData = StatChartDataPoint[];

export const StatChart = ({
	baseStats,
	ivs,
	evs,
	nature,
	level,
}: {
	baseStats: StatObject;
	ivs: StatObject;
	evs: StatObject;
	nature: Nature;
	level: number;
}): JSX.Element => {
	const bst = useMemo((): number | undefined => {
		if (baseStats) {
			return getBaseStatTotal(baseStats);
		}
	}, [baseStats]);

	const statChartData: StatChartData = useMemo(() => {
		return Object.entries(baseStats).map(([key, value]) => {
			return {
				statName: key,

				value: calculateStat(
					value,
					//@ts-expect-error yes, you can reference object keys by string
					ivs[key],
					//@ts-expect-error yes, you can reference object keys by string
					evs[key],
					nature,
					level,
					key as Stat
				),
			};
		});
	}, [baseStats, evs, ivs, level, nature]);

	return (
		<div>
			<h2>Stats:</h2>
			{bst && <h3>Total: {bst}</h3>}
			<h3>Nature: {nature}</h3>
			<RadarChart
				cx={300}
				cy={250}
				outerRadius={150}
				width={500}
				height={500}
				data={statChartData}
			>
				<PolarGrid />
				<PolarAngleAxis dataKey="statName" />
				<PolarRadiusAxis />
				<Radar
					dataKey="value"
					stroke="#8884d8"
					fill="#8884d8"
					fillOpacity={0.6}
				/>
			</RadarChart>
		</div>
	);
};
