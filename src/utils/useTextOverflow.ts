import { writable, type Writable } from 'svelte/store';
import { onMount } from 'svelte';

/**
 * Hook untuk mengecek apakah teks melebihi batas line-clamp
 */
export function useTextOverflow(lineClamp: number = 3) {
	const showReadMoreButton: Writable<boolean> = writable(false);
	let descriptionElement: HTMLParagraphElement | null = null;

	
	function checkTextOverflow() {
		if (descriptionElement) {
			const maxHeight = parseInt(getComputedStyle(descriptionElement).lineHeight) * lineClamp;
			showReadMoreButton.set(descriptionElement.scrollHeight > maxHeight);
		}
	}

	
	onMount(() => {
		setTimeout(checkTextOverflow, 50);
	});

	return { showReadMoreButton, descriptionElement };
}
