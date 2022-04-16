<script context="module">
	export const prerender = true;
</script>

<script>
	import logoRender from '../assets/logoRenderCropped.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<article class="bg-bright2 h-full w-full">
	<section
		class="font-barlow text-bright1 from-darkblue to-darkblue2 flex h-[calc(100vh_-_8rem)] w-full flex-col justify-around bg-gradient-to-br bg-cover p-4 py-16 text-3xl font-medium  md:relative md:h-[calc(100vh_-_12rem)]"
	>
		<picture
			class="absolute right-0 top-5 hidden h-96 w-96 md:block md:opacity-30 lg:right-4 lg:top-16 lg:opacity-50 xl:right-8 xl:top-24 xl:h-2/6 xl:w-2/6"
		>
			<img src={logoRender} alt="displays a rendered version of the switchcodes logo" class="z-0" />
		</picture>
		<div class="md:pl-8 md:pt-24 xl:pl-40">
			<h1 class="z-30 pb-2 text-4xl font-semibold xl:text-7xl">We make projects for fun</h1>
			<h3 class="z-30 mb-12 text-2xl font-light md:mb-24 xl:text-4xl">
				Make more of your life and do something for the community too
			</h3>
			<a sveltekit:prefetch href="/selection" class="bg-dark1 focus:bg-dark2 py-4 px-8 shadow-lg">
				Learn more
			</a>
		</div>
		<div class="text-md grid place-items-center pt-32 font-light">More content coming soon</div>
	</section>
</article>
