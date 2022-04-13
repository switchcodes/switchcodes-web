<script context="module">
	export const prerender = true;
	import heroBannerHD from '$lib/../assets/herobanner_HD.png';
</script>

<script>
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="relative">
	<img
		src={heroBannerHD}
		class="w-full h-auto"
		alt="displays a rendered version of the switchcodes logo"
	/>
	<div class="absolute top-60 left-40 font-barlow text-bright1 text-9xl font-medium">
		We make projects for fun
	</div>
</section>
