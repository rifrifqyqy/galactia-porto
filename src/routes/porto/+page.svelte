<script lang="ts">
	import { typewriterEffect } from '$lib/components/animations/TypingAnimation';
	import { onMount } from 'svelte';
	let container: HTMLElement;
	onMount(() => {
		let text = 'Portostation sedang dalam tahap pengembangan, silahkan cek kembali nanti.';

		typewriterEffect(text, container, 0.06);
	});
</script>

<main class="font-silkscreen grid h-screen grid-cols-2 gap-4 px-16 text-white">
	<section class="my-auto flex flex-col items-center">
		<figure class="flex w-[320px] flex-col gap-4 bg-white px-4 pb-6 pt-12 shadow-lg">
			<img
				src="https://i.pinimg.com/736x/67/ae/82/67ae82e6fa5d148b33e3e676e97ec86d.jpg"
				alt=""
				class="aspect-square object-cover"
			/>

			<div class="font-caveat text-center text-2xl text-zinc-800">
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, ad.</p>
			</div>
		</figure>
	</section>
	<section class="grid h-screen grid-rows-2 gap-8 py-8">
		<header class="flex flex-col space-y-4 overflow-hidden">
			<h1 class="text-2xl">Porteroids Crate</h1>
			<ul class="flex gap-4">
				<button class="tab-porto">Code</button>
				<button class="tab-porto">UIUX</button>
				<button class="tab-porto">Design</button>
			</ul>
			<main class=" flex w-full">
				<main class="scrollbar-hide flex h-[200px] w-full flex-wrap gap-4 overflow-y-scroll pr-1">
					<figure class="h-fit w-fit bg-white px-1 pb-5 pt-3">
						<img
							src="https://i.pinimg.com/736x/67/ae/82/67ae82e6fa5d148b33e3e676e97ec86d.jpg"
							alt=""
							class="aspect-square w-24 object-cover"
						/>
					</figure>
				</main>
				<p class="flex h-full w-4 flex-col items-center justify-center text-xs">
					<span>s</span>
					<span>c</span>
					<span>r</span>
					<span>o</span>
					<span>l</span>
					<span>l</span>
					<span>d</span>
					<span>o</span>
					<span>w</span>
					<span>n</span>
				</p>
			</main>
		</header>
		<article class="space-y-4">
			<h1 class="">#Porteroid Description</h1>
			<div>
				<p class="text-xs text-white/70">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet laboriosam repellat
					voluptatibus asperiores recusandae quis, nesciunt porro adipisci aliquid unde?
				</p>
			</div>
			<h2>#Tools</h2>
			<div class=" h-full max-w-[60%]">
				<ul class=" custom-scrollbar h-[50%] space-y-2 overflow-y-scroll text-xs">
					<figure
						class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
					>
						<h1>Remix</h1>
						<img src="/images/sketch/remixjs.png" class="h-6" alt="" />
					</figure>
					<figure
						class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
					>
						<h1>Framermotion</h1>
						<img src="/images/sketch/framermotion.svg" class="h-6" alt="" />
					</figure>
					<figure
						class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
					>
						<h1>Framermotion</h1>
						<img src="/images/sketch/framermotion.svg" class="h-6" alt="" />
					</figure>
					<figure
						class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
					>
						<h1>Framermotion</h1>
						<img src="/images/sketch/framermotion.svg" class="h-6" alt="" />
					</figure>
					<figure
						class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
					>
						<h1>Framermotion</h1>
						<img src="/images/sketch/framermotion.svg" class="h-6" alt="" />
					</figure>
					<figure
						class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
					>
						<h1>Framermotion</h1>
						<img src="/images/sketch/framermotion.svg" class="h-6" alt="" />
					</figure>
					<figure
						class="flex items-center justify-between bg-gradient-to-r from-white/0 via-white/30 to-white/0 px-4 py-1"
					>
						<h1>Framermotion</h1>
						<img src="/images/sketch/framermotion.svg" class="h-6" alt="" />
					</figure>
				</ul>
			</div>
		</article>
	</section>
</main>

<style>
	.tab-porto {
		@apply rounded-md border-2 px-3 py-2 text-xs text-white;
	}
	.tab-porto.active {
		@apply border-2 bg-white/30 backdrop-blur-sm;
	}
</style>
