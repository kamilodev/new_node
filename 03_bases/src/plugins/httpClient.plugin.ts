import axios from 'axios';

export const httpClient = {
	get: async (url: string) => {
		try {
			const { data } = await axios.get(url);
			return data;
		} catch (error) {
			console.log(error);
		}
	},

	post: async () => {},
};
