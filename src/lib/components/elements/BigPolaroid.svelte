<script lang="ts">
	let { portrait }: { portrait: string } = $props();
</script>

<main class="h-fit w-fit border-2 bg-white px-2 pb-8 pt-5 shadow-md md:px-4 md:pb-16 md:pt-8">
	<img src={portrait} class="aspect-auto w-[240px]" alt="" />
</main>

<style></style>
