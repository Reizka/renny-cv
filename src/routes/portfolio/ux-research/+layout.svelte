<script>
	import data from "$lib/data/ux-research.json";
</script>

<div class="ux-layout">
	<aside class="ux-nav">
		<a class="ux-tab" href="/portfolio/ux-research">About</a>
		<div class="ux-group">
			<p class="ux-group-title">Case Studies</p>
			<ul>
				{#each data.caseStudies as cs, i}
					<li>
						<a href={`/portfolio/ux-research/${cs.slug}`}>{i + 1}. {cs.title}</a>
					</li>
				{/each}
			</ul>
		</div>
		{#each data.sections as section}
			<a class="ux-tab" href={`/portfolio/ux-research/${section.slug}`}>
				{section.title}
			</a>
		{/each}
	</aside>
	<div class="ux-content">
		<slot />
	</div>
</div>

<style>
	.ux-layout {
		display: grid;
		grid-template-columns: minmax(220px, 280px) 1fr;
		gap: 2rem;
		align-items: start;
	}

	.ux-nav {
		position: sticky;
		top: 1.5rem;
		align-self: start;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.ux-tab {
		text-decoration: none;
		color: #f5f2ec;
		background: rgba(20, 18, 22, 0.85);
		padding: 0.7rem 1rem;
		border-radius: 0 16px 16px 0;
		box-shadow: 0 10px 22px rgba(31, 28, 22, 0.12);
		letter-spacing: 0.16em;
		text-transform: uppercase;
		font-size: 0.75rem;
		font-weight: 700;
	}

	.ux-group {
		background: rgba(20, 18, 22, 0.85);
		border-radius: 0 16px 16px 0;
		padding: 0.8rem 1rem 0.9rem;
		box-shadow: 0 10px 22px rgba(31, 28, 22, 0.12);
		color: #f5f2ec;
	}

	.ux-group-title {
		margin: 0 0 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-size: 0.7rem;
		color: rgba(245, 242, 236, 0.7);
	}

	.ux-group ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.ux-group a {
		text-decoration: none;
		color: rgba(245, 242, 236, 0.92);
		font-size: 0.9rem;
	}

	.ux-group a:hover {
		color: #ffffff;
	}

	@media (max-width: 900px) {
		.ux-layout {
			grid-template-columns: 1fr;
		}

		.ux-nav {
			display: none;
		}
	}
</style>
