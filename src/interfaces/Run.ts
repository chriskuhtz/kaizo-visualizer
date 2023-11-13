import { Move } from '../shared/interfaces/Move';
import { Nature } from '../shared/interfaces/Natures';
import { StatObject } from '../shared/interfaces/StatObject';

export interface Run {
	name: string;
	dexId: number;
	filename: string;
	nickname: string;
	level: number;
	nature: Nature;
	ivs: StatObject;
	evs: StatObject;
	moves: Move[];
	owner: string;
}
