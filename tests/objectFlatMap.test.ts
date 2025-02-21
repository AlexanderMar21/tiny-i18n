/// <reference lib="deno.ns" />
import { expect } from '@std/expect';
import { objectFlatMap } from '../src/utils/objectFlatMap.ts';

const testObject = {
	main: {
		button: {
			label: 'button',
			ariaLabel: 'aria-label',
		},
		open: 'open',
	},
	close: 'close',
	about: {
		title: 'about',
	},
};

const expected = {
	'main.button.label': 'button',
	'main.button.ariaLabel': 'aria-label',
	'main.open': 'open',
	close: 'close',
	'about.title': 'about',
};

Deno.test('should return a correct flat object tree (leafs only)', () => {
	const result = objectFlatMap(testObject);
	expect(result).toMatchObject(expected);
});
