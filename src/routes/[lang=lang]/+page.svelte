<script lang="ts">
	import Logo from '$lib/assets/logo.png';
	import cfaiImg from '$lib/assets/cfai_main_pages.png';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import VersionBadge from '$lib/components/VersionBadge.svelte';
	import FooterEmail from '$lib/components/FooterEmail.svelte';
	import { t } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';

	let visits: number | null = null;

	onMount(async () => {
		try {
			const res = await fetch('/scripts/counter.php');
			const data = await res.json();
			visits = data.visits;
		} catch (err) {
			console.error('Error fetching counter:', err);
		}
	});
</script>

<header class="header">
	<img src={Logo} alt="CFAI Logo" title="Conv Flow AI" class="logo" />
	{#if visits !== null}
		<span class="ml-4 rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-700 shadow-sm" > 👥 {visits} {visits >=10 ? $t('header.visitors'): $t('header.visitor')} </span>
	{/if}
	<span class="header-btn cursor-not-allowed no-underline opacity-50" aria-disabled="true">
		{$t('header.download')}
	</span>
</header>

<section class="hero ml-2 md:ml-8">
	<h1 class="hero-title">{$t('hero.title')}</h1>
	<p class="hero-subtitle">{$t('hero.subtitle')}</p>
	<p class="mb-3 text-lg text-gray-500 italic">
		{$t('hero.slogan', { prepositionFor: 'for', prepositionWith: 'with' })}
	</p>
	<p class="mb-4 text-base text-gray-700"></p>
	<p class="mb-2 text-base font-semibold">
		{$t('hero.slogan2')} <strong>CFAI UI</strong>
		{$t('hero.nowFor')}
		<span class="rounded bg-red-100 px-1 text-xs font-bold text-red-500">
			{$t('hero.percentage')}
		</span>
		<span class="ml-1 text-sm text-gray-400 line-through">{'(' + $t('hero.price') + ')'}</span>
		<span class="ml-1 text-2xl font-extrabold">{$t('hero.specialPrice')}</span>, {$t(
			'hero.slogan3'
		)}
		<span class="text-sm text-gray-500">({$t('hero.slogan4')})</span>
	</p>
	<p>
		<span class="text-500 text-2xl font-semibold">{$t('hero.slogan5')}</span>
	</p>
	<p class="mt-4 text-base text-gray-700">
		<span>
			{$t('hero.slogan6')}
		</span>
	</p>
</section>

<section class="hero-image">
	<div class="container-hero-img">
		<img src={cfaiImg} alt="CFAI Hero Image" class="cfai-hero-img" />
		<a href="/" class="header-btn cursor-not-allowed no-underline opacity-50">
			{$t('hero.cta')}
		</a>
	</div>
</section>

<section class="guida">
	<h2 class="mb-4 text-xl font-bold">{$t('guide.title')}</h2>
	<ol class="guida-list">
		<li>{$t('guide.steps.get')}</li>
		<li>{$t('guide.steps.install')}</li>
		<li>{$t('guide.steps.setup')}</li>
		<li>
			{@html $t('guide.steps.read', {
				link: `<a href="/"  class="text-blue-600 hover:underline cursor-not-allowed opacity-50">${$t('guide.link')}</a>`
			})}
		</li>
	</ol>
</section>

<LanguageSelector />
<FooterEmail />
<VersionBadge label="Site V." version="0.0.1" href={null} />
