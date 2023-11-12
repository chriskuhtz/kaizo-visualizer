import { Run } from '../interfaces/Run';
export const runs: Run[] = [
	{
		name: 'Drowzee',
		dexId: 96,
		filename: 'MyBoy/kaizo0.sav',
		nickname: 'DROWZEE',
		level: 5,
		nature: 'sassy',
		ivs: { spatk: 27, defence: 1, hp: 6, spdef: 15, attack: 16, speed: 8 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 10, id: 304, name: 'Hyper Voice' },
			{ pp: 15, id: 9, name: 'Thunder Punch' },
			{ pp: 35, id: 33, name: 'Tackle' },
			{ pp: 15, id: 247, name: 'Shadow Ball' },
		],
		owner: 'FIRE',
	},
	{
		name: 'Flygon',
		dexId: 330,
		filename: 'MyBoy/kaizo1.sav',
		nickname: 'FLYGON',
		level: 6,
		nature: 'hasty',
		ivs: { spatk: 5, defence: 5, hp: 26, spdef: 8, attack: 7, speed: 31 },
		evs: { spatk: 0, defence: 0, hp: 1, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 35, id: 10, name: 'Scratch' },
			{ pp: 15, id: 28, name: 'Sand Attack' },
			{ pp: 15, id: 344, name: 'Volt Tackle' },
			{ pp: 5, id: 315, name: 'Overheat' },
		],
		owner: 'HIRO',
	},
	{
		name: 'Whismur',
		dexId: 293,
		filename: 'MyBoy/kaizo10.sav',
		nickname: 'WHISMUR',
		level: 5,
		nature: 'rash',
		ivs: { spatk: 9, defence: 29, hp: 23, spdef: 5, attack: 13, speed: 8 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 10, id: 87, name: 'Thunder' },
			{ pp: 30, id: 137, name: 'Glare' },
			{ pp: 5, id: 284, name: 'Eruption' },
			{ pp: 20, id: 107, name: 'Minimize' },
		],
		owner: 'JAK',
	},
	{
		name: 'Bayleef',
		dexId: 153,
		filename: 'MyBoy/kaizo100.sav',
		nickname: 'BAYLEEF',
		level: 5,
		nature: 'gentle',
		ivs: { spatk: 0, defence: 1, hp: 30, spdef: 27, attack: 6, speed: 15 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 30, id: 116, name: 'Focus Energy' },
			{ pp: 15, id: 348, name: 'Leaf Blade' },
			{ pp: 5, id: 90, name: 'Fissure' },
			{ pp: 15, id: 302, name: 'Needle Arm' },
		],
		owner: 'RALPH',
	},
	{
		name: 'Smoochum',
		dexId: 238,
		filename: 'MyBoy/kaizo101.sav',
		nickname: 'SMOOCHUM',
		level: 5,
		nature: 'jolly',
		ivs: { spatk: 21, defence: 12, hp: 22, spdef: 17, attack: 26, speed: 27 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 20, id: 125, name: 'Bone Club' },
			{ pp: 10, id: 304, name: 'Hyper Voice' },
			{ pp: 20, id: 41, name: 'Twineedle' },
			{ pp: 15, id: 305, name: 'Poison Fang' },
		],
		owner: 'RALPH',
	},
	{
		name: 'Manectric',
		dexId: 310,
		filename: 'MyBoy/kaizo102.sav',
		nickname: 'MANECTRIC',
		level: 8,
		nature: 'careful',
		ivs: { spatk: 4, defence: 1, hp: 4, spdef: 24, attack: 12, speed: 15 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 2 },
		moves: [
			{ pp: 5, id: 340, name: 'Bounce' },
			{ pp: 15, id: 334, name: 'Iron Defense' },
			{ pp: 20, id: 332, name: 'Aerial Ace' },
			{ pp: 40, id: 193, name: 'Foresight' },
		],
		owner: 'RALPH',
	},
	{
		name: 'Treecko',
		dexId: 252,
		filename: 'MyBoy/kaizo103.sav',
		nickname: 'TREECKO',
		level: 5,
		nature: 'hasty',
		ivs: { spatk: 30, defence: 19, hp: 31, spdef: 13, attack: 13, speed: 18 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 30, id: 331, name: 'Bullet Seed' },
			{ pp: 10, id: 121, name: 'Egg Bomb' },
			{ pp: 10, id: 118, name: 'Metronome' },
			{ pp: 10, id: 87, name: 'Thunder' },
		],
		owner: 'GEKI',
	},
	{
		name: 'Azurill',
		dexId: 298,
		filename: 'MyBoy/kaizo104.sav',
		nickname: 'AZURILL',
		level: 5,
		nature: 'modest',
		ivs: { spatk: 8, defence: 11, hp: 5, spdef: 31, attack: 12, speed: 10 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 10, id: 167, name: 'Triple Kick' },
			{ pp: 15, id: 38, name: 'Double-Edge' },
			{ pp: 10, id: 157, name: 'Rock Slide' },
			{ pp: 15, id: 29, name: 'Headbutt' },
		],
		owner: 'GEKI',
	},
	{
		name: 'Misdreavus',
		dexId: 200,
		filename: 'MyBoy/kaizo105.sav',
		nickname: 'MISDREAVUS',
		level: 22,
		nature: 'impish',
		ivs: { spatk: 22, defence: 10, hp: 6, spdef: 8, attack: 19, speed: 27 },
		evs: { spatk: 7, defence: 2, hp: 10, spdef: 6, attack: 11, speed: 6 },
		moves: [
			{ pp: 10, id: 82, name: 'Dragon Rage' },
			{ pp: 25, id: 342, name: 'Poison Tail' },
			{ pp: 5, id: 284, name: 'Eruption' },
			{ pp: 10, id: 188, name: 'Sludge Bomb' },
		],
		owner: 'KARL',
	},
	{
		name: 'Scizor',
		dexId: 212,
		filename: 'MyBoy/kaizo106.sav',
		nickname: 'SCIZOR',
		level: 11,
		nature: 'lax',
		ivs: { spatk: 16, defence: 1, hp: 31, spdef: 28, attack: 26, speed: 2 },
		evs: { spatk: 2, defence: 0, hp: 0, spdef: 0, attack: 1, speed: 0 },
		moves: [
			{ pp: 10, id: 157, name: 'Rock Slide' },
			{ pp: 10, id: 299, name: 'Blaze Kick' },
			{ pp: 20, id: 49, name: 'Sonic Boom' },
			{ pp: 35, id: 77, name: 'Poison Powder' },
		],
		owner: 'MAX',
	},
	{
		name: 'Skitty',
		dexId: 300,
		filename: 'MyBoy/kaizo107.sav',
		nickname: 'SKITTY',
		level: 5,
		nature: 'naive',
		ivs: { spatk: 22, defence: 30, hp: 20, spdef: 10, attack: 13, speed: 13 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 20, id: 205, name: 'Rollout' },
			{ pp: 15, id: 341, name: 'Mud Shot' },
			{ pp: 15, id: 280, name: 'Brick Break' },
			{ pp: 10, id: 168, name: 'Thief' },
		],
		owner: 'JONN',
	},
	{
		name: 'Chinchou',
		dexId: 170,
		filename: 'MyBoy/kaizo108.sav',
		nickname: 'CHINCHOU',
		level: 5,
		nature: 'quirky',
		ivs: { spatk: 31, defence: 9, hp: 10, spdef: 4, attack: 1, speed: 4 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 30, id: 116, name: 'Focus Energy' },
			{ pp: 35, id: 10, name: 'Scratch' },
			{ pp: 10, id: 304, name: 'Hyper Voice' },
			{ pp: 30, id: 113, name: 'Light Screen' },
		],
		owner: 'FIRE',
	},
	{
		name: 'Makuhita',
		dexId: 296,
		filename: 'MyBoy/kaizo109.sav',
		nickname: 'MAKUHITA',
		level: 5,
		nature: 'careful',
		ivs: { spatk: 21, defence: 17, hp: 11, spdef: 25, attack: 21, speed: 29 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 0 },
		moves: [
			{ pp: 20, id: 351, name: 'Shock Wave' },
			{ pp: 5, id: 120, name: 'Self-Destruct' },
			{ pp: 30, id: 114, name: 'Haze' },
			{ pp: 15, id: 348, name: 'Leaf Blade' },
		],
		owner: 'KAY',
	},
	{
		name: 'Charmander',
		dexId: 4,
		filename: 'MyBoy/kaizo11.sav',
		nickname: 'CHARMANDER',
		level: 7,
		nature: 'naive',
		ivs: { spatk: 2, defence: 28, hp: 24, spdef: 20, attack: 28, speed: 24 },
		evs: { spatk: 0, defence: 0, hp: 0, spdef: 0, attack: 0, speed: 1 },
		moves: [
			{ pp: 10, id: 121, name: 'Egg Bomb' },
			{ pp: 20, id: 228, name: 'Pursuit' },
			{ pp: 15, id: 280, name: 'Brick Break' },
			{ pp: 5, id: 354, name: 'Psycho Boost' },
		],
		owner: 'TAYLOR',
	},
	{
		name: 'Raticate',
		dexId: 20,
		filename: 'MyBoy/kaizo110.sav',
		nickname: 'RATICATE',
		level: 8,
		nature: 'sassy',
		ivs: { spatk: 6, defence: 30, hp: 28, spdef: 2, attack: 19, speed: 17 },
		evs: { spatk: 0, defence: 1, hp: 0, spdef: 1, attack: 0, speed: 0 },
		moves: [
			{ pp: 20, id: 325, name: 'Shadow Punch' },
			{ pp: 30, id: 326, name: 'Extrasensory' },
			{ pp: 30, id: 116, name: 'Focus Energy' },
			{ pp: 10, id: 168, name: 'Thief' },
		],
		owner: 'RED',
	},
];
