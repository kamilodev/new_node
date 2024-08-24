interface BuildMakerPersonOptions {
	getUUID: () => string;
	getAge: (birthdate: string) => number;
}

interface PersonOptions {
	name: string;
	birthdate: string;
}

export const buildPerson = ({ getAge, getUUID }: BuildMakerPersonOptions) => {
	return ({ name, birthdate }: PersonOptions) => {
		return {
			id: getUUID(),
			name: name,
			birthdate: birthdate,
			age: getAge(birthdate),
		};
	};
};
