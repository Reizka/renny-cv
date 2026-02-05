<script>
	import data from "$lib/data/narrative-design.json";
</script>

<section class="scenarios">
	<nav class="breadcrumbs" aria-label="Breadcrumb">
		<a href="/portfolio">Portfolio</a>
		<span aria-hidden="true">/</span>
		<a href="/portfolio/narrative-design">Narrative Design</a>
		<span aria-hidden="true">/</span>
		<span>RPG Scenarios</span>
	</nav>
	<p class="eyebrow">Narrative Design</p>
	<h1>RPG Scenarios</h1>
	<p class="intro">
		A mobile-friendly index of campaigns and one-shots across all systems.
	</p>
	<div class="nav-links">
		<a href="/portfolio/narrative-design">Back to Narrative Design</a>
	</div>
	<div class="scenario-list">
		{#each data.systems as system}
			<div class="system-block">
				<h2>{system.name}</h2>
				{#each system.groups as group}
					<div class="group-block">
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
		{/each}
	</div>
</section>

<style>
	.scenarios {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		max-width: 720px;
		margin: 0 auto;
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #7b756c;
	}

	.breadcrumbs a {
		text-decoration: none;
		color: inherit;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.24em;
		font-size: 0.65rem;
		color: #7b756c;
		margin: 0;
	}

	h1 {
		font-size: clamp(2rem, 4vw, 3rem);
		margin: 0;
	}

	.intro {
		margin: 0;
		max-width: 60ch;
		color: #4c4740;
		line-height: 1.6;
	}

	.nav-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.nav-links a {
		text-decoration: none;
		color: rgba(245, 242, 236, 0.9);
		background: rgba(20, 18, 22, 0.9);
		padding: 0.45rem 0.8rem;
		border-radius: 999px;
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.scenario-list {
		display: grid;
		gap: 1rem;
	}

	.system-block {
		background: rgba(20, 18, 22, 0.86);
		border-radius: 16px;
		padding: 1rem 1.2rem;
		color: #f5f2ec;
		box-shadow: 0 12px 28px rgba(31, 28, 22, 0.12);
	}

	.system-block h2 {
		margin: 0 0 0.8rem;
		font-size: 1.1rem;
	}

	.group-block {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-bottom: 0.8rem;
	}

	.group-block:last-child {
		margin-bottom: 0;
	}

	.group-block h3 {
		margin: 0;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: rgba(245, 242, 236, 0.6);
	}

	.group-block ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.group-block a {
		text-decoration: none;
		color: rgba(245, 242, 236, 0.92);
		font-size: 0.95rem;
		border-left: 2px solid rgba(245, 242, 236, 0.2);
		padding-left: 0.5rem;
	}

	.group-block a:hover {
		color: #ffffff;
		border-left-color: rgba(255, 255, 255, 0.6);
	}
</style>
