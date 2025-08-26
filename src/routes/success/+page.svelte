<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const timer = setTimeout(() => {
			window.close();
		}, 5000);

		return () => clearTimeout(timer);
	});
</script>

<h1>✅ Payment Successful</h1>
<p>Thank you for unlocking CFAI. You now have full access!</p>
<p>This window will close automatically in 5 seconds.</p>

<style>
:global(body) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

h1, p {
    text-align: center;
    margin: 0.5em 0;
}
</style>
