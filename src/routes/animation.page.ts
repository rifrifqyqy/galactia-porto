import { gsap } from 'gsap';

export function ANIMATION_POLAROID() {
	const tl = gsap.timeline({
		delay: 0.8
	});

	tl.fromTo(
		'.polaroid',
		{
			x: '150%',
			y: -1000,
			opacity: 1,
			rotation: 50,
			ease: 'back'
		},
		{
			x: '120%',
			y: 20,
			opacity: 1,
			rotation: -160,
			onComplete: () => {
				gsap.to('.polaroid', {
					duration: 1,
					y: '+=10',
					yoyo: true,
					repeat: Infinity,
					ease: 'power1'
				});
			}
		}
	);

	tl.fromTo(
		'.polaroid2',
		{
			x: '40%',
			y: 1000,
			opacity: 1,
			rotation: -80,
			ease: 'back'
		},
		{
			x: '-40%',
			y: -20,
			opacity: 1,
			rotation: -10,

			onComplete: () => {
				gsap.to('.polaroid2', {
					duration: 1,
					y: '+=10',
					yoyo: true,
					repeat: Infinity,
					ease: 'power1'
				});
			}
		}
	);

	tl.fromTo(
		'.polaroid3',
		{
			x: '10%',
			y: 1000,
			opacity: 1,
			rotation: -80,
			ease: 'back'
		},
		{
			x: '-140%',
			y: 20,
			opacity: 1,
			rotation: 10,

			onComplete: () => {
				gsap.to('.polaroid3', {
					duration: 1,
					y: '+=10',
					yoyo: true,
					repeat: -1,
					ease: 'power1'
				});
			}
		}
	);

	return tl;
}
