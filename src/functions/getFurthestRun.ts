import { runs } from '../data/runs';
import { Run } from '../interfaces/Run';

export const getFurthestRun = (): Run => {
	return [...runs].sort((a, b) => b.level - a.level)[0];
};
