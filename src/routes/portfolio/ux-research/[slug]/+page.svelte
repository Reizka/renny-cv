<script>
	import data from "$lib/data/ux-research.json";
	import { page } from "$app/stores";

	const sectionHeaders = [
		"Summary",
		"Constraints",
		"Research Goals",
		"Approach & Methods",
		"Data",
		"Conclusions",
	];

	$: slug = $page.params.slug;
	$: caseStudy = data.caseStudies.find((cs) => cs.slug === slug);
	$: section = data.sections.find((s) => s.slug === slug);
</script>

{#if caseStudy}
	<section class="ux-detail">
		<p class="eyebrow">UX Research · Case Study</p>
		<p class="ux-title">{caseStudy.title}</p>

		{#each sectionHeaders as heading}
			<h1>{heading}</h1>
			<p class="body">Content coming soon.</p>
		{/each}
	</section>
{:else if section}
	<section class="ux-detail">
		<p class="eyebrow">UX Research</p>
		<h1>{section.title}</h1>
		<p class="body">Content coming soon.</p>
	</section>
{:else}
	<section class="ux-detail">
		<p class="eyebrow">UX Research</p>
		<h1>Section Not Found</h1>
		<p class="body">This section is still being mapped.</p>
	</section>
{/if}

<style>
	.ux-detail {
		max-width: 720px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.24em;
		font-size: 0.65rem;
		color: #7b756c;
		margin: 0;
	}

	.ux-title {
		font-size: clamp(1.6rem, 2.4vw, 2.2rem);
		margin: 0 0 0.6rem;
		font-weight: 600;
	}

	h1 {
		font-size: 1.1rem;
		margin: 1.2rem 0 0.4rem;
	}

	.body {
		margin: 0;
		color: #2f2a22;
	}
</style>
