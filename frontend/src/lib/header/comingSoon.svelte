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
	export let title = 'Site is under construction';
</script>

<section
	class="font-barlow text-darkblue2 flex h-[calc(100vh_-_8rem)] w-full flex-col items-center justify-center text-center md:h-[calc(100vh_-_12rem)] lg:flex-row lg:gap-24"
>
	<svg
		class="w-2/4 pb-8 lg:w-1/4"
		viewBox="0 0 19 19"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M2.5 16L4.5 17V16L2.5 15V16Z" fill="#115175" />
		<path d="M12.5 13L4.5 17V16L9.5 13.5L10.5 12L12.5 13Z" fill="#0F4766" />
		<path d="M2.5 14V15L4.5 16V15L2.5 14Z" fill="#1978AD" />
		<path d="M2.5 13V14L4.5 15V14L2.5 13Z" fill="#269DE0" />
		<path d="M2.5 12V13L4.5 14V13L2.5 12Z" fill="#61B8E8" />
		<path d="M9.5 13.5L4.5 16V15L8.5 13L9.5 11.5L10.5 12L9.5 13.5Z" fill="#176FA0" />
		<path d="M4.5 14V15L8.5 13L9.5 11.5L8.5 11L7.5 12.5L4.5 14Z" fill="#1F93D5" />
		<path d="M4.5 13V14L7.5 12.5L8.5 11L4.5 13Z" fill="#56B3E6" />
		<path d="M4.5 13L2.5 12L6.5 10L8.5 11L4.5 13Z" fill="#71BFEA" />
		<path d="M4.5 12V9H4V12H4.5Z" fill="#C8C8C8" />
		<path d="M4 9.5V9H3L4 9.5Z" fill="#182D4F" />
		<path d="M12.5 16L13.5 15L14.5 15.5V17L12.5 16Z" fill="#122545" />
		<path d="M13.5 5L14.5 4.5V15.5L13.5 15V5Z" fill="#269DE0" />
		<path d="M14.5 4.5L15.5 4V15L14.5 15.5V4.5Z" fill="#1F94D6" />
		<path d="M14.5 17L12.5 16V18L14.5 19V17Z" fill="#182D4F" />
		<path d="M16.5 16L15.5 15L14.5 15.5V17L16.5 16Z" fill="#0F1E39" />
		<path d="M16.5 18V16L14.5 17V19L16.5 18Z" fill="#142642" />
		<path d="M17.5 3V1L13.5 3V5L17.5 3Z" fill="#142642" />
		<path d="M12.5 4.5L13.5 5V3L11.5 2V4L12.5 4.5Z" fill="#182D4F" />
		<path d="M11.5 2L13.5 3L17.5 1L15.5 0L11.5 2Z" fill="#0F1E39" />
		<path d="M3 9.5L13 4.5V3L3 8V9.5Z" fill="#1F94D6" />
		<path d="M12 2.5L13 3L3.5 8L2.5 7.5L12 2.5Z" fill="#269DE0" />
		<path d="M2.5 7.5L3.5 8L3 9.5L2 9L2.5 7.5Z" fill="#269DE0" />
		<path d="M4 9.5V9L5 8.5V9L4 9.5Z" fill="#142642" />
	</svg>
	<div class="flex flex-col items-center justify-center">
		<h1 class="border-darkblue2 h-fit w-fit border-8 p-2 text-4xl font-semibold sm:p-4 sm:text-5xl">
			{title} <br />Under Construction
		</h1>
		<h3 class="mt-4 text-4xl font-light">This page is still in development.</h3>
		<div class="w-full pt-8">
			<a
				id="back-link"
				class="before:border-t-darkblue2 after:bg-darkblue2 relative w-fit text-2xl font-bold before:absolute before:-left-4 before:-bottom-[0.05em] before:h-1 before:w-1 before:-rotate-45 before:border-x-8 before:border-t-8 before:border-x-transparent after:absolute after:-left-3 after:right-0 after:bottom-0 after:h-[0.1em] after:w-[calc(100%_+_0.75em)]"
			>
				Go back
			</a>
		</div>
	</div>
</section>
