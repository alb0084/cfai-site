<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/logo.png';
	let { children } = $props();
</script>

<svelte:head>
	<title>CFAI - Cognitive Flow AI</title>
	<meta
		name="description"
		content="Cognitive Flow AI is your cognitive companion: real-time transcription, concept maps, and predictive guidance to think smarter."
	/>
	<meta
		name="keywords"
		content="AI, cognitive assistant, productivity, speech-to-text, concept maps, CFAI, second brain, Cognitive Flow AI"
	/>

	<meta property="og:title" content="CFAI - Cognitive Flow AI" />
	<meta
		property="og:description"
		content="Your AI-powered second brain: transcription, concept mapping, and predictive guidance to boost your thinking."
	/>
	<meta property="og:url" content="https://cfai.io" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://cfai.io/og.png" />

	<link rel="icon" href={logo} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children?.()}
