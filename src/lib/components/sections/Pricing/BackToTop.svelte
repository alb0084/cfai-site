<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let threshold = 200;

	let visible = false;

	function onScroll() {
		if (!browser) return;
		visible = window.scrollY > threshold;
	}

	function toTop() {
		if (!browser) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		if (!browser) return;
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll(); // inizializza lo stato
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<button class="fab-up" class:visible aria-label="Back to top" on:click={toTop}>
	<svg
		class="fab-up__icon"
		width="34"
		height="34"
		viewBox="0 0 24 24"
		fill="none"
		stroke="white"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<polyline points="9 18 15 12 9 6" />
	</svg>
</button>

<style src="./BackToTop.css">
</style>
