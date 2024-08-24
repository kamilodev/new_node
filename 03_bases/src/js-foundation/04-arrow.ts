interface User {
	id: number;
	name: string;
	email: string;
}

export const users: User[] = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john@example.com',
	},
	{
		id: 2,
		name: 'Jane Doe',
		email: 'jane@example.com',
	},
];

export const getUserById = (id: number) => {
	const user = users.find(user => user.id === id);
	!user ? console.log(`User not found with id ${id}`) : console.log(user);
};
