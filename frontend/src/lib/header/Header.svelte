<script>
	import { page } from '$app/stores';
	import Logo from "../../assets/logo.svg"
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/projects'}>
				<a sveltekit:prefetch href="/projects">Projects</a>
			</li>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/" id="logo">
					<img src={Logo} alt="Logo of Switchcodes, contains text and image">
				</a>
			</li>
			<li class:active={$page.url.pathname === '/inspiration'}>
				<a sveltekit:prefetch href="/inspiration">Inspiration</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100%;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		width: 100%;
		justify-content: center;
		--background: white;
	}

	nav li img{
		height: 75%;
		width: min-content;
	}

	#logo{
		display: grid;
		place-content: center;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 10vh;
		display: flex;
		gap: 5em;
		width: 100%;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::after {
		content: '';
		width: 100%;
		height: 0.25em;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #115175;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
