<script context="module">
	export const prerender = true;
	// import heroBannerHD from '$lib/../assets/heroBanner_HD.png';
	// import heroBannerMD from '$lib/../assets/heroBanner_MD.png';
	// import heroBanner4K from '$lib/../assets/heroBanner.png';
</script>

<script>
	// @ts-ignore
	import heroBannerMD_AVIF from '../assets/heroBanner_SM.png?w=787;1000&avif&srcset';
	// @ts-ignore
	import heroBannerMD_WEBP from '../assets/heroBanner_SM.png?w=787;1000&webp&srcset';
	// @ts-ignore
	import heroBannerHD_AVIF from '../assets/heroBanner_HD.png?w=500;700;900;1200&avif&srcset';
	// @ts-ignore
	import heroBannerHD_WEBP from '$lib/../assets/heroBanner_HD.png?w=500;700;900;1200&webp&srcset';

	// create a small placeholder and import its metadata
	import {
		src as phHD,
		width as HDw,
		height as HDh
		// @ts-ignore
	} from '$lib/../assets/heroBanner_HD.png?width=300&metadata';
	import {
		src as phMD,
		width as MDw,
		height as MDh
		// @ts-ignore
	} from '$lib/../assets/heroBanner_SM.png?width=787&metadata';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="md:relative bg-gradient-to-br from-darkbg to-dark0 bg-cover bg-no-repeat">
	<!-- <picture class="md:block hidden">
		<source srcset="${heroBannerHD_AVIF}" type="image/avif" />
		<source srcset="${heroBannerHD_WEBP}" type="image/webp" />
		<img
			src="${phHD}"
			width="${HDw}"
			height="${HDh}"
			alt="displays a rendered version of the switchcodes logo"
		/>
	</picture>
	<picture class="md:hidden block">
		<source srcset="${heroBannerMD_AVIF}" type="image/avif" />
		<source srcset="${heroBannerMD_WEBP}" type="image/webp" />
		<img
			src="${phMD}"
			width="${MDw}"
			height="${MDh}"
			alt="displays a rendered version of the switchcodes logo"
		/>
	</picture> -->
	<div class="md:absolute md:top-10 md:left-5 p-4 font-barlow text-bright1 text-3xl font-medium ">
		<h1 class="font-semibold text-4xl pb-2">We make projects for fun</h1>
		<h3 class="font-light text-2xl">
			Make more of your life and do something for the community too
		</h3>
	</div>
</section>
