import { gsap } from 'gsap';

export function typewriterEffect(
	text: string,
	container: HTMLElement,
	speed: number = 0.1
): gsap.core.Timeline {
	if (!container) {
		throw new Error('Container element is required');
	}

	// Reset teks kontainer
	container.textContent = '';
	const tltype = gsap.timeline();

	// Tambahkan setiap huruf ke dalam animasi
	text.split('').forEach((char) => {
		tltype.to(
			{},
			{
				duration: speed,
				onComplete: () => {
					container.textContent += char;
				}
			}
		);
	});

	return tltype;
}
