<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { goto } from '$app/navigation';
	let { href, id } = $props();
	import { griditem } from '../../../stores/viewportDetect.svelte';

	let elements: HTMLElement[] = [];
	let tl: gsap.core.Timeline;
	onMount(() => {
		elements = Array.from(document.querySelectorAll(`#grid-item${id}`));
		gsap.set(`#grid-container${id}`, { display: 'none', opacity: 0 });

		tl = gsap.timeline({
			paused: true
		});

		// Animasi masuk elemen
		tl.from(elements, {
			opacity: 0,
			backgroundColor: 'ffa5ab',
			scale: 0,
			stagger: {
				amount: 1,
				from: 'random'
			},
			ease: 'power4.in',
			onUpdate: updateBorders,
			onStart: () => {
				gsap.set(`#grid-container${id}`, { display: 'grid', opacity: 1 });
			}
		});

		tl.add('endOfFrom');

		// Animasi keluar elemen
		tl.to(elements, {
			opacity: 0,
			scale: 0,
			stagger: {
				amount: 1,
				from: 'random'
			},
			ease: 'power4.out',
			onUpdate: updateBorders,
			onComplete: () => {
				gsap.set(`#grid-container${id}`, { display: 'none', opacity: 0 });
			}
		});
		// Bersihkan event listener saat komponen di-unmount
	});
	// Fungsi untuk memperbarui border
	function updateBorders() {
		elements.forEach((el, index) => {
			const scale = gsap.getProperty(el, 'scale');
			const neighbors = getNeighbors(index, elements);

			el.style.borderWidth = '';
			el.style.borderColor = 'blue';

			// Tetapkan border sesuai kondisi
			if (neighbors.right && gsap.getProperty(neighbors.right, 'scale') !== 1) {
				el.style.borderRightWidth = '2px';
			}
			if (neighbors.left && gsap.getProperty(neighbors.left, 'scale') !== 1) {
				el.style.borderLeftWidth = '2px';
			}
			if (neighbors.top && gsap.getProperty(neighbors.top, 'scale') !== 1) {
				el.style.borderTopWidth = '2px';
			}
			if (neighbors.bottom && gsap.getProperty(neighbors.bottom, 'scale') !== 1) {
				el.style.borderBottomWidth = '2px';
			}
		});
	}
	function getNeighbors(index: number, items: HTMLElement[]) {
		const cols = 20;
		return {
			left: index % cols !== 0 ? items[index - 1] : null,
			right: (index + 1) % cols !== 0 ? items[index + 1] : null,
			top: index >= cols ? items[index - cols] : null,
			bottom: index < items.length - cols ? items[index + cols] : null
		};
	}
	function handleClick(event: MouseEvent, targetUrl: string) {
		event.preventDefault();
		setTimeout(() => {
			document.body.style.overflow = 'hidden';
		}, 500);
		tl.play();
		tl.call(
			() => {
				goto(targetUrl);
			},
			[],
			'endOfFrom'
		);
		tl.restart();
	}
</script>

<main
	class="grid-res absolute inset-0 left-0 top-0 z-50 -ml-24 -mt-[200%] grid h-[calc(100vh+50%)] w-[calc(100vw+50%)] md:-ml-8 md:-mt-[180%]"
	id="grid-container{id}"
>
	{#each Array($griditem) as _, i}
		<div class="flex items-center justify-center bg-gray-950" id="grid-item{id}"></div>
	{/each}
</main>

<a
	{href}
	aria-label="btn"
	data-sveltekit-preload-data="tap"
	data-sveltekit-preload-code="tap"
	on:click={(e) => handleClick(e, href)}
	class="text-dark-100 hover:text-primary-100 rounded-full px-4 py-2 transition-all"><slot /></a
>

<style>
	.absolute {
		position: absolute !important;
	}

	@media (max-width: 567px) {
		.grid-res {
			grid-template-columns: repeat(10, 1fr);
		}
	}

	@media (min-width: 567px) {
		.grid-res {
			grid-template-columns: repeat(20, 1fr);
		}
	}
</style>
