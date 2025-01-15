import type { PageServerLoad } from './$types';
import contactdata from '../../data/contact.json';
export const load: PageServerLoad = async () => {
	const data = contactdata;
	return { data, status: 200 };
};
