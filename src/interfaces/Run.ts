import { StatObject } from '../shared/interfaces/StatObject';

export interface Run {
	name: string;
	dexId: number;
	filename: string;
	nickname: string;
	level: number;
	nature: string;
	ivs: StatObject;
	evs: StatObject;
	moves: { pp: number; id: number; name: string }[];
	owner: string;
}
