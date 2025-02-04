import { writable } from 'svelte/store';

export const griditem = writable(0);

if (typeof window !== 'undefined') {
	const detectScreenSize = () => {
		if (window.innerWidth <= 578) {
			griditem.set(76);
		} else if (window.innerWidth >= 578) {
			griditem.set(160);
		}
	};

	detectScreenSize();
	window.addEventListener('resize', detectScreenSize);
}
