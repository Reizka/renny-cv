<script>
	import { page } from "$app/stores";
	import MobileNav from "./MobileNav.svelte";
	import devPreview from "$lib/images/portfolio/development.jpg";
	import uxPreview from "$lib/images/portfolio/ux-research.jpg";
	import gamePreview from "$lib/images/portfolio/game-design.jpg";
	import narrativePreview from "$lib/images/portfolio/narrative-design.jpg";
	import productPreview from "$lib/images/portfolio/product-strategy.jpg";
	import publicationPreview from "$lib/images/portfolio/publication.jpg";
	import prototypePreview from "$lib/images/portfolio/prototype.jpg";
	$: innerWidth = 0;
	let showPortfolioMenu = false;
	let mastheadEl;
	$: isDevPage = $page.url.pathname === "/portfolio/development";
	$: isUxPage = $page.url.pathname === "/portfolio/ux-research";
	$: isGamePage = $page.url.pathname === "/portfolio/game-design";
	$: isNarrativePage = $page.url.pathname === "/portfolio/narrative-design";
	$: isPrototypePage = $page.url.pathname === "/portfolio/prototypes";
	$: isProductPage = $page.url.pathname === "/portfolio/product-strategy";
	$: isPublicationPage = $page.url.pathname === "/portfolio/publications";
	$: isPortfolioPage = $page.url.pathname.startsWith("/portfolio");

	let links = [
		{ href: "/", text: "About" },
		{ href: "/portfolio", text: "Portfolio" },
		{ href: "/work-history", text: "Work-history" },
	];

	function closePortfolioMenu() {
		showPortfolioMenu = false;
	}

	function handleOutsideClick(event) {
		if (!showPortfolioMenu) return;
		const path = event.composedPath ? event.composedPath() : [];
		if (!path.includes(mastheadEl)) {
			showPortfolioMenu = false;
		}
	}
</script>

<svelte:window bind:innerWidth on:click={handleOutsideClick} />

<header
	class={`site-header ${isDevPage ? "dev-theme" : ""} ${isUxPage ? "ux-theme" : ""} ${
		isPortfolioPage ? "portfolio-theme" : ""
	}`}
