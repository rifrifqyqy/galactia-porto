<script lang="ts">
	import { typewriterEffect } from '$lib/components/animations/TypingAnimation';
	import { onMount } from 'svelte';
	let container: HTMLElement;
	onMount(() => {
		let text = 'Ruang kontak sedang dalam tahap pengembangan, silahkan cek kembali nanti.';

		typewriterEffect(text, container, 0.06);
	});
</script>

<main
	class="font-silkscreen flex h-screen flex-col items-center justify-center gap-4 text-center text-white"
>
	<p class="text-3xl text-amber-400">Portostation Contact Center</p>

	<div class="flex gap-2 rounded-md p-4 text-right text-white">
		<span bind:this={container} class="typewriter-text"></span>
		<div class=" h-6 w-2 animate-blink">|</div>
	</div>
</main>
