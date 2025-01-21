<script lang="ts">
	let { data } = $props();
	let contact = data.data;
</script>

<svelte:head>
	<title>Rifqy | Porteroid Contact Center</title>
	<meta name="description" content="Porteroid - Rifqy Hamdani" />
</svelte:head>

<main class="font-silkscreen h-screen gap-4 px-16 text-white">
	<section class="grid h-fit grid-cols-2 gap-8 py-24">
		{#each contact as C}
			<div class="flex gap-4 rounded-xl border-2 bg-white/20 p-4 backdrop-blur-md">
				<img
					src={C.image}
					alt=""
					class="aspect-square h-24 rounded-md bg-white/80 object-contain p-4 backdrop-blur-md"
				/>

				<article class="flex w-full flex-col justify-between gap-2">
					<div>
						<h1 class="text-xl">{C.name}</h1>
						<p class="text-xs">{C.desc}</p>
					</div>
					<a
						class="ml-auto flex w-fit gap-2 rounded-md bg-amber-500 py-1 pl-3 pr-2 hover:opacity-90"
						href={C.link}
					>
						Contact
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							class=" rotate-[-45deg]"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M4 11v2h12v2h2v-2h2v-2h-2V9h-2v2zm10-4h2v2h-2zm0 0h-2V5h2zm0 10h2v-2h-2zm0 0h-2v2h2z"
							/></svg
						>
					</a>
				</article>
			</div>
		{/each}
	</section>
</main>
