import type { PageServerLoad } from './$types';
import { SV_DEV, SV_PROD } from '$env/static/private';
export const load: PageServerLoad = async () => {
	const mode = 'dev';
	const api = mode === 'dev' ? SV_DEV : SV_PROD;

	try {
		const response = await fetch(api);

		if (!response.ok) {
			return {
				status: response.status,
				error: response.statusText,
				body: { message: 'Failed to fetch data' }
			};
		}

		const { data } = await response.json();
		return { data, status: 200 };
	} catch (error) {
		return {
			status: 500,
			error
		};
	}
};
