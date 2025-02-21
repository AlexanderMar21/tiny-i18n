/// <reference lib="deno.ns" />
import { expect } from 'jsr:@std/expect';
import { replaceNamed, deleteGhostInterpolations } from '../src/utils/replaceNamed.ts';

Deno.test('should replace all named values', () => {
	const testMessage = 'Hello {world} {world}';
	const expected = 'Hello Deno Deno';
	const result = replaceNamed(testMessage, { world: 'Deno' });
	expect(result).toEqual(expected);
});

Deno.test('should remove named interpolations if value not found', () => {
	const testMessage = 'Hello{world}{world}';
	const expected = 'Hello';
	const result = deleteGhostInterpolations(testMessage);
	expect(result).toEqual(expected);
});

Deno.test('should not remove named interpolations if they have spaces', () => {
	const testMessage = 'Hello { world} {world .Some other}';
	const result = deleteGhostInterpolations(testMessage);
	expect(result).toEqual(testMessage);
});
