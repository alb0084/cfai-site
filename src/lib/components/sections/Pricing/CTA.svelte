<script>
	import arrowUp from '$lib/assets/arrowUp.svg';

	export let title = 'Start Enhancing Your Thinking Today';
	export let subtitle = 'Experience real-time cognitive enhancement with Cognitive Flow AI.';
	export let buttonLabel = 'Download Now';
	export let imageRoboCTASrc = '';
	let imageAlt = 'Robot Image';

	// immagine a destra (metti il tuo path)
</script>

<section class="cta">
	<!-- glow decorativo -->
	<div class="cta-glow" aria-hidden="true"></div>

	<div class="cta-inner">
		<div class="cta-copy">
			<h3 class="cta-title">{title}</h3>
			<p class="cta-subtitle">{subtitle}</p>

			<a
				class="btn-primary____"
				href="https://github.com/alb0084/cfai-releases/releases/download/v0.0.1/CFAI.Setup.0.0.1.exe"
				download
			>
				{buttonLabel}
				<span class="arrow" aria-hidden="true">
					<img src={arrowUp} alt="Arrow Up" />
				</span>
			</a>
		</div>

		<div class="cta-media">
			<img src={imageRoboCTASrc} alt={imageAlt} />
		</div>
	</div>
</section>

<style src="./CTA.css">
</style>
