import { useEffect, useState } from 'react';
import {
	CartesianGrid,
	Cell,
	Scatter,
	ScatterChart,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { runs } from '../../data/runs';
import { getBaseStats } from '../../functions/getBaseStats';
import { getBaseStatTotal } from '../../shared/functions/getBaseStatTotal';

export interface DataPoint {
	x: number;
	y: number;
	name: string;
}

//@ts-expect-error untyped props
const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip" style={{ pointerEvents: 'all' }}>
				<p onClick={() => console.log('yaya')} className="desc">
					{payload[0].payload.name}
				</p>
			</div>
		);
	}

	return null;
};

export const BstToLevelChart = () => {
	const [data, setData] = useState<DataPoint[] | undefined>();

	useEffect(() => {
		if (data === undefined) {
			const getData = async () => {
				const res = await Promise.all(
					runs.map(async (r) => {
						const datapoint: DataPoint = { y: 0, x: r.level, name: r.name };
						const baseStats = await getBaseStats(r);
						if (baseStats) {
							datapoint.y = getBaseStatTotal(baseStats);
						}
						return datapoint;
					})
				);
				setData(res);
			};
			getData();
		}
	}, [data]);

	return (
		<>
			{' '}
			<h3>Level Progress by BST:</h3>
			{data && (
				<ScatterChart
					width={400}
					height={400}
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20,
					}}
				>
					<CartesianGrid />
					<XAxis type="number" dataKey="x" name="Level" />
					<YAxis type="number" dataKey="y" name="BST" />
					<Tooltip
						cursor={{ strokeDasharray: '3 3' }}
						//@ts-expect-error inferred props
						content={<CustomTooltip />}
					/>
					<Scatter data={data} fill="#8884d8">
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={'red'} />
						))}
					</Scatter>
				</ScatterChart>
			)}
		</>
	);
};
