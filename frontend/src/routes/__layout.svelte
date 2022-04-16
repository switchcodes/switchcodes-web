<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Footer from '$lib/header/Footer.svelte';
</script>

<Header />

<main class="m-0 flex h-fit w-full flex-col p-0 pt-16 md:pt-24">
	<slot />
</main>
<Footer />
