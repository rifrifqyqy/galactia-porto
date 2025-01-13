<script lang="ts">
	import { typewriterEffect } from '$lib/components/animations/TypingAnimation';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { experienceData } from '../../data/Experience';
	let container: HTMLElement;
	let expcon: HTMLElement;
	let skillcon: HTMLElement;
	export let data;
	let tabs = data.tabsProfileData;

	let activeSkill = 'Design';
	$: activeData =
		activeSkill === 'Design'
			? data.designData
			: activeSkill === 'Frontend'
				? data.frontendData
				: activeSkill === 'Backend'
					? data.backendData
					: activeSkill === 'Database'
						? data.databaseData
						: activeSkill === 'Tools'
							? data.otherData
							: [];

	onMount(() => {
		let text = 'Identification card';
		let exp = 'Experiences';
		let skill = 'Skills';

		typewriterEffect(text, container, 0.06);
		typewriterEffect(exp, expcon, 0.06);
		typewriterEffect(skill, skillcon, 0.06);

		gsap.fromTo('.idcard', { rotation: -3 }, { rotation: 3, yoyo: true, repeat: -1, duration: 3 });
	});
	function handleSKill(skill: string) {
		activeSkill = skill;
	}

	let targetDiv: HTMLElement;
	let mouseoverEl: HTMLElement;
	let isInside = false;
	// Fungsi untuk menangani pergerakan kursor
	function handleMouseMove(event: MouseEvent) {
		if (isInside && mouseoverEl) {
			const rect = targetDiv.getBoundingClientRect(); // Posisi relatif <div>
			const x = event.clientX - rect.left - mouseoverEl.offsetWidth / 2; // Posisi X tengah
			const y = event.clientY - rect.top - mouseoverEl.offsetHeight / 2; // Posisi Y tengah

			gsap.to(mouseoverEl, {
				x,
				y,
				duration: 0.6,
				ease: 'power2.out'
			});
		}
	}

	// Memunculkan elemen <span>
	function handleMouseEnter() {
		isInside = true;
		gsap.to(mouseoverEl, {
			opacity: 1,
			duration: 0.3,
			ease: 'power1.out'
		});
	}

	// Menghilangkan elemen <span>
	function handleMouseLeave() {
		isInside = false;
		gsap.to(mouseoverEl, {
			opacity: 0,
			duration: 0.3,
			ease: 'power1.out'
		});
	}

	// Lifecycle hooks
	onMount(() => {
		targetDiv.addEventListener('mousemove', handleMouseMove);
	});
</script>

<svelte:head>
	<title>Rifqy | Portonaut Profile</title>
	<meta name="description" content="Porteroid - Rifqy Hamdani" />
</svelte:head>

<main class="relative grid h-screen grid-cols-2 items-center justify-center gap-8 text-white">
	<section class="font-silkscreen flex flex-col items-center gap-4">
		<h1 class="absolute left-0 top-4">Our Portonaut Bio</h1>
		<figure>
			<img src="/images/idcard.png" class="idcard h-[280px] shadow-lg" alt="" />
		</figure>
		<p bind:this={container} class="typewriter-text text-3xl text-amber-400"></p>
		<div class="w-fit">
			<article class="mt-2 flex gap-6">
				<p class="text-base">Rifqy Hamdani</p>
				<p class=" text-base">AGE : 21</p>
				<p class=" text-base">Indonesia</p>
			</article>
		</div>
	</section>
	<section class="font-silkscreen col-span-1 flex h-full justify-center py-8 pr-24">
		<main class="flex w-full flex-col justify-between transition-all">
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				bind:this={targetDiv}
				class="relative w-fit"
				onmouseenter={handleMouseEnter}
				onmouseleave={handleMouseLeave}
			>
				<header class="flex flex-col gap-2">
					<div bind:this={skillcon} class=" z-10 w-fit py-1 text-start text-2xl text-white"></div>

					<section class="z-10 mt-2 space-y-4">
						<ul class="scrollbar-hide flex gap-4">
							{#each tabs as tab}
								<button
									data-sveltekit-preload-data="tap"
									onclick={() => handleSKill(tab)}
									class="tab-skill {activeSkill === tab
										? 'active'
										: 'border-transparent text-white'}">{tab}</button
								>
							{/each}
						</ul>
						<div class=" flex flex-wrap gap-4">
							{#each activeData as D}
								<img
									src={D.thumbnail}
									class="skill aspect-square w-14 rounded-xl bg-zinc-800/60 object-contain backdrop-blur-sm"
									id="skill"
									alt=""
								/>
							{/each}
						</div>
					</section>
				</header>
				<img
					bind:this={mouseoverEl}
					src="/images/galaxgif.gif"
					class=" mouseover absolute left-0 top-0 aspect-auto w-72 rounded-full object-contain mix-blend-lighten grayscale"
					alt=""
				/>
			</div>
			<div class="w-fit">
				<header class="flex flex-col gap-2">
					<div bind:this={expcon} class=" w-fit py-1 text-start text-2xl text-white"></div>
				</header>

				<article class="scrollbar-hide mt-4 flex max-h-[300px] flex-col gap-6 overflow-y-scroll">
					{#each experienceData as E}
						<div
							class="flex gap-4 bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-8 py-3 backdrop-blur-sm"
						>
							<img src={E.thumbnail} class="aspect-square w-20 rounded-xl object-contain" alt="" />
							<article class="flex w-full flex-col justify-between">
								<header class="space-y-1">
									<h2 class="text-base text-amber-400">{E.title}</h2>
									<p class="text-xs text-zinc-300">{E.role}</p>
								</header>
								<h2 class="text-end text-xs text-zinc-300">
									{E.date}
									{#if E.duration != null}
										|
									{/if}
									{E.duration}
								</h2>
							</article>
						</div>
					{/each}
				</article>
			</div>
		</main>
	</section>
</main>

<style>
	.tab-skill {
		@apply rounded-md px-3 py-2 text-xs;
	}
	.tab-skill.active {
		@apply bg-gradient-to-r from-white/0 via-white/20 to-white/0 text-amber-400 backdrop-blur-sm;
	}
	.mouseover {
		transform: scale(1);
		opacity: 0;
		pointer-events: none; /* Agar elemen tidak menghalangi interaksi mouse */
	}
</style>
