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

<article class="pt-16 md:pt-24 h-full w-full bg-bright2">
	<section
		class="p-4 py-16 h-full w-full flex flex-col justify-around font-barlow text-bright1 text-3xl font-medium bg-gradient-to-br from-darkbg to-dark0 bg-cover"
	>
	<div>
		<picture
			class="hidden md:block md:opacity-30 lg:opacity-50 w-96 h-96 absolute right-0 top-5 z-0"
		>
			<img src={logoRender} alt="displays a rendered version of the switchcodes logo" class="z-0" />
		</picture>
		<h1 class="font-semibold text-4xl pb-2 z-30">We make projects for fun</h1>
		<h3 class="font-light text-2xl md:mb-48 z-30 mb-12">
			Make more of your life and do something for the community too
		</h3>
		<a
			sveltekit:prefetch
			href="/selection"
			class="bg-dark1 focus:bg-dark2 py-4 px-8 shadow-lg"
		>
			Learn more
		</a>
	</div>
	<div class="font-light text-md grid place-items-center pt-32">
		More content coming soon
	</div>
	</section>
	<!-- <section class=" w-full grid place-items-center font-barlow font-bold text-darkbg">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum adipisci consequuntur
		exercitationem dolores? Sapiente temporibus delectus distinctio autem beatae voluptas eveniet
		molestiae, tempore aliquam in consectetur magni illo voluptatem quod! Lorem ipsum dolor sit amet
		consectetur adipisicing elit. Excepturi blanditiis harum tempora alias necessitatibus mollitia
		dolorem voluptatum unde, quasi voluptas deserunt ex libero impedit sint, minima nobis officiis,
		provident atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim delectus tenetur
		minima velit, veritatis magni ducimus reiciendis molestiae ea impedit atque. Corporis maxime
		illo perspiciatis architecto molestiae dignissimos rem veniam labore earum iusto distinctio
		minima asperiores accusamus nihil est quae voluptatem doloremque quidem, veritatis quo? Ab
		aspernatur hic eveniet libero! Excepturi corrupti sed optio aliquam officiis ut quam culpa,
		quidem tempora provident fugiat molestias enim accusamus debitis deleniti repudiandae.
		Repellendus perferendis consequuntur suscipit adipisci, minus rerum! Dicta praesentium nostrum
		repudiandae sit. Sit consequatur error ab cupiditate maxime incidunt illo cum est. The page
		you're looking at is purely static HTML, with no client-side interactivity needed. Because of
		that, we don't need to load any JavaScript. Try viewing the page's source, or opening the
		devtools network panel and reloading. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		Laborum adipisci consequuntur exercitationem dolores? Sapiente temporibus delectus distinctio
		autem beatae voluptas eveniet molestiae, tempore aliquam in consectetur magni illo voluptatem
		quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis harum
		tempora alias necessitatibus mollitia dolorem voluptatum unde, quasi voluptas deserunt ex libero
		impedit sint, minima nobis officiis, provident atque. Lorem ipsum dolor sit, amet consectetur
		adipisicing elit. Enim delectus tenetur minima velit, veritatis magni ducimus reiciendis
		molestiae ea impedit atque. Corporis maxime illo perspiciatis architecto molestiae dignissimos
		rem veniam labore earum iusto distinctio minima asperiores accusamus nihil est quae voluptatem
		doloremque quidem, veritatis quo? Ab aspernatur hic eveniet libero! Excepturi corrupti sed optio
		aliquam officiis ut quam culpa, quidem tempora provident fugiat molestias enim accusamus debitis
		deleniti repudiandae. Repellendus perferendis consequuntur suscipit adipisci, minus rerum! Dicta
		praesentium nostrum repudiandae sit. Sit consequatur error ab cupiditate maxime incidunt illo
		cum est. The page you're looking at is purely static HTML, with no client-side interactivity
		needed. Because of that, we don't need to load any JavaScript. Try viewing the page's source, or
		opening the devtools network panel and reloading. Lorem ipsum dolor sit amet, consectetur
		adipisicing elit. Laborum adipisci consequuntur exercitationem dolores? Sapiente temporibus
		delectus distinctio autem beatae voluptas eveniet molestiae, tempore aliquam in consectetur
		magni illo voluptatem quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
		blanditiis harum tempora alias necessitatibus mollitia dolorem voluptatum unde, quasi voluptas
		deserunt ex libero impedit sint, minima nobis officiis, provident atque. Lorem ipsum dolor sit,
		amet consectetur adipisicing elit. Enim delectus tenetur minima velit, veritatis magni ducimus
		reiciendis molestiae ea impedit atque. Corporis maxime illo perspiciatis architecto molestiae
		dignissimos rem veniam labore earum iusto distinctio minima asperiores accusamus nihil est quae
		voluptatem doloremque quidem, veritatis quo? Ab aspernatur hic eveniet libero! Excepturi
		corrupti sed optio aliquam officiis ut quam culpa, quidem tempora provident fugiat molestias
		enim accusamus debitis deleniti repudiandae. Repellendus perferendis consequuntur suscipit
		adipisci, minus rerum! Dicta praesentium nostrum repudiandae sit. Sit consequatur error ab
		cupiditate maxime incidunt illo cum est.Lorem ipsum dolor sit amet, consectetur adipisicing
		elit. Laborum adipisci consequuntur exercitationem dolores? Sapiente temporibus delectus
		distinctio autem beatae voluptas eveniet molestiae, tempore aliquam in consectetur magni illo
		voluptatem quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis
		harum tempora alias necessitatibus mollitia dolorem voluptatum unde, quasi voluptas deserunt ex
		libero impedit sint, minima nobis officiis, provident atque. Lorem ipsum dolor sit, amet
		consectetur adipisicing elit. Enim delectus tenetur minima velit, veritatis magni ducimus
		reiciendis molestiae ea impedit atque. Corporis maxime illo perspiciatis architecto molestiae
		dignissimos rem veniam labore earum iusto distinctio minima asperiores accusamus nihil est quae
		voluptatem doloremque quidem, veritatis quo? Ab aspernatur hic eveniet libero! Excepturi
		corrupti sed optio aliquam officiis ut quam culpa, quidem tempora provident fugiat molestias
		enim accusamus debitis deleniti repudiandae. Repellendus perferendis consequuntur suscipit
		adipisci, minus rerum! Dicta praesentium nostrum repudiandae sit. Sit consequatur error ab
		cupiditate maxime incidunt illo cum est. The page you're looking at is purely static HTML, with
		no client-side interactivity needed. Because of that, we don't need to load any JavaScript. Try
		viewing the page's source, or opening the devtools network panel and reloading. Lorem ipsum
		dolor sit amet, consectetur adipisicing elit. Laborum adipisci consequuntur exercitationem
		dolores? Sapiente temporibus delectus distinctio autem beatae voluptas eveniet molestiae,
		tempore aliquam in consectetur magni illo voluptatem quod! Lorem ipsum dolor sit amet
		consectetur adipisicing elit. Excepturi blanditiis harum tempora alias necessitatibus mollitia
		dolorem voluptatum unde, quasi voluptas deserunt ex libero impedit sint, minima nobis officiis,
		provident atque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim delectus tenetur
		minima velit, veritatis magni ducimus reiciendis molestiae ea impedit atque. Corporis maxime
		illo perspiciatis architecto molestiae dignissimos rem veniam labore earum iusto distinctio
		minima asperiores accusamus nihil est quae voluptatem doloremque quidem, veritatis quo? Ab
		aspernatur hic eveniet libero! Excepturi corrupti sed optio aliquam officiis ut quam culpa,
		quidem tempora provident fugiat molestias enim accusamus debitis deleniti repudiandae.
		Repellendus perferendis consequuntur suscipit adipisci, minus rerum! Dicta praesentium nostrum
		repudiandae sit. Sit consequatur error ab cupiditate maxime incidunt illo cum est. The page
		you're looking at is purely static HTML, with no client-side interactivity needed. Because of
		that, we don't need to load any JavaScript. Try viewing the page's source, or opening the
		devtools network panel and reloading. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		Laborum adipisci consequuntur exercitationem dolores? Sapiente temporibus delectus distinctio
		autem beatae voluptas eveniet molestiae, tempore aliquam in consectetur magni illo voluptatem
		quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis harum
		tempora alias necessitatibus mollitia dolorem voluptatum unde, quasi voluptas deserunt ex libero
		impedit sint, minima nobis officiis, provident atque. Lorem ipsum dolor sit, amet consectetur
		adipisicing elit. Enim delectus tenetur minima velit, veritatis magni ducimus reiciendis
		molestiae ea impedit atque. Corporis maxime illo perspiciatis architecto molestiae dignissimos
		rem veniam labore earum iusto distinctio minima asperiores accusamus nihil est quae voluptatem
		doloremque quidem, veritatis quo? Ab aspernatur hic eveniet libero! Excepturi corrupti sed optio
		aliquam officiis ut quam culpa, quidem tempora provident fugiat molestias enim accusamus debitis
		deleniti repudiandae. Repellendus perferendis consequuntur suscipit adipisci, minus rerum! Dicta
		praesentium nostrum repudiandae sit. Sit consequatur error ab cupiditate maxime incidunt illo
		cum est.
	</section> -->
</article>
