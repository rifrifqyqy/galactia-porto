<script lang="ts">
	let { portrait }: { portrait: string } = $props();
</script>

<main class="h-fit w-fit border-2 bg-white px-4 pb-16 pt-8 shadow-md">
	<img src={portrait} class="aspect-auto w-[250px]" alt="" />
</main>

<style></style>
