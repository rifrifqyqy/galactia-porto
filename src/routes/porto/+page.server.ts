import type { PageServerLoad } from './$types';
import portodata from '../../data/porto.json';

export const load: PageServerLoad = async () => {
	const data = portodata;

	if (!data) {
		return {
			status: 404,
			error: new Error('Data not found')
		};
	}

	return {
		status: 200,
		data
	};
};
