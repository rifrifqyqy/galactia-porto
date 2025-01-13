import {
	backEndSkills,
	databaseSkills,
	designSkills,
	frontEndSkills,
	otherSkills
} from '../../data/Skills';
import tabsData from '../../data/tabprofile.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const designData = designSkills;
	const frontendData = frontEndSkills;
	const backendData = backEndSkills;
	const databaseData = databaseSkills;
	const otherData = otherSkills;
  const tabsProfileData = tabsData;
	return {
		designData,
		frontendData,
		backendData,
		databaseData,
		otherData,
    tabsProfileData
	};
};