>
	<div class={`portfolio-preview ${isDevPage ? "show" : ""}`}>
		<img
			src={devPreview}
			alt="Development portfolio preview"
			loading="lazy"
		/>
		<p class="preview-credit">
			Photo by
			<a
				href="https://unsplash.com/@juanjodev02?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Juanjo Jaramillo</a
			>
			on
			<a
				href="https://unsplash.com/photos/black-flat-screen-computer-monitor-mZnx9429i94?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Unsplash</a
			>
		</p>
	</div>
	<div class={`portfolio-preview ${isUxPage ? "show" : ""}`}>
		<img src={uxPreview} alt="UX research portfolio preview" loading="lazy" />
		<p class="preview-credit">
			Photo by
			<a
				href="https://unsplash.com/@uxindo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>UX Indonesia</a
			>
			on
			<a
				href="https://unsplash.com/photos/person-writing-on-white-paper-qC2n6RQU4Vw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Unsplash</a
			>
		</p>
	</div>
	<div class={`portfolio-preview ${isGamePage ? "show" : ""}`}>
		<img src={gamePreview} alt="Game design portfolio preview" loading="lazy" />
		<p class="preview-credit">Photo by Francesco Ungaro</p>
	</div>
	<div class={`portfolio-preview ${isNarrativePage ? "show" : ""}`}>
		<img
			src={narrativePreview}
			alt="Narrative design portfolio preview"
			loading="lazy"
		/>
		<p class="preview-credit">
			Photo by
			<a href="https://pixabay.com/photos/cellar-vault-tunnel-sheets-basement-258906/"
				>Pixabay</a
			>
		</p>
	</div>
	<div class={`portfolio-preview ${isProductPage ? "show" : ""}`}>
		<img
			src={productPreview}
			alt="Product strategy portfolio preview"
			loading="lazy"
		/>
		<p class="preview-credit">
			Photo by
			<a href="https://www.pexels.com/photo/paper-on-gray-laptop-669617/"
				>Lukas Blazek</a
			>
			from Pexels
		</p>
	</div>
	<div class={`portfolio-preview ${isPrototypePage ? "show" : ""}`}>
		<img
			src={prototypePreview}
			alt="Prototypes portfolio preview"
			loading="lazy"
		/>
		<p class="preview-credit">
			Photo by
			<a
				href="https://unsplash.com/@maximalfocus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Maximalfocus</a
			>
			on
			<a
				href="https://unsplash.com/photos/black-and-red-light-illustration-HakTxidk36I?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Unsplash</a
			>
		</p>
	</div>
	<div class={`portfolio-preview ${isPublicationPage ? "show" : ""}`}>
		<img
			src={publicationPreview}
			alt="Publications portfolio preview"
			loading="lazy"
		/>
		<p class="preview-credit">
			Photo by
			<a
				href="https://unsplash.com/@martinadams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Martin Adams</a
			>
			on
			<a
				href="https://unsplash.com/photos/assorted-title-book-lot-on-shelf-_OZCl4XcpRw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
				>Unsplash</a
			>
		</p>
	</div>
	<nav class="nav-wrap">
		{#if innerWidth < 500}
			<MobileNav {links} />
		{:else}
			<div class="masthead" bind:this={mastheadEl}>
				<div class="glass-strip">
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
				</div>
				<div class={`portfolio-accordion ${showPortfolioMenu ? "open" : ""}`}>
					<div class="portfolio-panel">
						<a
							class="thumb-card thumb-photo"
							class:thumb-active={$page.url.pathname === "/portfolio/development"}
							style={`--thumb-image: url(${devPreview})`}
							href="/portfolio/development"
						>
							<span class="thumb-title">Development</span>
							<span class="thumb-caption"
								>Full‑stack and software builds</span
							>
						</a>
						<a
							class="thumb-card thumb-photo"
							class:thumb-active={$page.url.pathname === "/portfolio/ux-research"}
							style={`--thumb-image: url(${uxPreview})`}
							href="/portfolio/ux-research"
						>
							<span class="thumb-title">UX Research</span>
							<span class="thumb-caption"
								>Discovery, insights, validation</span
							>
						</a>
						<a
							class="thumb-card thumb-photo"
							class:thumb-active={$page.url.pathname === "/portfolio/game-design"}
							style={`--thumb-image: url(${gamePreview})`}
							href="/portfolio/game-design"
						>
							<span class="thumb-title">Game Design</span>
							<span class="thumb-caption"
								>Systems, narrative, mechanics</span
							>
						</a>
						<a
							class="thumb-card thumb-photo"
							class:thumb-active={$page.url.pathname === "/portfolio/publications"}
							style={`--thumb-image: url(${publicationPreview})`}
							href="/portfolio/publications"
						>
							<span class="thumb-title">Publications</span>
							<span class="thumb-caption">Papers, talks, citations</span>
						</a>
						<a
							class="thumb-card thumb-photo"
							class:thumb-active={$page.url.pathname === "/portfolio/narrative-design"}
							style={`--thumb-image: url(${narrativePreview})`}
							href="/portfolio/narrative-design"
						>
							<span class="thumb-title">Narrative Design</span>
							<span class="thumb-caption"
								>Story worlds, quests, dialogue</span
							>
						</a>
						<a
							class="thumb-card thumb-photo"
							class:thumb-active={$page.url.pathname === "/portfolio/prototypes"}
							style={`--thumb-image: url(${prototypePreview})`}
							href="/portfolio/prototypes"
						>
							<span class="thumb-title">Prototypes</span>
							<span class="thumb-caption"
								>Rapid builds, experiments</span
							>
						</a>
						<a
							class="thumb-card thumb-photo"
							class:thumb-active={$page.url.pathname === "/portfolio/product-strategy"}
							style={`--thumb-image: url(${productPreview})`}
							href="/portfolio/product-strategy"
						>
							<span class="thumb-title">Product & Strategy</span>
							<span class="thumb-caption"
								>Roadmaps, positioning, scope</span
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
		overflow: hidden;
		z-index: 10;
	}

	.nav-wrap {
		width: 100%;
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 2;
	}

	.masthead {
		width: min(1100px, 92vw);
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
		position: relative;
		z-index: 2;
	}

	.site-header.portfolio-theme .masthead {
		gap: 0;
	}

	.glass-strip {
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

	.site-header.dev-theme .divider {
		background: linear-gradient(
			90deg,
			transparent,
			rgba(245, 242, 236, 0.55),
			transparent
		);
	}

	.site-header.portfolio-theme .glass-strip {
		padding: 1rem 1.1rem 0.9rem;
		border-radius: 20px 20px 0 0;
		background: linear-gradient(
			90deg,
			rgba(18, 16, 22, 0.72) 0%,
			rgba(18, 16, 22, 0.55) 45%,
			rgba(18, 16, 22, 0.22) 100%
		);
		backdrop-filter: blur(10px);
	}

	.site-header.dev-theme .kicker,
	.site-header.dev-theme .subline {
		color: rgba(245, 242, 236, 0.9);
	}

	.site-header.dev-theme .mast-title {
		color: #f5f2ec;
		text-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
	}

	.site-header.dev-theme .nav-list a {
		color: rgba(245, 242, 236, 0.85);
	}

	.site-header.dev-theme .nav-list a:hover {
		color: #bd93f9;
	}

	.site-header.dev-theme .nav-list a.active-link {
		color: #f5f2ec;
		box-shadow: inset 0 -2px 0 rgba(189, 147, 249, 0.7);
	}

	.portfolio-preview {
		opacity: 0;
		position: absolute;
		inset: 0;
		transform: translateX(-100%);
		transition: transform 520ms ease, opacity 320ms ease;
		z-index: 0;
		pointer-events: none;
	}

	.portfolio-preview.show {
		opacity: 1;
		transform: translateX(0);
	}

	.portfolio-preview img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		filter: saturate(0.95);
	}

	.preview-credit {
		margin: 0;
		position: absolute;
		left: 1.2rem;
		bottom: 0.9rem;
		padding: 0.55rem 0.85rem;
		background: rgba(20, 15, 10, 0.7);
		border-radius: 999px;
		font-family: "Space Grotesk", "Segoe UI", sans-serif;
		font-size: 0.7rem;
		color: #d2c8ba;
		pointer-events: auto;
	}

	.preview-credit a {
		color: #f4e5cf;
		text-decoration: none;
		border-bottom: 1px solid rgba(244, 229, 207, 0.4);
	}

	.preview-credit a:hover {
		color: #ffffff;
		border-bottom-color: rgba(255, 255, 255, 0.6);
	}

	.portfolio-accordion {
		max-height: 0;
		overflow: hidden;
		transition: max-height 260ms ease;
		background: linear-gradient(
			90deg,
			rgba(18, 16, 22, 0.72) 0%,
			rgba(18, 16, 22, 0.55) 45%,
			rgba(18, 16, 22, 0.22) 100%
		);
		backdrop-filter: blur(10px);
		box-shadow: 0 18px 40px rgba(5, 4, 8, 0.3);
		border-radius: 0 14px 14px 14px;
		margin-top: 0;
		position: relative;
		top: -10px;
		z-index: 1;
	}

	.portfolio-accordion.open {
		max-height: 520px;
	}

	.site-header.portfolio-theme .portfolio-accordion {
		margin-top: 0;
		top: 0;
	}

	.site-header.portfolio-theme .glass-strip,
	.site-header.portfolio-theme .portfolio-accordion {
		box-shadow: 0 18px 40px rgba(5, 4, 8, 0.3);
	}

	.site-header.portfolio-theme .portfolio-accordion {
		margin-top: -2px;
	}

	.site-header.portfolio-theme .kicker,
	.site-header.portfolio-theme .subline {
		color: rgba(245, 242, 236, 0.9);
	}

	.site-header.portfolio-theme .mast-title {
		color: #f5f2ec;
		text-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
	}

	.site-header.portfolio-theme .nav-list a {
		color: rgba(245, 242, 236, 0.85);
	}

	.site-header.portfolio-theme .nav-list a:hover {
		color: #bd93f9;
	}

	.site-header.portfolio-theme .nav-list a.active-link {
		color: #f5f2ec;
		box-shadow: inset 0 -2px 0 rgba(189, 147, 249, 0.7);
	}

	.site-header.portfolio-theme .divider {
		background: linear-gradient(
			90deg,
			transparent,
			rgba(245, 242, 236, 0.55),
			transparent
		);
	}

	.portfolio-panel {
		width: min(960px, 92vw);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
		gap: 1rem;
		padding: 1.1rem 0.9rem 1.2rem;
	}

	.thumb-card {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 0.6rem;
		min-height: 150px;
		border-radius: 18px;
		padding: 1.05rem;
		text-decoration: none;
		color: #1f1c16;
		background: linear-gradient(135deg, #f7f2e8, #e9e2d7);
		box-shadow: 0 18px 40px rgba(36, 28, 18, 0.12);
		transition: transform 180ms ease, box-shadow 180ms ease;
		position: relative;
		overflow: hidden;
	}

	.thumb-card.thumb-photo {
		color: #f5f2ec;
	}

	.thumb-card.thumb-photo::before {
		content: "";
		position: absolute;
		inset: 0;
		background-image: var(--thumb-image);
		background-size: cover;
		background-position: center;
		transform: translateX(0);
		transition: transform 320ms ease;
		z-index: 0;
	}

	.thumb-card.thumb-photo::after {
		content: "";
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(12, 10, 14, 0.15) 0%,
			rgba(12, 10, 14, 0.7) 100%
		);
		z-index: 1;
	}

	.thumb-card.thumb-photo.thumb-active::before {
		transform: translateX(-110%);
	}

	.thumb-card.thumb-photo .thumb-title,
	.thumb-card.thumb-photo .thumb-caption {
		position: relative;
		z-index: 2;
	}

	.thumb-card.thumb-photo .thumb-caption {
		color: rgba(245, 242, 236, 0.8);
	}

	.thumb-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 26px 50px rgba(36, 28, 18, 0.18);
	}

	.thumb-title {
		font-family: "Playfair Display", "Times New Roman", serif;
		font-size: 1.15rem;
	}

	.thumb-caption {
		font-family: "Space Grotesk", "Segoe UI", sans-serif;
		font-size: 0.78rem;
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
