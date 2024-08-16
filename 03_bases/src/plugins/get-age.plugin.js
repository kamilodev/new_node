const getAgeModule = require('get-age');

const getAge = birthdate => {
	return !birthdate ? new Error('Birthdate is required') : getAgeModule(birthdate);
};

module.exports = {
	getAge,
};
