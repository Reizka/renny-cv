<script>
	import { page } from "$app/stores";
	// @ts-ignore - svelte-icons lacks published type declarations
	import FaBars from "svelte-icons/fa/FaBars.svelte";

	let showNav = false;
	let showPortfolio = false;
	let showNarrative = false;

	function toggle() {
		showNav = !showNav;
		if (!showNav) {
			showPortfolio = false;
			showNarrative = false;
		}
	}

	export let links = /** @type {{ href: string; text: string }[]} */ ([]);
</script>

<div class="mobile-nav">
	<button class="mobile-toggle" on:click={() => toggle()}>
		<span class="menu-label">Menu</span>
		<FaBars />
	</button>

	{#if showNav}
		<div class="mobile-menu">
			<ul class="mobile-menu-list">
				{#each links as { href, text }}
					{#if href !== "/portfolio"}
						<li class:classActive={$page.url.pathname === href}>
							<a
								class:active-link={$page.url.pathname === href}
								href={href}
								on:click={() => toggle()}
								>{text}</a
							>
						</li>
					{/if}
				{/each}
				<li class="menu-section">
					<button
						class="menu-toggle"
						on:click={() => (showPortfolio = !showPortfolio)}
						type="button"
						aria-expanded={showPortfolio}
					>
						Portfolio
						<span class="chevron">{showPortfolio ? "–" : "+"}</span>
					</button>
					{#if showPortfolio}
						<div class="submenu">
							<a href="/portfolio/development" on:click={() => toggle()}
								>Development</a
							>
							<a href="/portfolio/ux-research" on:click={() => toggle()}
								>UX Research</a
							>
							<a href="/portfolio/game-design" on:click={() => toggle()}
								>Game Design</a
							>
							<a href="/portfolio/systems" on:click={() => toggle()}
								>Systems</a
							>
							<button
								class="menu-toggle submenu-toggle"
								on:click={() => (showNarrative = !showNarrative)}
								type="button"
								aria-expanded={showNarrative}
							>
								Narrative Design
								<span class="chevron">{showNarrative ? "–" : "+"}</span>
							</button>
							{#if showNarrative}
								<div class="submenu nested">
									<div class="submenu-group">
										<span>About</span>
										<a
											href="/portfolio/narrative-design"
											on:click={() => toggle()}
											>Overview</a
										>
									</div>
									<div class="submenu-group">
										<span>Dungeons &amp; Dragons</span>
										<a
											href="/portfolio/narrative-design/dungeons-and-dragons/one-shots/big-trouble-it-littlefare"
											on:click={() => toggle()}
											>Big Trouble it Littlefare</a
										>
										<a
											href="/portfolio/narrative-design/dungeons-and-dragons/one-shots/something-waits-below"
											on:click={() => toggle()}
											>Something Waits Below</a
										>
										<a
											href="/portfolio/narrative-design/dungeons-and-dragons/campaigns/wheel-of-fortune-remix"
											on:click={() => toggle()}
											>Wheel of Fortune - remix</a
										>
										<a
											href="/portfolio/narrative-design/dungeons-and-dragons/campaigns/phandalver-below-the-shattered-obelisk-remix"
											on:click={() => toggle()}
											>Phandalver and Below the Shattered Obelisk REMIX</a
										>
									</div>
									<div class="submenu-group">
										<span>Call of Cthulhu</span>
										<a
											href="/portfolio/narrative-design/call-of-cthulhu/one-shots/echoes-from-carcosa"
											on:click={() => toggle()}
											>Echoes from Carcosa</a
										>
										<a
											href="/portfolio/narrative-design/call-of-cthulhu/campaigns/what-lurks-below"
											on:click={() => toggle()}
											>What Lurks Below?</a
										>
									</div>
									<div class="submenu-group">
										<span>Cyberpunk Red</span>
										<a
											href="/portfolio/narrative-design/cyberpunk-red/one-shots/volatile-cargo"
											on:click={() => toggle()}
											>Volatile Cargo</a
										>
										<a
											href="/portfolio/narrative-design/cyberpunk-red/one-shots/intellectual-property"
											on:click={() => toggle()}
											>Intellectual Property</a
										>
										<a
											href="/portfolio/narrative-design/cyberpunk-red/one-shots/dead-signal"
											on:click={() => toggle()}
											>Dead Signal</a
										>
									</div>
								</div>
							{/if}
							<a href="/portfolio/prototypes" on:click={() => toggle()}
								>Prototypes</a
							>
							<a
								href="/portfolio/product-strategy"
								on:click={() => toggle()}
								>Product &amp; Strategy</a
							>
						</div>
					{/if}
				</li>
			</ul>
		</div>
	{/if}
</div>

<style>
	.mobile-nav {
		position: relative;
		width: 100%;
		height: 3.2rem;
		z-index: 50;
	}

	@media (min-width: 500px) {
		.mobile-nav {
			display: none;
		}
	}

	.mobile-toggle {
		position: absolute;
		right: 0.75rem;
		top: 0.3rem;
		height: 2.75rem;
		padding: 0 0.9rem;
		border-radius: 999px;
		background: rgba(20, 18, 22, 0.85);
		color: #f5f2ec;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		box-shadow: 0 10px 24px rgba(10, 8, 12, 0.25);
		z-index: 60;
	}

	.menu-label {
		font-size: 0.85rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.mobile-menu {
		position: fixed;
		right: 0.75rem;
		top: 0.5rem;
		background: rgba(20, 18, 22, 0.95);
		padding: 1rem 1.1rem;
		border-radius: 16px;
		box-shadow: 0 18px 40px rgba(10, 8, 12, 0.35);
		z-index: 9999;
		max-height: 80vh;
		overflow-y: auto;
		min-width: 250px;
	}

	.mobile-menu-list {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.mobile-menu a,
	.menu-toggle {
		color: rgba(245, 242, 236, 0.88);
		text-decoration: none;
		font-size: 1rem;
		background: transparent;
		border: none;
		padding: 0;
		text-align: left;
		cursor: pointer;
	}

	.menu-section {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.menu-toggle {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.chevron {
		font-size: 1.2rem;
		line-height: 1;
		opacity: 0.7;
	}

	.submenu {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		padding-left: 0.6rem;
	}

	.submenu.nested {
		padding-left: 0.6rem;
		border-left: 1px solid rgba(245, 242, 236, 0.18);
		margin-left: 0.4rem;
	}

	.submenu-group {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		margin-top: 0.3rem;
	}

	.submenu-group span {
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.7rem;
		color: rgba(245, 242, 236, 0.55);
	}

	.submenu a {
		font-size: 0.9rem;
		color: rgba(245, 242, 236, 0.8);
	}
</style>
