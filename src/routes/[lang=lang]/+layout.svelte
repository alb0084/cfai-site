<script lang="ts">
	export let data: { lang: string; dict: Record<string, any> };
	import { initI18n } from '$lib/i18n/i18n';

	$: initI18n(data.lang as 'en' | 'it', data.dict);
</script>

<slot />
