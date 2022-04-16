<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const element = document.getElementById('back-link');
		element.setAttribute('href', document.referrer);
		element.onclick = function () {
			history.back();
			return false;
		};
	});
</script>

<section
	class="font-barlow text-darkblue2 flex h-[calc(100vh_-_8rem)] w-full flex-col items-center justify-center text-center md:h-[calc(100vh_-_12rem)]"
>
	<h1 class="border-darkblue2 h-fit w-fit border-8 p-2 text-7xl font-semibold sm:p-4 sm:text-9xl">
		Error<br /> 404
	</h1>
	<h3 class="mt-4 text-4xl font-light">This page could not be found</h3>
	<div class="w-full pt-8">
		<a
			id="back-link"
			class="before:border-t-darkblue2 after:bg-darkblue2 relative mt-8 w-fit text-2xl font-bold before:absolute before:-left-4 before:-bottom-[0.05em] before:h-1 before:w-1 before:-rotate-45 before:border-x-8 before:border-t-8 before:border-x-transparent after:absolute after:-left-3 after:right-0 after:bottom-0 after:h-[0.1em] after:w-[calc(100%_+_0.75em)]"
		>
			Go back
		</a>
	</div>
</section>
