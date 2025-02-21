import { replaceNamed } from './replaceNamed.ts';
import { returnPluralization } from './replaceNumerical.ts';

export function translate(
	message: string,
	second?: string | number | Record<string, string | number>,
	third?: number
): string {
	let translated = message;
	if (typeof second === 'number') {
		return returnPluralization(translated, second);
	}
	if (typeof second === 'object') {
		translated = replaceNamed(message, second);
	}
	if (typeof third === 'number') {
		return returnPluralization(translated, third);
	}

	return String(second) ?? translated;
}
