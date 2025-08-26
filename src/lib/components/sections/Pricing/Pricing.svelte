<script>
	import CTA from './CTA.svelte';
	import imageRoboCTASrc from '$lib/assets/robotCTA.png';
	import BackToTop from './BackToTop.svelte'; // 👈
</script>

<section class="pricing">
	<header class="pricing-head">
		<h2 class="pricing-title">Pricing Section</h2>
	</header>

	<article class="price-card" aria-labelledby="price">
		<div class="card-glow" aria-hidden="true"></div>

		<div class="price-row">
			<span id="price" class="price-amount">€5.99</span>
		</div>

		<div class="license-pill">Lifetime Active License</div>

		<div class="desc">
			<p>
				<strong>Description:</strong> Pay once, it’s yours forever. Activation is done directly inside
				the app.
			</p>
		</div>

		<div class="section-title">What you get for <strong>€5.99</strong></div>
		<hr class="divider" />

		<ul class="benefits">
			<li>
				<strong>Advanced AI Features:</strong> Access to real-time cognitive enhancements, decision-making
				support, and personalized AI assistance.
			</li>
			<li>
				<strong>Future Updates:</strong> All listed features are included today. As Cognitive Flow AI
				grows, you’ll get free improvements, with optional premium upgrades available to unlock even
				more power.
			</li>

			<li>
				<strong>One-Time Payment:</strong> This is a locked price for early adopters. No subscription
				model at this stage—just one simple payment to unlock the full suite of features.
			</li>
		</ul>

		<div class="note">
			<span>Note: Early Access price valid until December</span>
		</div>
	</article>

	<div class="pricing-cta">
		<CTA
			title="Start Enhancing Your Thinking Today"
			subtitle="Experience real-time cognitive enhancement with Cognitive Flow AI."
			buttonLabel="Download Now"
			{imageRoboCTASrc}
		/>
	</div>
</section>

<BackToTop threshold={250} />

<style src="./Pricing.css"></style>
