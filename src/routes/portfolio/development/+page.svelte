<script>
	import pf from "$lib/data/portfolio-development.json";
	import ItemTypeOne from "../portfolioComponent.svelte";

	const mapped = pf
		.sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
		.map((x) => ({
			title: x.title,
			short_description: x.short_description,
			type: x.type,
			keywords: x.keywords,
			long_description: x.long_description,
			imageName: x.imageName,
			url: x.url,
			github: x.github,
			component: ItemTypeOne,
		}));
</script>

<section class="section">
	<div class="section-inner">
		<p class="eyebrow">Portfolio</p>
		<h1>Development</h1>
		<div class="grid">
			{#each mapped as item, i}
				<svelte:component this={item.component} props={item} />
			{/each}
		</div>
	</div>
</section>

<style>
	.section {
		padding: 3rem 0;
	}

	.section-inner {
		width: min(1100px, 92vw);
		margin: 0 auto;
		padding: 2rem clamp(1.2rem, 3vw, 2.6rem);
		border-radius: 22px;
		background: rgba(255, 255, 255, 0.45);
		backdrop-filter: blur(6px);
		box-shadow: 0 16px 30px rgba(31, 28, 22, 0.08);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.24em;
		font-size: 0.65rem;
		color: #7b756c;
		margin-bottom: 0.8rem;
	}

	h1 {
		font-size: clamp(2rem, 4vw, 3rem);
		margin: 0 0 0.8rem;
	}
</style>
