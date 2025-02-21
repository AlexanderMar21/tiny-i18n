function helperFlatMap(baseObject: Record<string, any>, keyPrefix = ''): any[][] {
	const test = Object.entries(baseObject).flatMap(([key, value]) => {
		const newKey = keyPrefix + (keyPrefix ? '.' : '') + key;
		if (typeof value !== 'object') {
			return [[newKey, value]];
		}
		return helperFlatMap(value, newKey);
	});
	return test;
}

export function objectFlatMap(baseObject: Record<string, unknown>) {
	return Object.fromEntries(helperFlatMap(baseObject));
}
