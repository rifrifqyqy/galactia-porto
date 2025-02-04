<script lang="ts">
	import Navbar from '$lib/components/elements/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class=" relative mx-auto h-screen 2xl:container">
	<main class="__container-bg flex h-screen">
		<header class="absolute flex h-full w-full md:ml-8">
			<Navbar />
		</header>

		<main class="h-screen w-full px-2 text-white lg:pl-24 xl:pl-32">
			{@render children()}
		</main>

		<footer></footer>
	</main>
</div>

<style>
	.__container-bg {
		background: url('/images/galaxya.gif') lightgray 50% / cover no-repeat;
	}
</style>
