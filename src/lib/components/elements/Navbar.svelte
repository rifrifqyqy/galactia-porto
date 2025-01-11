<script lang="ts">
	import Transition from '../animations/Transition.svelte';
	import ContactSvg from './navbutton/ContactSVG.svelte';
	import HomeSvg from './navbutton/HomeSVG.svelte';
	import NavButton from './navbutton/NavButton.svelte';
	import PortoSvg from './navbutton/PortoSVG.svelte';
	import ProfileSvg from './navbutton/ProfileSVG.svelte';
</script>

<nav
	class="z-50 my-auto flex h-fit w-fit flex-col gap-4 rounded-full border-2 border-white bg-white/20 px-1 py-8 backdrop-blur-sm"
>
	<Transition href="/" id="home">
		<NavButton destination="/">
			<HomeSvg destination="/" />
		</NavButton>
	</Transition>
	<Transition href="/profile" id="profile">
		<NavButton destination="/profile">
			<ProfileSvg destination="/profile" />
		</NavButton>
	</Transition>
	<Transition href="/porto" id="porto">
		<NavButton destination="/porto">
			<PortoSvg destination="/porto" />
		</NavButton>
	</Transition>
	<Transition href="/contact" id="contact">
		<NavButton destination="/contact">
			<ContactSvg destination="/contact" />
		</NavButton>
	</Transition>
</nav>

<style></style>
