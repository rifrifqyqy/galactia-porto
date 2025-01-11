<script lang="ts">
	import BigPolaroid from '$lib/components/elements/BigPolaroid.svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import { ANIMATION_POLAROID } from './animation.page';
	import { typewriterEffect } from '$lib/components/animations/TypingAnimation';
	let tl: gsap.core.Timeline;
	let container: HTMLElement;
	let container2: HTMLElement;
	onMount(() => {
		tl = ANIMATION_POLAROID();
		const text =
			"With my skills in UI/UX design and frontend development, I'm Rifqy Hamdani the captain of a digital spacecraft delivering users to the galaxy ";
		const text2 = 'PORTOSTATION LOBBY . .';
		typewriterEffect(text, container, 0.06);
		typewriterEffect(text2, container2, 0.1);

		let timeline = gsap.timeline();
		timeline.to('.arloji', {
			duration: 40,
			rotate: 360,
			x: 400,
			y: 450,
			repeat: -1,
			ease: 'linear',
			yoyo: true
		}); // rotate the clock

		gsap.to('.kitkat', {
			duration: 40,
			rotate: -360,
			x: -450,
			y: -150,
			repeat: -1,
			ease: 'linear',
			yoyo: true
		});
		gsap.to('.android', {
			duration: 40,
			rotate: 360,
			x: -450,
			y: 250,
			repeat: -1,
			ease: 'linear',
			yoyo: true
		});
	});
</script>

<main class="relative grid h-full w-full grid-cols-2">
	<figure class="absolute my-auto">
		<img src="/images/polaroidcam.png" class="arloji h-36" alt="" />
	</figure>
	<figure class="absolute right-[10%] top-[40%]">
		<img src="/images/kitkat.avif" class="kitkat h-32" alt="" />
	</figure>
	<figure class="absolute bottom-[10%] left-[50%]">
		<img src="/images/samsung.png" class="android h-48" alt="" />
	</figure>
	<section class="absolute flex h-screen w-full">
		<figure class=" polaroid mx-auto my-auto h-fit w-fit" id="polaroid">
			<BigPolaroid
				portrait="https://i.pinimg.com/736x/01/af/6a/01af6aa6fc57cfeca4492b2b7515525f.jpg"
			/>
		</figure>
		<figure class=" polaroid2 mx-auto my-auto h-fit w-fit" id="polaroid">
			<BigPolaroid
				portrait="https://i.pinimg.com/736x/d6/b3/76/d6b376024a80ee00797105045cfe3f59.jpg"
			/>
		</figure>
		<figure class=" polaroid3 mx-auto my-auto h-fit w-fit" id="polaroid">
			<BigPolaroid
				portrait="https://i.pinimg.com/736x/b0/e5/d1/b0e5d1bbb5037ec1f650176179f7d8fe.jpg"
			/>
		</figure>
	</section>
	<section class="font-silkscreen uppercase">
		<div class="inline-block rounded-md p-4 text-white">
			<span bind:this={container} class="typewriter-text"></span>
			<span class="cursor animate-blink">|</span>
		</div>
	</section>
	<section class="flex">
		<h1 class="font-silkscreen ml-auto mt-auto w-fit">
			<div class="flex gap-2 rounded-md p-4 text-right text-amber-400">
				<span bind:this={container2} class="typewriter-text"></span>
				<div class=" h-6 w-2 animate-blink">.</div>
			</div>
		</h1>
	</section>
</main>
