<script>
	import data from "$lib/data/narrative-design.json";
</script>

<div class="narrative-layout">
	<aside class="narrative-nav">
		<a class="nav-about nav-tab" href="/portfolio/narrative-design">About</a>
		{#each data.systems as system}
			<div class={`nav-section nav-tab ${system.slug}`}>
				<div class="nav-header">
					<h2>{system.name}</h2>
				</div>
				<div class="nav-body">
					{#each system.groups as group}
						<div class="nav-group">
							<h3>{group.name}</h3>
							<ul>
								{#each group.items as item}
									<li>
										<a
											href={`/portfolio/narrative-design/${system.slug}/${group.slug}/${item.slug}`}
											>{item.name}</a
										>
									</li>
								{/each}
							</ul>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</aside>
	<div class="narrative-content">
		<slot />
	</div>
</div>

<style>
	.narrative-layout {
		display: grid;
		grid-template-columns: minmax(220px, 280px) 1fr;
		gap: 2rem;
		align-items: start;
	}

	.narrative-nav {
		position: sticky;
		top: 1.5rem;
		align-self: start;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		padding-left: 0;
		margin-left: -1.5rem;
	}

	.nav-tab {
		text-decoration: none;
		color: #f5f2ec;
		font-size: 0.95rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		padding: 0.75rem 1.2rem;
		border-radius: 0 18px 18px 0;
		box-shadow: 0 10px 22px rgba(31, 28, 22, 0.12);
		transform: translateX(calc(-100% + 40px));
		transition: transform 200ms ease, box-shadow 200ms ease,
			border-radius 200ms ease;
	}

	.nav-tab:hover {
		transform: translateX(0);
		box-shadow: 0 14px 26px rgba(31, 28, 22, 0.16);
		border-radius: 0 6px 6px 0;
	}

	.nav-section {
		background: rgba(20, 18, 22, 0.85);
		border-radius: 0 18px 18px 0;
		padding: 0.9rem 1.1rem;
		box-shadow: 0 12px 24px rgba(31, 28, 22, 0.08);
		overflow: hidden;
		transition: box-shadow 200ms ease, border-radius 200ms ease,
			transform 200ms ease;
		color: #f5f2ec;
	}

	.nav-section:hover {
		box-shadow: 0 18px 34px rgba(31, 28, 22, 0.12);
		border-radius: 0 6px 6px 0;
		transform: translateX(0);
	}

	.nav-section {
		transform: translateX(calc(-100% + 40px));
	}

	.nav-about {
		background: linear-gradient(90deg, #1c1a1f, #2a2530);
	}

	.nav-section.dungeons-and-dragons {
		background: linear-gradient(90deg, #7a1a1a, #b22222);
	}

	.nav-section.call-of-cthulhu {
		background: linear-gradient(90deg, #8f7b1f, #c2a83a);
	}

	.nav-section.cyberpunk-red {
		background: linear-gradient(90deg, #6f7b88, #b12a2a);
		color: #f5f2ec;
	}

	.nav-header h2 {
		margin: 0;
		font-size: 1rem;
		color: inherit;
	}

	.nav-body {
		max-height: 0;
		opacity: 0;
		transform: translateY(-6px);
		transition: max-height 240ms ease, opacity 200ms ease,
			transform 200ms ease;
	}

	.nav-section:hover .nav-body {
		max-height: 500px;
		opacity: 1;
		transform: translateY(0);
	}

	.nav-section h2 {
		margin: 0 0 0.7rem;
		font-size: 1rem;
	}

	.nav-group h3 {
		margin: 0.5rem 0 0.4rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		color: rgba(245, 242, 236, 0.6);
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
	}

	.nav-group h3::before,
	.nav-group h3::after {
		content: "";
		height: 1px;
		background: rgba(245, 242, 236, 0.35);
		flex: 1;
	}

	.nav-group h3::before {
		margin-right: 0.2rem;
	}

	.nav-group h3::after {
		margin-left: 0.2rem;
	}

	.nav-group h3::after {
		background: linear-gradient(
			90deg,
			rgba(245, 242, 236, 0.45),
			rgba(245, 242, 236, 0)
		);
	}

	.nav-group ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.nav-group a {
		text-decoration: none;
		color: rgba(245, 242, 236, 0.92);
		font-size: 0.92rem;
		padding-left: 0.5rem;
		border-left: 2px solid rgba(245, 242, 236, 0.2);
	}

	.nav-group a:hover {
		color: #ffffff;
		border-left-color: rgba(255, 255, 255, 0.6);
	}

	@media (max-width: 900px) {
		.narrative-layout {
			grid-template-columns: 1fr;
		}

		.narrative-nav {
			position: static;
		}
	}
</style>
