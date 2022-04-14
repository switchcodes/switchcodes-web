<script>
	let menuVisible = false;
	let styling =
		'before:border-x-transparent before:border-b-16 before:border-b-bright1 before:-top-3 before:absolute before:-right-0 before:h-0 before:w-0 before:border-x-16 absolute bg-bright1 rounded-md drop-shadow-2xl top-full m-4 right-0 p-4 gap-3 font-barlow font-light text-darkbg text-3xl text-right';
	let btnHandler = () => {
		menuVisible = !menuVisible;
	};
</script>
<div class="h-full relative ">
	<button class="h-full" on:click={btnHandler}>
		<svg class="h-full p-4" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="128" height="24.9756" fill="#61B8E8" />
			<rect y="34.3418" width="128" height="24.9756" fill="#269DE0" />
			<rect y="68.6826" width="128" height="24.9756" fill="#1978AD" />
			<rect y="103.024" width="128" height="24.9756" fill="#115175" />
		</svg>
	</button>
	<ul class={menuVisible ? styling + ' grid' : 'hidden'}>
		<!-- <svg
			class="h-5 w-full absolute top-0 stroke-darkbg stroke-1"
			viewBox="0 0 32 7"
			preserveAspectRatio="none"
		>
			<path d="M0 3 L22 3 L25 1 L28 3 L32 3" fill="none" />
			<path d="M0 6 L22 6 L25 4 L28 6 L32 6" fill="none" />
		</svg> -->
		<li on:click={btnHandler}>
			<a sveltekit:prefetch href="/about" class="active:font-medium"> About </a>
		</li>
		<li on:click={btnHandler}>
			<a sveltekit:prefetch href="/projects" class="active:font-medium"> Projects </a>
		</li>
		<li on:click={btnHandler}>
			<a sveltekit:prefetch href="/inspiration" class="active:font-medium"> Inspiration </a>
		</li>
		<li on:click={btnHandler}>
			<a sveltekit:prefetch href="/contact" class="active:font-medium"> Contact </a>
		</li>
		<!-- <svg
			class="h-5 w-full absolute bottom-0 stroke-darkbg stroke-1"
			viewBox="0 0 32 7"
			preserveAspectRatio="none"
		>
			<path d="M0 3 L32 3" fill="none" />
			<path d="M0 6 L32 6" fill="none" />
		</svg> -->
	</ul>
</div>
