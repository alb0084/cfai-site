<script lang="ts">
	import { onMount } from 'svelte';

	let showEmail = false;

	function handleScroll() {
		const scrollPosition = window.innerHeight + window.scrollY;
		const bottom = document.body.offsetHeight - 50;
		showEmail = scrollPosition >= bottom;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

{#if showEmail}
	<span class="animate-fade-in fixed bottom-4 left-1/2 -translate-x-1/2">support@cfai.io</span>
{/if}

<style>
	/* Fade-in semplice */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in {
		animation: fadeIn 0.4s ease-out;
	}
</style>
