<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main
	class="w-full h-full p-0 m-0 relative"
>
	<slot />
</main>
