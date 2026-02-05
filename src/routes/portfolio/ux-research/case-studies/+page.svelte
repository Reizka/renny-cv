<script>
	import data from "$lib/data/ux-research.json";
</script>

<section class="case-studies">
	<nav class="breadcrumbs" aria-label="Breadcrumb">
		<a href="/portfolio">Portfolio</a>
		<span aria-hidden="true">/</span>
		<a href="/portfolio/ux-research">UX Research</a>
		<span aria-hidden="true">/</span>
		<span>Case Studies</span>
	</nav>
	<p class="eyebrow">UX Research</p>
	<h1>Case Studies</h1>
	<p class="intro">
		A focused list of the research case studies in this portfolio, grouped for
		quick access on mobile.
	</p>
	<div class="nav-links">
		<a href="/portfolio/ux-research">Back to UX Research</a>
		{#each data.sections as section}
			<a href={`/portfolio/ux-research/${section.slug}`}>{section.title}</a>
		{/each}
	</div>
	<div class="case-list">
		{#each data.caseStudies as cs}
			<a class="case-card" href={`/portfolio/ux-research/${cs.slug}`}>
				<h2>{cs.title}</h2>
				{#if cs.tags && cs.tags.length}
					<ul class="tags">
						{#each cs.tags as tag}
							<li>{tag}</li>
						{/each}
					</ul>
				{/if}
			</a>
		{/each}
	</div>
</section>

<style>
	.case-studies {
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

	.case-list {
		display: grid;
		gap: 0.9rem;
	}

	.case-card {
		text-decoration: none;
		background: rgba(255, 255, 255, 0.78);
		border-radius: 16px;
		padding: 1rem 1.2rem;
		box-shadow: 0 12px 28px rgba(31, 28, 22, 0.08);
		color: #1f1c16;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.case-card h2 {
		margin: 0;
		font-size: 1.05rem;
		color: #2f2a22;
	}

	.tags {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tags li {
		background: rgba(42, 36, 31, 0.08);
		color: #5a5147;
		padding: 0.2rem 0.5rem;
		border-radius: 999px;
		font-size: 0.65rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
</style>
