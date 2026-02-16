<script>
	import data from "$lib/data/narrative-design.json";
	import { page } from "$app/stores";

	$: params = $page.params;
	$: system = data.systems.find((s) => s.slug === params.system);
	$: group = system?.groups.find((g) => g.slug === params.category);
	$: item = group?.items.find((i) => i.slug === params.title);
	$: slug = params?.title;

	const characterModules = import.meta.glob("/src/lib/narrative-design/characters/*.svelte", { eager: true });
	const charactersBySlug = Object.fromEntries(
		Object.entries(characterModules).map(([path, mod]) => [
			path.split("/").pop().replace(".svelte", ""),
			mod.default
		])
	);
	$: CharactersComponent = slug ? charactersBySlug[slug] : null;
</script>

<section class="detail-section">
	<p class="eyebrow">Narrative Design</p>
	<h1>{item?.name || "Characters"}</h1>
	<p class="meta">{system?.name} · {group?.name}</p>
	{#if CharactersComponent}
		<svelte:component this={CharactersComponent} />
	{:else}
	<p class="body">Characters content coming soon.</p>
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

	.body-list {
		margin: 0.2rem 0 0.6rem 1.2rem;
		padding: 0;
		color: #2f2a22;
		list-style: disc;
	}

	.body-list li {
		margin: 0.35rem 0;
	}

	.profile-card {
		display: flex;
		gap: 1.4rem;
		padding: 1.2rem 1.3rem;
		border-radius: 18px;
		background: #ffffff;
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #7a1a1a, #b22222) 1;
		box-shadow: 0 12px 26px rgba(36, 28, 18, 0.12);
	}

	.profile-content {
		flex: 1 1 0;
		min-width: 0;
	}

	.profile-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.6rem;
	}

	.profile-role {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.68rem;
		color: #5c4630;
		font-weight: 700;
		white-space: nowrap;
	}

	.profile-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.6rem 1rem;
		margin-bottom: 0.6rem;
	}

	.profile-label {
		margin: 0.5rem 0 0.25rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.68rem;
		color: #5c4630;
		font-weight: 700;
	}

	.profile-portrait {
		flex: 0 0 180px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.portrait-frame {
		width: 180px;
		height: 220px;
		border-radius: 16px;
		border: 2px dashed rgba(94, 71, 42, 0.5);
		background: linear-gradient(180deg, rgba(122, 47, 31, 0.08), rgba(122, 47, 31, 0.16));
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.65rem;
		color: #6b655b;
	}

	@media (max-width: 900px) {
		.profile-card {
			flex-direction: column;
		}

		.profile-portrait {
			align-self: flex-start;
		}
	}
</style>
