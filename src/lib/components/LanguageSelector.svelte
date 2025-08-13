<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';

	let open = false;
	let currentLang = 'en';

	const languages = [
		{ code: 'en', label: 'En' },
		{ code: 'it', label: 'It' }
	];

	const unsubscribe = page.subscribe(($page) => {
		currentLang = $page.params.lang || 'en';
	});
	onDestroy(unsubscribe);

	function handleClickOutside(event: MouseEvent) {
		const menu = document.getElementById('lang-menu');
		if (menu && !menu.contains(event.target as Node)) open = false;
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	function changeLang(lang: string) {
		if (lang !== currentLang) {
			const path = window.location.pathname.split('/').slice(2).join('/') || '';
			goto(`/${lang}/${path}`);
			open = false;
		}
	}
</script>

<div class="fixed bottom-4 left-4">
	<div id="lang-menu" class="relative">
		<button
			on:click={() => (open = !open)}
			class="flex items-center gap-2 rounded-lg border-0 bg-blue-500 px-4 py-2 font-medium text-white transition outline-none hover:bg-blue-600"
		>
			{languages.find((l) => l.code === currentLang)?.label}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="h-4 w-4"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</button>

		{#if open}
			<!-- ⬇️ le stesse classi che avevi prima -->
			<ul
				class="animate-fadeIn absolute bottom-full mb-2 w-24 list-none rounded-lg border border-gray-200 bg-white p-0"
			>
				{#each languages as lang}
					<li>
						<a
							href="/{lang.code}"
							on:click|preventDefault={() => changeLang(lang.code)}
							class="block flex items-center gap-2 px-4 py-2 text-gray-900 no-underline hover:bg-gray-100"
							class:bg-gray-50={lang.code === currentLang}
							class:font-semibold={lang.code === currentLang}
						>
							{lang.label}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fadeIn {
		animation: fadeIn 0.15s ease-out;
	}
</style>
