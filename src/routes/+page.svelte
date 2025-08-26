<script lang="ts">
	import Header from '$lib/components/sections/Header/Header.svelte';
	import Hero from '$lib/components/sections/Hero/Hero.svelte';
	import WhatIsCognitiveFlowAI from '$lib/components/sections/WhatIsCognitiveFlowAI/WhatIsCognitiveFlowAI.svelte';
	import FeaturesSection from '$lib/components/sections/FeaturesSection/FeaturesSection.svelte';
	import HowItWorks from '$lib/components/sections/HowItWorks/HowItWorks.svelte';
	import UseCases from '$lib/components/sections/UseCases/UseCases.svelte';
	import Pricing from '$lib/components/sections/Pricing/Pricing.svelte';
	import Footer from '$lib/components/sections/Footer/Footer.svelte';
	if (typeof window !== 'undefined') {
		fetch('/scripts/counter.php')
			.then((res) => res.json())
			.then((data) => console.log('✅ Visite:', data.visits))
			.catch((err) => console.error('❌ Errore counter:', err));
	}
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
