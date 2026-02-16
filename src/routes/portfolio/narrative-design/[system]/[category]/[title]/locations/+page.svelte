<script>
	import data from "$lib/data/narrative-design.json";
	import { page } from "$app/stores";

	$: params = $page.params;
	$: system = data.systems.find((s) => s.slug === params.system);
	$: group = system?.groups.find((g) => g.slug === params.category);
	$: item = group?.items.find((i) => i.slug === params.title);
	$: slug = params?.title;

	const locationModules = import.meta.glob("/src/lib/narrative-design/locations/*.svelte", { eager: true });
	const locationsBySlug = Object.fromEntries(
		Object.entries(locationModules).map(([path, mod]) => [
			path.split("/").pop().replace(".svelte", ""),
			mod.default
		])
	);
	$: LocationsComponent = slug ? locationsBySlug[slug] : null;
</script>

<section class="detail-section">
	<p class="eyebrow">Narrative Design</p>
	<h1>{item?.name || "Locations"}</h1>
	<p class="meta">{system?.name} · {group?.name}</p>
	{#if LocationsComponent}
		<svelte:component this={LocationsComponent} />
	{:else}
		<p class="body">Locations content coming soon.</p>
	{/if}
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
