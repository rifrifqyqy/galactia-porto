<script lang="ts">
	import type { Portfolio } from '../../types/Portotype.svelte';
	import type { PageData } from './$types';
	let { data }: PageData = $props();
	const portodata = data.data;

	let filterdata = portodata.filter((porto: Portfolio) => porto.label === 'Website');
	let activecategory = $state('Website');
	let activePorto = $state(filterdata);
	let activeportoItem = $state(activePorto[0]);
	let readmore = $state(false);

	function setCategory(category: string) {
		imageloaded = false;
		activecategory = category;
		activePorto = portodata.filter((porto: Portfolio) => porto.label === category);
		setActivePorto(activePorto[0]);
	}
	function setActivePorto(porto: any) {
		activeportoItem = porto;
	}
	function handleReadMore() {
		readmore = !readmore;
	}
	let imageloaded = $state(false);
	// handle image load
	const handleimageload = () => {
		setTimeout(() => {
			imageloaded = true;
		}, 2000);
	};
</script>

<main class="font-silkscreen grid h-screen grid-cols-2 gap-4 px-16 text-white">
	<section class="my-auto flex flex-col items-center">
		<figure class="flex w-[320px] flex-col gap-4 bg-white px-4 pb-6 pt-12 shadow-lg">
			<img
				src={imageloaded ? activeportoItem?.imageUrl : '/images/placeholder.png'}
				alt="Portfolio"
				onload={handleimageload}
				class="aspect-square {imageloaded
					? 'object-cover'
					: 'animate-pulse object-contain grayscale'} "
			/>

			<div class="font-caveat text-center text-2xl text-zinc-800">
				<p>{imageloaded ? activeportoItem?.title : 'Loading...'}</p>
			</div>
		</figure>
	</section>

	<section class="grid h-screen grid-rows-2 py-4">
		<header class="flex flex-col space-y-4 overflow-hidden">
			<h1 class="text-2xl">Porteroids Crate</h1>
			<ul class="flex gap-4">
				<button
					class="tab-porto {activecategory === 'Website' ? 'active' : ''}"
					onclick={() => setCategory('Website')}
				>
					Code
				</button>
				<button
					class="tab-porto {activecategory === 'Figma' ? 'active' : ''}"
					onclick={() => setCategory('Figma')}
				>
					UIUX
				</button>
				<button
					class="tab-porto {activecategory === 'Design' ? 'active' : ''}"
					onclick={() => setCategory('Design')}
				>
					Design
				</button>
			</ul>

			<div class="custom-scrollbar flex h-[180px] w-full flex-wrap gap-4 overflow-y-scroll p-1">
				{#each activePorto as porto}
					<button
						class="h-fit w-fit bg-white px-1 pb-5 pt-3 {activeportoItem?.id === porto.id
							? 'ring-2 ring-amber-400'
							: ''}"
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
			</div>
		</header>

		<article class="space-y-3">
			<h1>#Porteroid Description</h1>
			<div>
				{#if activeportoItem}
					<p class={readmore ? '' : 'line-clamp-3'}>
						{activeportoItem.description}
					</p>
				{/if}
				<button class="text-xs text-amber-400" onclick={handleReadMore}>
					{readmore ? 'Lebih Sedikit' : 'Selengkapnya'}
				</button>
			</div>

			<h2>#Tools</h2>
			<div class="h-[90%] max-w-[60%] pb-4">
				<ul class="custom-scrollbar h-[50%] space-y-2 overflow-y-scroll text-xs">
					{#if activeportoItem?.tools?.length > 0}
						{#each activeportoItem.tools as tool}
							<figure
								class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
							>
								<h1>{tool.name}</h1>
								<img src={tool.toolthumb} alt="" class="h-7 bg-zinc-800/50" />
							</figure>
						{/each}
					{:else}
						<p class="text-sm text-gray-500">Tidak ada tools untuk portofolio ini.</p>
					{/if}
				</ul>
			</div>
		</article>
	</section>
</main>

<style>
	.tab-porto {
		@apply rounded-md px-4 py-2 text-xs;
	}
	.tab-porto.active {
		@apply bg-gradient-to-r from-white/0 via-white/30 to-white/0 text-amber-400 backdrop-blur-sm;
	}
</style>
