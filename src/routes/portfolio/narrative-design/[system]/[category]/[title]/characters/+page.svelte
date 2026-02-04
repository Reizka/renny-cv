<script>
	import data from "$lib/data/narrative-design.json";
	import { page } from "$app/stores";

	$: params = $page.params;
	$: system = data.systems.find((s) => s.slug === params.system);
	$: group = system?.groups.find((g) => g.slug === params.category);
	$: item = group?.items.find((i) => i.slug === params.title);
</script>

<section class="detail-section">
	<p class="eyebrow">Narrative Design</p>
	<h1>{item?.name || "Characters"}</h1>
	<p class="meta">{system?.name} · {group?.name}</p>
	<p class="body">Characters content coming soon.</p>
</section>

<style>
	.detail-section {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
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
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		margin: 0;
	}

	.meta {
		color: #6b655b;
		margin: 0;
	}

	.body {
		margin: 0.4rem 0 0;
		color: #2f2a22;
	}
</style>
