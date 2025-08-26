<script lang="ts">
	import Header from '$lib/components/sections/Header/Header.svelte';
	import Hero from '$lib/components/sections/Hero/Hero.svelte';
	import WhatIsCognitiveFlowAI from '$lib/components/sections/WhatIsCognitiveFlowAI/WhatIsCognitiveFlowAI.svelte';
	import FeaturesSection from '$lib/components/sections/FeaturesSection/FeaturesSection.svelte';
	import HowItWorks from '$lib/components/sections/HowItWorks/HowItWorks.svelte';
	import UseCases from '$lib/components/sections/UseCases/UseCases.svelte';
	import Pricing from '$lib/components/sections/Pricing/Pricing.svelte';
	import Footer from '$lib/components/sections/Footer/Footer.svelte';

	import { onMount } from 'svelte';
	let visits: number | null = null;

	onMount(async () => {
		const res = await fetch(`/scripts/counter.php?ts=${Date.now()}`, {
			cache: 'no-store',
			credentials: 'include' 
		});
		const data = await res.json();
		visits = data.visits;
		console.log('📊 visits:', visits);
	});
</script>

<main class="site-wrap">
	<div class="site-container">
		<Header />
		<Hero />
		<WhatIsCognitiveFlowAI />
		<FeaturesSection />
		<HowItWorks />
		<UseCases />
		<Pricing />
		<Footer />
	</div>
</main>
