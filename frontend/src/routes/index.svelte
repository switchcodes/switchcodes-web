<script context="module">
	export const prerender = true;
</script>

<script>
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div id="hero">
		<div class="spacer">
			<h1>We make projects for fun</h1>
			<h2>
				The community is always there to give helpful advice,<br />
				become a part of it
			</h2>
			<input type="button" value="Start now" />
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
	}

	input {
		width: fit-content;
		height: fit-content;
		border: none;
		color: #fff;
		background-color: var(--button-bg-color);
		font-size: 2em;
		font-weight: 600;
		padding: 0.4em 1.5em;
		cursor: pointer;
		margin-top: 3em;
	}

	.spacer {
		height: 100%;
		margin: 0 10em;
	}

	#hero {
		width: 100%;
		aspect-ratio: 1920/700;
		background-image: url('../assets/heroBanner_HD.png');
		background-repeat: round;
		background-size: cover;
	}

	h1 {
		color: var(--headline-text-color);
		text-align: left;
		font-size: 5em;
		font-weight: 500;
		margin: 0;
		padding: 0;
		padding-top: 1.5em;
	}

	h2 {
		color: var(--headline-text-color);
		text-align: left;
		font-size: 2em;
		font-weight: 400;
		margin: 0;
		margin-top: 0.8em;
		padding: 0;
	}
</style>
