<script lang="ts">
	// icone/illustrazioni (usa i tuoi file)
	import mic from '$lib/assets/Frame4.svg';
	import bot from '$lib/assets/Frame3.svg';
	import camera from '$lib/assets/Frame2.svg';
	import map from '$lib/assets/Frame1.svg';
	import zap from '$lib/assets/Frame.svg';
</script>

<section class="features-section">
	<header class="features-head">
		<h2 class="features-title">Features that Make a Difference</h2>
	</header>

	<div class="features-grid">
		<!-- 1 -->
		<article class="feature-card">
			<div class="card-media gradient-corner">
				<span class="bullet"><img src={mic} alt="" /></span>
			</div>
			<h3 class="card-title">Vocal Transcription</h3>
			<p class="card-text">
				Convert spoken words into text in real time, ensuring you never miss key points during
				conversations or meetings.
			</p>
		</article>

		<!-- 2 -->
		<article class="feature-card">
			<div class="card-media gradient-corner">
				<span class="bullet"><img src={bot} alt="" /></span>
			</div>
			<h3 class="card-title">Chatbot Conversation Transcription</h3>
			<p class="card-text">
				Effortlessly transcribe chatbot interactions to analyze and reference text-based
				conversations for better communication.
			</p>
		</article>

		<!-- 3 -->
		<article class="feature-card">
			<div class="card-media gradient-corner">
				<span class="bullet"><img src={camera} alt="" /></span>
			</div>
			<h3 class="card-title">Screenshot with Vocal Transcription</h3>
			<p class="card-text">
				Capture screenshots along with vocal transcriptions to easily document both visual and
				verbal content simultaneously.
			</p>
		</article>

		<!-- 4 -->
		<article class="feature-card">
			<div class="card-media gradient-corner">
				<span class="bullet"><img src={map} alt="" /></span>
			</div>
			<h3 class="card-title">Cognitive Map Prediction</h3>
			<p class="card-text">
				Visualize decision pathways with AI-driven cognitive map predictions to anticipate outcomes
				and guide your next steps.
			</p>
		</article>

		<!-- 5 -->
		<article class="feature-card">
			<div class="card-media gradient-corner">
				<span class="bullet"><img src={zap} alt="" /></span>
			</div>
			<h3 class="card-title">Controller Fast Interaction</h3>
			<p class="card-text">
				Enable rapid, intuitive responses with the fast interaction controller, ensuring seamless
				real-time communication and decision-making.
			</p>
		</article>
	</div>
</section>

<style src="./FeaturesSection.css"></style>
