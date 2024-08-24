import { getUserById } from '../../src/js-foundation/03-callbacks';
describe('Test in js-foundation/03-callbacks', () => {
	test('The user called must be Jhon Doe', () => {
		getUserById(1, (err, user) => {
			expect(user).toEqual({
				id: 1,
				name: 'John Doe',
				email: 'john@example.com',
			});
		});
	});

	test('getUserById should return an error if user does not exists', () => {
		const id = 10;
		getUserById(id, (err, user) => {
			expect(user).toBeUndefined();
			expect(err).toBe(`User not found with id ${id}`);
		});
	});
});
