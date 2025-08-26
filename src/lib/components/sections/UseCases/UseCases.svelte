<script>
	import DemoSvg from '$lib/assets/useCases.svg';
	import arrowUp from '$lib/assets/arrowUp.svg';
</script>

<section class="use-cases">
	<header class="uc-head">
		<h2 class="uc-title">Use Cases</h2>
		<p class="uc-subtitle">Who Can Benefit from Cognitive Flow AI?</p>
	</header>

	<!-- LISTA CARD -->
	<div class="uc-list">
		<div class="uc-item">
			<div class="uc-item-content">
				Boost productivity and communication with fast AI interactions, real-time transcription, and
				decision prediction tools.
			</div>
		</div>

		<div class="uc-item">
			<div class="uc-item-content">
				Empower your presentations, training sessions, and coaching with real-time feedback and
				cognitive enhancements.
			</div>
		</div>

		<div class="uc-item">
			<div class="uc-item-content">
				Improve interview processes, decision-making, and team communication with personalized AI
				assistance.
			</div>
		</div>

		<div class="uc-item">
			<div class="uc-item-content">
				Streamline content creation, sales pitches, and marketing strategies with instant
				transcriptions and intelligent insights.
			</div>
		</div>

		<div class="uc-item">
			<div class="uc-item-content">
				Enhance technical decision-making and communication with real-time cognitive support and
				transcription features.
			</div>
		</div>
	</div>
	<!-- 🔴 CHIUSURA QUI -->

	<!-- SEZIONI CENTRALI -->
	<div class="uc-media">
		<img src={DemoSvg} alt="Use cases demo" />
	</div>

	<div class="uc-cta">
		<button class="btn-primary__" disabled>
			See How it Works For You
			<span class="arrow" aria-hidden="true">
				<img src={arrowUp} alt="" />
			</span>
		</button>
	</div>
</section>

<style src="./UseCases.css"></style>
