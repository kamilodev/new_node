import { heroes } from '../../src/js-foundation/02-destructuring';

describe('Test in js-foundation/02-destructuring', () => {
	test('Heroes should be contain Wolverine hero', () => {
		expect(heroes).toContain('Wolverine');
	});

	test('First heroes must be Flash and Superman', () => {
		const [, flash, superman] = heroes;
		expect(flash).toBe('Flash');
		expect(superman).toBe('Superman');
	});
});
