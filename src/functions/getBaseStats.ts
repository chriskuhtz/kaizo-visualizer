import { Run } from '../interfaces/Run';
import { StatObject } from '../shared/interfaces/StatObject';

export const getBaseStats = async (
	run: Run
): Promise<StatObject | undefined> => {
	const filePath = `../../data/logs/${run.filename.slice(6, -4)}.gba.log`;

	//const res = await fetch(filePath).then((res) => console.log(res));
	const file = await fetch(filePath).then((x) => x.text());

	const lines = file.split('\n');

	const searchString = `${run.dexId}|${run.name.toUpperCase()}`;
	const correctLine = lines.find((l) => l.includes(searchString));

	if (correctLine) {
		const splitLine = correctLine.split('|');
		const bstats = {
			hp: parseInt(splitLine[3].trim()),
			attack: parseInt(splitLine[4].trim()),
			defence: parseInt(splitLine[5].trim()),
			spatk: parseInt(splitLine[6].trim()),
			spdef: parseInt(splitLine[7].trim()),
			speed: parseInt(splitLine[8].trim()),
		};

		return bstats;
	}

	return undefined;
};
