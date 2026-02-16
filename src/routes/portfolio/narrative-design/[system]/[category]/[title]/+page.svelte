<script>
	import data from "$lib/data/narrative-design.json";
	import { page } from "$app/stores";

	$: params = $page.params;
	$: system = data.systems.find((s) => s.slug === params.system);
	$: group = system?.groups.find((g) => g.slug === params.category);
	$: item = group?.items.find((i) => i.slug === params.title);
	$: slug = params?.title;

	const storyModules = import.meta.glob("/src/lib/narrative-design/story/*.svelte", { eager: true });
	const storyBySlug = Object.fromEntries(
		Object.entries(storyModules).map(([path, mod]) => [
			path.split("/").pop().replace(".svelte", ""),
			mod.default
		])
	);
	$: StoryComponent = slug ? storyBySlug[slug] : null;
</script>

<div class="story-layout">
	<section class="detail-section">
		<p class="eyebrow">Narrative Design</p>
		<h1>{item?.name || "Story"}</h1>
		<p class="meta">{system?.name} · {group?.name}</p>
		{#if StoryComponent}
			<svelte:component this={StoryComponent} />
		{:else}
		<p class="body">Story content coming soon.</p>
		{/if}
	</section>
</div>

<style>
	.story-layout {
		display: block;
		max-width: 1040px;
		margin: 0 auto;
	}

	.story-toc {
		position: sticky;
		top: 0.75rem;
		z-index: 2;
		background: rgba(255, 255, 255, 0.92);
		backdrop-filter: blur(8px);
		border-radius: 14px;
		padding: 0.65rem 0.9rem;
		box-shadow: 0 12px 24px rgba(31, 28, 22, 0.1);
		margin-bottom: 1rem;
	}

	.toc-title {
		margin: 0 0 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.65rem;
		color: #6b655b;
	}

	.story-toc ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 0.8rem;
	}

	.story-toc a {
		text-decoration: none;
		color: #2f2a22;
		font-size: 0.9rem;
	}

	.story-toc a:hover {
		color: #7a2f1f;
	}

	.detail-section {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		max-width: 760px;
		margin: 0 auto;
		background: linear-gradient(180deg, #fbf4e4 0%, #f2e4cc 100%);
		border-radius: 18px;
		padding: 1.4rem 1.5rem;
		border: 1px solid rgba(94, 71, 42, 0.2);
		box-shadow: 0 18px 36px rgba(36, 28, 18, 0.12);
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

	h2 {
		font-size: 1.2rem;
		margin: 1.4rem 0 0.6rem;
		scroll-margin-top: 120px;
	}

h3 {
		font-size: 1rem;
		margin: 1rem 0 0.4rem;
		color: #4c4740;
		scroll-margin-top: 120px;
	}

	h4,
	h5 {
		scroll-margin-top: 120px;
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

	ol.body-list {
		list-style: decimal;
	}

	.body-list li {
		margin: 0.35rem 0;
	}

	.body-list.sublist {
		margin: 0.4rem 0 0.6rem 1.4rem;
		font-size: 0.92rem;
	}

	.act-title {
		margin: 0.6rem 0 0.4rem;
		font-size: 1rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #4c4740;
	}

	.act-subtitle {
		margin: 0.7rem 0 0.3rem;
		font-size: 0.9rem;
		color: #5c4630;
		display: inline-block;
		padding-bottom: 0.2rem;
		border-bottom: 1px solid rgba(47, 42, 34, 0.6);
	}

	.intro-table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		font-size: 0.95rem;
		background: #ffffff;
		border-radius: 16px;
		overflow: hidden;
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #7a1a1a, #b22222) 1;
		box-shadow: 0 12px 26px rgba(36, 28, 18, 0.1);
		position: relative;
	}

	.intro-table::before,
	.intro-table::after {
		content: "";
		position: absolute;
		inset: 6px;
		border: 1px solid rgba(47, 42, 34, 0.3);
		border-radius: 12px;
		pointer-events: none;
	}

	.intro-table::after {
		display: none;
	}

	.intro-table th {
		text-align: left;
		padding: 0.8rem 1rem;
		color: #5c4630;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 0.7rem;
		width: 45%;
		background: #ffffff;
		border-right: 1px solid #2f2a22;
	}

	.intro-table td {
		padding: 0.8rem 1rem;
		color: #2f2a22;
		background: #ffffff;
	}

	.intro-table tr + tr th,
	.intro-table tr + tr td {
		border-top: 1px solid #2f2a22;
	}

	.npc-table {
		width: 100%;
		font-size: 0.92rem;
		background: #ffffff;
		border-radius: 16px;
		overflow: hidden;
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #7a1a1a, #b22222) 1;
		box-shadow: 0 12px 26px rgba(36, 28, 18, 0.1);
		margin-bottom: 0.8rem;
	}

	.npc-row {
		padding: 0.9rem 1rem;
		border-top: 1px solid #2f2a22;
	}

	.npc-row:first-child {
		border-top: 0;
	}

	.npc-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.35rem;
	}

	.npc-role {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.68rem;
		color: #5c4630;
		font-weight: 700;
		white-space: nowrap;
	}

	.npc-notes {
		margin: 0;
		color: #2f2a22;
	}

	.npc-notes + .npc-notes {
		margin-top: 0.35rem;
	}

	.npc-list {
		margin: 0.35rem 0 0.5rem 1.1rem;
		padding: 0;
		color: #2f2a22;
		list-style: disc;
	}

	.npc-table strong {
		display: block;
		margin-bottom: 0.2rem;
		color: #4b2e1f;
		font-size: 0.95rem;
	}

	.npc-meta {
		display: block;
		font-size: 0.8rem;
		color: #5c4630;
		letter-spacing: 0.02em;
	}

	.dm-block {
		margin: 0.8rem 0 1rem;
		padding: 0.9rem 1rem;
		background: #ffffff;
		border-radius: 16px;
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #7a1a1a, #b22222) 1;
		box-shadow: 0 12px 26px rgba(36, 28, 18, 0.1);
		position: relative;
	}

	.dm-title {
		margin: 0 0 0.5rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #2f2a22;
		font-size: 0.72rem;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid #2f2a22;
	}

	@media (max-width: 900px) {
		.story-toc {
			top: 0.5rem;
		}
	}
</style>
