<script lang="ts">
	export let label = 'Site';
	export let version = '0.0.1';
	export let href: string | null = '/changelog'; // metti null se non vuoi il link
</script>

<div class="fixed right-4 bottom-4">
	{#if href}
		<a
			{href}
			class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-700 no-underline transition hover:bg-white"
			aria-label={`Open ${label} version ${version} changelog`}
		>
			<span class="opacity-70">{label}</span>
			<span class="font-semibold">{version}</span>
		</a>
	{:else}
		<span
			class="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-700"
			aria-label={`${label} version ${version}`}
		>
			<span class="opacity-70">{label}</span>
			<span class="font-semibold">{version}</span>
		</span>
	{/if}
</div>
