<script lang="ts">
	import logoSrc from '$lib/assets/logo.png';
	import mailIconSrc from '$lib/assets/image_footer_cfai/Frame_1.svg';
	import igIconSrc from '$lib/assets/image_footer_cfai/mdi_instagram.svg';
	import xIconSrc from '$lib/assets/image_footer_cfai/Frame.svg';
</script>

<footer class="footer">
	<div class="footer-top">
		<!-- Colonna sinistra -->
		<div class="footer-left">
			{#if logoSrc}
				<img class="footer-logo" src={logoSrc} alt="Logo App" title="Cognitive Flow AI" />
			{/if}

			<a class="footer-mail" href="mailto:support@cfai.io">
				{#if mailIconSrc}<img src={mailIconSrc} alt="" aria-hidden="true" />{/if}
				support@cfai.io
			</a>

			<div class="footer-social">
				{#if igIconSrc}
					<a class="social-btn" href="https://instagram.com" target="_blank" rel="noreferrer">
						<img src={igIconSrc} alt="Instagram" />
					</a>
				{/if}
				{#if xIconSrc}
					<a class="social-btn" href="https://x.com" target="_blank" rel="noreferrer">
						<img src={xIconSrc} alt="X / Twitter" />
					</a>
				{/if}
			</div>
		</div>

		<!-- Colonna destra: bottoni -->
		<div class="footer-actions">
			<a
				class="btn btn-primary"
				href="https://github.com/alb0084/cfai-releases/releases/download/v0.0.1/CFAI.Setup.0.0.1.exe"
				>Download</a
			>
			<a
				class="btn btn-outline"
				download="CFAI_reference_guide.pdf"
				href="/CFAI_reference_guide.pdf">Download User Guide</a
			>
		</div>
	</div>

	<hr class="footer-divider" />

	<div class="footer-bottom">
		<p class="copyright">© 2025 Cognitive Flow AI. All Rights Reserved.</p>
	</div>
</footer>

<style src="./Footer.css">
</style>
