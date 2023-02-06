<script>
	import { page } from '$app/stores';
	//import logo from '$lib/images/svelte-logo.svg';
	//import github from '$lib/images/github.svg';
</script>

<header >
	<nav class="flex flex-row bg-white justify-center w-[100%]">
		<ul class="flex postion-relative">
			<li class:active={$page.url.pathname === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/portfolio'}>
				<a href="/portfolio">Portfolio</a>
			</li>
			<li class:active={$page.url.pathname === '/publications'}>
				<a href="/publications">Publications</a>
			</li>
			<li class:active={$page.url.pathname === '/skills'}>
				<a href="/skills">Technical Skills</a>
			</li>
			<li class:active={$page.url.pathname === '/contact'}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color:black;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
