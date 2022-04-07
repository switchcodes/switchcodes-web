<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
</style>
