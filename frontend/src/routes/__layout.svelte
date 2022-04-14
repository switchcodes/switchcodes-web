<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="h-full grid grid-rows-[1fr_4rem]">
	<div class="h-full">
		<Header />
		<main class="w-full h-full p-0 m-0 flex flex-col">
			<slot />
		</main>
	</div>
	<footer class=" w-full h-full bg-gradient-to-r from-darkblue2 to-darkblue">
		<ul
			class="w-full h-full flex flex-row justify-between p-4 items-center font-barlow text-bright1 text-2xl"
		>
			<li>office@switchcodes.dev</li>
			<li>FAQ</li>
		</ul>
	</footer>
</div>
