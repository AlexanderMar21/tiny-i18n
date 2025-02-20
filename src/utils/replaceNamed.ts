export function replaceNamed(message: string, namedKeys: Record<string, string | number[]>): string {
	let temp: string = message;
	for (const key in namedKeys) {
		const regex = new RegExp(`{${key}}`, 'g');
		temp = temp.replaceAll(regex, String(namedKeys[key]));
	}
	temp = temp.replaceAll(/{[^}]*\}/g, '');
	return temp.trim();
}
