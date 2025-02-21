/// <reference lib="deno.ns" />
import { expect } from 'jsr:@std/expect';
import { translate } from '../src/utils/translate.ts';

Deno.test('should translate correct message for pluralization', () => {
	const message = 'Hello world | Hello worlds!';
	const result = translate(message, 2);
	expect(result).toEqual('Hello worlds!');
});

Deno.test('should translate correct message for named values and pluralization', () => {
	const message = 'No Kids | {kids} Kid | {kids} Kids';
	let result = translate(message, 0);
	expect(result).toEqual('No Kids');
	result = translate(message, { kids: 1 }, 1);
	expect(result).toEqual('1 Kid');
	result = translate(message, { kids: 10 }, 10);
	expect(result).toEqual('10 Kids');
});
