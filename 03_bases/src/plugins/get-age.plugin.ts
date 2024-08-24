const getAgeModule = require('get-age');

export const getAge = (birthdate: string) => {
	return getAgeModule(birthdate);
};
