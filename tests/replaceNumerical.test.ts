/// <reference lib="deno.ns" />
import { expect } from 'jsr:@std/expect';
import { hasPluralization, returnPluralization } from '../src/utils/replaceNumerical.ts';

Deno.test('should return correct true for message with pluralization', () => {
	const message = 'apple | apples';
	expect(hasPluralization(message)).toBeTruthy();
});
Deno.test('should return correct false for message without correct pluralization', () => {
	const message = 'apple|apples';
	expect(hasPluralization(message)).toBeFalsy();
});

Deno.test('should return correct pluralization message for 2 variations', () => {
	const message = 'apple | apples';
	let result = returnPluralization(message, 1);
	expect(result).toBe('apple');
	result = returnPluralization(message, 5);
	expect(result).toBe('apples');
});
Deno.test('should return correct pluralization message for 3 variations', () => {
	const message = 'kids | kid | kids';
	let result = returnPluralization(message, 0);
	expect(result).toBe('kids');
	result = returnPluralization(message, 1);
	expect(result).toBe('kid');
	result = returnPluralization(message, 5);
	expect(result).toBe('kids');
});
