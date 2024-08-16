const { uuidv4, getAge } = require('../plugins');

const buildPerson = ({ name, birthdate }) => {
	return {
		id: uuidv4(),
		name: name,
		birthdate: birthdate,
		age: getAge(birthdate),
	};
};

const obj = {
	name: 'Camilo Vanegas',
	birthdate: '1986-08-06',
};

const camilo = buildPerson(obj);
console.log(camilo);
