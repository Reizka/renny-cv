<script>
	import { page } from "$app/stores";
	import MobileNav from "./MobileNav.svelte";
	$: innerWidth = 0;
	let showPortfolioMenu = false;

	let links = [
		{ href: "/", text: "About" },
		{ href: "/portfolio", text: "Portfolio" },
		{ href: "/publications", text: "Publications" },
		{ href: "/work-history", text: "Work-history" },
	];

	function closePortfolioMenu() {
		showPortfolioMenu = false;
	}
</script>

<svelte:window bind:innerWidth />

<header class="site-header">
	<nav class="nav-wrap">
		{#if innerWidth < 500}
			<MobileNav {links} />
		{:else}
			<div class="masthead">
				<div class="title-block">
					<div class="kicker">Curriculum Vitae</div>
					<h1 class="mast-title">Renny Lindberg</h1>
					<div class="subline">Research, engineering, and portfolio</div>
				</div>
				<div class="divider"></div>
				<ul class="nav-list">
					{#each links as { href, text }}
						<!-- svelte-ignore missing-declaration -->
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<li
							class:classActive={$page.url.pathname === href}
							class:portfolio-active={
								href === "/portfolio" && showPortfolioMenu
							}
						>
							{#if href === "/portfolio"}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<a
									class:active-link={$page.url.pathname === href}
									href={href}
									on:click|preventDefault={() =>
										(showPortfolioMenu = !showPortfolioMenu)}
									>{text}</a
								>
							{:else}
								<a
									class:active-link={$page.url.pathname === href}
									href={href}
									on:click={closePortfolioMenu}
									>{text}</a
								>
							{/if}
						</li>
					{/each}
				</ul>
				<div class={`portfolio-accordion ${showPortfolioMenu ? "open" : ""}`}>
					<div class="portfolio-panel">
						<a class="thumb-card" href="/portfolio/development">
							<span class="thumb-title">Development</span>
							<span class="thumb-caption"
								>Full‑stack and software builds</span
							>
						</a>
						<a class="thumb-card" href="/portfolio/ux-research">
							<span class="thumb-title">UX Research</span>
							<span class="thumb-caption"
								>Discovery, insights, validation</span
							>
						</a>
						<a class="thumb-card" href="/portfolio/game-design">
							<span class="thumb-title">Game Design</span>
							<span class="thumb-caption"
								>Systems, narrative, mechanics</span
							>
						</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>
</header>

<style>
	.site-header {
		background: linear-gradient(180deg, #f9f7f2 0%, #f3f1ec 100%);
		padding: 2.5rem 1.5rem 1.25rem;
		position: relative;
		z-index: 10;
	}

	.nav-wrap {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.masthead {
		width: min(1100px, 92vw);
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.title-block {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.kicker {
		font-family: "Space Grotesk", "Segoe UI", sans-serif;
		letter-spacing: 0.32em;
		text-transform: uppercase;
		font-size: 0.65rem;
		color: #6c6a63;
	}

	.mast-title {
		font-family: "Playfair Display", "Times New Roman", serif;
		font-weight: 600;
		font-size: clamp(2rem, 4vw, 3.3rem);
		margin: 0;
		color: #1f1c16;
	}

	.subline {
		font-family: "Space Grotesk", "Segoe UI", sans-serif;
		font-size: 0.95rem;
		color: #5b5852;
	}

	.divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, #b9b5ad, transparent);
	}

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.4rem;
		padding: 0;
		margin: 0;
		list-style: none;
		font-family: "Space Grotesk", "Segoe UI", sans-serif;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		font-size: 0.7rem;
	}

	.nav-list a {
		text-decoration: none;
		color: #3f3a33;
		padding-bottom: 0.2rem;
		transition: color 160ms ease;
	}

	.nav-list a:hover {
		color: #7a2f1f;
	}

	.nav-list a.active-link {
		color: #1f1c16;
		box-shadow: inset 0 -2px 0 #1f1c16;
	}

	.portfolio-accordion {
		max-height: 0;
		overflow: hidden;
		transition: max-height 260ms ease;
		background: #2a241f;
		border-radius: 0 14px 14px 14px;
		margin-top: 0;
		position: relative;
		top: -10px;
		z-index: 1;
	}

	.portfolio-accordion.open {
		max-height: 320px;
	}

	.portfolio-panel {
		width: min(960px, 92vw);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.4rem;
		padding: 1.4rem 1rem 1.4rem;
	}

	.thumb-card {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 0.6rem;
		min-height: 180px;
		border-radius: 18px;
		padding: 1.4rem;
		text-decoration: none;
		color: #1f1c16;
		background: linear-gradient(135deg, #f7f2e8, #e9e2d7);
		box-shadow: 0 18px 40px rgba(36, 28, 18, 0.12);
		transition: transform 180ms ease, box-shadow 180ms ease;
	}

	.thumb-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 26px 50px rgba(36, 28, 18, 0.18);
	}

	.thumb-title {
		font-family: "Playfair Display", "Times New Roman", serif;
		font-size: 1.4rem;
	}

	.thumb-caption {
		font-family: "Space Grotesk", "Segoe UI", sans-serif;
		font-size: 0.85rem;
		color: #6a6358;
	}

	.portfolio-active > a {
		background: #2a241f;
		color: #f2ede4;
		padding: 0.3rem 0.6rem;
		border-radius: 10px 10px 0 0;
		box-shadow: none;
	}

	.portfolio-active > a.active-link {
		box-shadow: none;
	}
</style>
