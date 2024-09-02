<script>
	import { page } from "$app/stores";
	import MobileNav from "./MobileNav.svelte";
	$: innerWidth = 0;

	let links = [
		{ href: "/", text: "About" },
		{ href: "/portfolio", text: "Portfolio" },
		{ href: "/publications", text: "Publications" },
		{ href: "/skills", text: "Skills" },
		{ href: "/work-history", text: "Work-history" },
	];
</script>

<svelte:window bind:innerWidth />

<header>
	<nav class="flex bg-white w-[100%]">
		{#if innerWidth < 500}
			<MobileNav {links} />
		{:else}
			<div
				class="flex flex-row m-auto bg-gray-400 rounded-b-md text-2xl p-4"
			>
				<ul class="flex position-relative">
					{#each links as { href, text }}
						<!-- svelte-ignore missing-declaration -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li class:classActive={$page.url.pathname === href}>
							<a
								class="hover:text-red-400 {[
									$page.url.pathname === href
										? 'text-red-500'
										: '',
								]}"
								{href}>{text}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</nav>
</header>

<style>
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
	}
</style>
