export const getRunIndex = (str: string): string | undefined => {
	if (str.length === 16) {
		return str.slice(-5, -4);
	}
	if (str.length === 17) {
		return str.slice(-6, -4);
	}
	if (str.length === 18) {
		return str.slice(-7, -4);
	}
	if (str.length === 19) {
		return str.slice(-8, -4);
	}
};
