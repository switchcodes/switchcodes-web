<script>
	let menuVisible = false;
	let styling =
		'outline-none before:border-x-transparent before:border-b-16 before:border-b-bright1 before:-top-3 before:absolute before:right-2 before:h-0 before:w-0 before:border-x-16 absolute bg-bright1 rounded-sm drop-shadow-2xl top-full mt-4 mr-2 right-0 p-4 gap-3 font-barlow font-light text-darkbg text-3xl text-right';
	let btnHandler = () => {
		menuVisible = !menuVisible;
	};
</script>

<div class="relative h-full">
	<button class="h-full" on:click={btnHandler}>
		<svg class="h-full p-4" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="128" height="24.9756" fill="#61B8E8" />
			<rect y="34.3418" width="128" height="24.9756" fill="#269DE0" />
			<rect y="68.6826" width="128" height="24.9756" fill="#1978AD" />
			<rect y="103.024" width="128" height="24.9756" fill="#115175" />
		</svg>
	</button>
	<ul class={menuVisible ? styling + ' grid' : 'hidden'}>
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
	</ul>
</div>
