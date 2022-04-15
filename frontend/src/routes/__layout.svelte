<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Footer from '$lib/header/Footer.svelte';
</script>

<div class="h-full relative">
	<Header />
	
	<main class="w-full h-full p-0 m-0 flex flex-col">
		<slot />
	</main>
	<Footer />
</div>
