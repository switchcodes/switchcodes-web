<script>
	import { page } from '$app/stores';
	import Logo from '../../assets/logo.svg';
</script>

<header>
	<nav>
		<div class="desktopView">
			<ul>
				<li class:active={$page.url.pathname === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
				<li class:active={$page.url.pathname === '/projects'}>
					<a sveltekit:prefetch href="/projects">Projects</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/" id="logo">
						<img src={Logo} alt="Logo of Switchcodes, contains text and image" />
					</a>
				</li>
				<li class:active={$page.url.pathname === '/inspiration'}>
					<a sveltekit:prefetch href="/inspiration">Inspiration</a>
				</li>
				<li class:active={$page.url.pathname === '/contact'}>
					<a sveltekit:prefetch href="/contact">Contact</a>
				</li>
			</ul>
		</div>
		<div class="mobileView">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/" id="logo">
						<img src={Logo} alt="Logo of Switchcodes, contains text and image" />
					</a>
				</li>
				<li>
					<svg
						width="49"
						height="41"
						viewBox="0 0 49 41"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="49" height="8" fill="#61B8E8" />
						<rect y="11" width="49" height="8" fill="#269DE0" />
						<rect y="22" width="49" height="8" fill="#1978AD" />
						<rect y="33" width="49" height="8" fill="#115175" />
					</svg>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	.mobileView {
		display: none;
	}

	.desktopView {
		display: block;
	}

	header {
		width: 100%;
	}

	nav {
		width: 100%;
		--background: white;
	}

	nav li img {
		height: 75%;
		width: min-content;
	}

	#logo {
		display: grid;
		place-content: center;
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
		font-weight: 500;
		font-size: 1.5em;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	@media (max-width: 78.125em) {
		.desktopView {
			display: none;
		}

		.mobileView {
			display: block;
		}
		ul {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		li:nth-child(2) {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-right: 1em;
		}
	}
</style>
