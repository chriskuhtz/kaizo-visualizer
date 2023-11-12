import { Nature } from '../interfaces/Natures';
import { Stat } from '../interfaces/StatObject';
import { determineNatureFactor } from './determineNatureFactor';

export const calculateStat = (
	base: number,
	iv: number,
	ev: number,
	nature: Nature,
	level: number,
	stat: Stat
): number => {
	const bonus = stat === 'hp' ? level + 10 : 5;

	const denominator = 100;
	const numerator = 2 * (base + iv + ev / 4) * level;
	const natureFactor = determineNatureFactor(nature, stat);

	return (numerator / denominator + bonus) * natureFactor;
};
