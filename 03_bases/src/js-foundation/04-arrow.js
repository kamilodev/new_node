const users = [
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

const getUserById = id => {
	const user = users.find(user => user.id === id);
	!user ? console.log(`User not found with id ${id}`) : console.log(user);
};

module.exports = {
	getUserById,
};
