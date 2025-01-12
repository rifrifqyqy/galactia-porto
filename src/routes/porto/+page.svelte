<script lang="ts">
	import { typewriterEffect } from '$lib/components/animations/TypingAnimation';
	import { onMount } from 'svelte';
	import portodata from '../../data/porto.json';
	let activecategory = 'Website';

	$: activePorto = portodata.filter((porto) => porto.label === activecategory);

	$: activeportoItem = activePorto.length > 0 ? activePorto[0] : null;
	function setCategory(category: string) {
		activecategory = category;
	}
	function setActivePorto(porto: any) {
		activeportoItem = porto;
	}
	onMount(() => {});
</script>

<main class="font-silkscreen grid h-screen grid-cols-2 gap-4 px-16 text-white">
	<section class="my-auto flex flex-col items-center">
		<figure class="flex w-[320px] flex-col gap-4 bg-white px-4 pb-6 pt-12 shadow-lg">
			<img
				src={activeportoItem?.imageUrl || '/images/idcard.png'}
				alt=""
				class="aspect-square object-cover"
			/>

			<div class="font-caveat text-center text-2xl text-zinc-800">
				<p>{activeportoItem?.title || 'Porteroid'}</p>
			</div>
		</figure>
	</section>
	<section class="grid h-screen grid-rows-2 py-4">
		<header class="flex flex-col space-y-4 overflow-hidden">
			<h1 class="text-2xl">Porteroids Crate</h1>
			<ul class="flex gap-4">
				<button
					class="tab-porto {activecategory === 'Website' ? 'active' : ''}"
					data-sveltekit-preload-data="tap"
					onclick={() => setCategory('Website')}>Code</button
				>
				<button
					class="tab-porto {activecategory === 'Figma' ? 'active' : ''}"
					data-sveltekit-preload-data="tap"
					onclick={() => setCategory('Figma')}>UIUX</button
				>
				<button
					class="tab-porto {activecategory === 'Design' ? 'active' : ''}"
					data-sveltekit-preload-data="tap"
					onclick={() => setCategory('Design')}>Design</button
				>
			</ul>
			<main class=" flex w-full">
				<main class="custom-scrollbar flex h-[180px] w-full flex-wrap gap-4 overflow-y-scroll p-1">
					{#each activePorto as porto}
						<button
							class=" h-fit w-fit bg-white px-1 pb-5 pt-3 {activeportoItem?.id === porto.id
								? 'ring-2 ring-amber-400'
								: ''} "
							data-sveltekit-preload-data="tap"
							onclick={() => setActivePorto(porto)}
						>
							<figure class="relative">
								<img src={porto.imageUrl} alt="" class="aspect-square w-24 object-cover" />
								<div
									class="absolute left-0 top-0 h-full w-full {activeportoItem?.id === porto.id
										? ''
										: 'bg-zinc-800/30'}"
								></div>
							</figure>
						</button>
					{/each}
				</main>
			</main>
		</header>
		<article class="space-y-3">
			<h1 class="">#Porteroid Description</h1>
			<div>
				<p class="font-sans text-sm text-white/70">
					{#if activeportoItem}
						{activeportoItem.description}
					{/if}
				</p>
			</div>
			<h2>#Tools</h2>
			<div class=" h-[90%] max-w-[60%] pb-4">
				<ul class=" custom-scrollbar h-[50%] space-y-2 overflow-y-scroll text-xs">
					{#if activeportoItem}
						<!-- Loop tools -->
						{#if activeportoItem.tools && activeportoItem.tools.length > 0}
							<div class="mt-2 flex flex-col gap-2">
								{#each activeportoItem.tools as tool}
									<figure
										class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
									>
										<h1>{tool.name}</h1>
										<img src={tool.toolthumb} alt="" class="h-6" />
									</figure>
								{/each}
							</div>
						{:else}
							<p class="text-sm text-gray-500">Tidak ada tools untuk portofolio ini.</p>
						{/if}
					{:else}
						<p class="text-sm text-gray-500">Pilih portofolio untuk melihat detail.</p>
					{/if}
				</ul>
			</div>
		</article>
	</section>
</main>

<style>
	.tab-porto {
		@apply rounded-md px-4 py-2 text-xs text-white;
	}
	.tab-porto.active {
		@apply bg-gradient-to-r from-white/0 via-white/30 to-white/0 backdrop-blur-sm;
	}
</style>
