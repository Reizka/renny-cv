<script>
	import data from "$lib/data/ux-research.json";
</script>

<section class="ux-section">
	<p class="eyebrow">UX Research</p>
	<h1>{data.about.title}</h1>
	<p class="intro">
		Welcome to the UX Research section of my portfolio. The projects presented
		here are grouped under UX Research, and for larger bodies of work I have
		deliberately focused only on the parts that are directly relevant from a UX
		research perspective.
	</p>
	<p class="intro">
		Most of this experience comes from my time in academia, where I routinely had
		to wear multiple hats. UX research was only one component of broader
		projects and was often interrupted by other responsibilities. That said,
		because my academic work centered on products designed for real, everyday
		users, UX research was not optional—it was a core and integral part of my
		work.
	</p>
	<a class="cta" href="/portfolio/ux-research/case-studies">Browse case studies</a>
</section>

<style>
	.ux-section {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
		max-width: 720px;
		margin: 0 auto;
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

	.cta {
		align-self: flex-start;
		text-decoration: none;
		background: rgba(20, 18, 22, 0.9);
		color: #f5f2ec;
		padding: 0.65rem 1.1rem;
		border-radius: 999px;
		font-size: 0.85rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		box-shadow: 0 12px 26px rgba(31, 28, 22, 0.18);
	}

	.cta:hover {
		background: rgba(20, 18, 22, 1);
	}
</style>
