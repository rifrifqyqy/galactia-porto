<script lang="ts">
	import { page } from '$app/state';
	export let destination: string;
</script>

<section
	class="group relative flex h-fit w-fit items-center justify-center active:scale-95"
	role="button"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 124 107"
		fill="none"
		class="absolute z-10 aspect-auto h-full w-full"
	>
		<path
			class="frame fill-white"
			aria-current={page.url.pathname === destination ? 'page' : undefined}
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M16.0455 25.6137L14.5541 24.6194L29.3258 0H73.262V1.43909L90.0081 1.43909L110.005 36.0751L111.517 35.2247L123.258 53.0265L117.198 62.4955L115.439 61.323L90.0081 105.371H40.699L28.947 106.81L12.6603 79.9185L14.6363 78.7561L0 53.4053L16.0455 25.6137ZM19.3806 27.8371L4.6188 53.4053L18.0842 76.728L19.0993 76.1309L32.3559 99.9928L52.8062 101.371H87.6987L112.104 59.0996L111.517 58.7079L114.926 53.0265L105.457 38.6336L106.519 38.0362L87.6987 5.43909L69.6121 5.43909L32.7346 6.81769L20.2355 28.407L19.3806 27.8371Z"
		/>
	</svg>
	<!-- image -->
	<slot />
</section>

<style>
	.frame:not([aria-current='page']) {
		@apply hover:bg-white/40;
	}
</style>
