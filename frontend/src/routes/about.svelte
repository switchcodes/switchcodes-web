<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<!-- TODO lose the @next! -->
	<pre>npm init svelte@next</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading. Lorem ipsum dolor sit amet, consectetur adipisicing
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
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>

<style>
	/* .content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	} */
</style>
