<script context="module">
	export const prerender = true;
	// import heroBannerHD from '$lib/../assets/heroBanner_HD.png';
	// import heroBannerMD from '$lib/../assets/heroBanner_MD.png';
	// import heroBanner4K from '$lib/../assets/heroBanner.png';
</script>

<script>
	// // @ts-ignore
	// import logo_AVIF from '../assets/logoRender.png?width=500,700,1000,14000&avif&srcset';
	// // @ts-ignore
	// import logo_WEBP from '../assets/logoRender.png?width=500,700,1000,14000&webp&srcset';

	// create a small placeholder and import its metadata
	// import {
	// 	src as logo_src,
	// 	width as logo_width,
	// 	height as logo_height
	// 	// @ts-ignore
	// } from '../assets/logoRender.png?width=500;700;1000;14000&metadata';
	import logoRender from '../assets/logoRenderCropped.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<article class="bg-bright2 h-full w-full">
	<section
		class="font-barlow text-bright1 from-darkblue to-darkblue2 flex h-[calc(100vh_-_8rem)] w-full  flex-col justify-around bg-gradient-to-br bg-cover p-4 py-16 text-3xl  font-medium md:h-[calc(100vh_-_12rem)]"
	>
		<div>
			<picture
				class="absolute right-0 top-5 z-0 hidden h-96 w-96 md:block md:opacity-30 lg:opacity-50"
			>
				<img
					src={logoRender}
					alt="displays a rendered version of the switchcodes logo"
					class="z-0"
				/>
			</picture>
			<h1 class="z-30 pb-2 text-4xl font-semibold">We make projects for fun</h1>
			<h3 class="z-30 mb-12 text-2xl font-light md:mb-48">
				Make more of your life and do something for the community too
			</h3>
			<a sveltekit:prefetch href="/selection" class="bg-dark1 focus:bg-dark2 py-4 px-8 shadow-lg">
				Learn more
			</a>
		</div>
		<div class="text-md grid place-items-center pt-32 font-light">More content coming soon</div>
	</section>
</article>
