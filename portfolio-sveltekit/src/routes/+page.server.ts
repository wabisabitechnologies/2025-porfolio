import type { PageServerLoad } from './$types';
import { getHomepage } from '$lib/content';

export const load: PageServerLoad = () => {
	const home = getHomepage();

	return {
		home
	};
};

