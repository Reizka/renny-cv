<script>
	import data from "$lib/data/ux-research.json";

	let activeTags = [];

	const allTags = Array.from(
		new Set(data.caseStudies.flatMap((cs) => cs.tags || []))
	).sort();

	let tagOpen = false;
	let filterEl;

	$: filteredCaseStudies =
		activeTags.length === 0
			? data.caseStudies
			: data.caseStudies.filter(
					(cs) =>
						cs.tags && activeTags.every((tag) => cs.tags.includes(tag))
				);

	function toggleTag(tag) {
		activeTags = activeTags.includes(tag)
			? activeTags.filter((t) => t !== tag)
			: [...activeTags, tag];
	}

	function clearTags() {
		activeTags = [];
	}

	function toggleTagOpen() {
		tagOpen = !tagOpen;
	}

	function handleOutsideClick(event) {
		if (!tagOpen) return;
		const path = event.composedPath ? event.composedPath() : [];
		if (!path.includes(filterEl)) {
			tagOpen = false;
		}
	}
</script>

<svelte:window on:click={handleOutsideClick} />

<div class="ux-layout">
	<aside class="ux-nav">
		<a class="ux-tab" href="/portfolio/ux-research">About</a>
		<div class="ux-group">
			<div class="ux-group-header">
				<p class="ux-group-title">Case Studies</p>
				<div class="ux-filter" bind:this={filterEl}>
					<button type="button" class="ux-filter-clear" on:click={clearTags}>
						All
					</button>
					<button
						type="button"
						class="ux-filter-toggle"
						on:click|stopPropagation={toggleTagOpen}
					>
						Filter tags
					</button>
					{#if tagOpen}
						<div class="ux-filter-menu" on:click|stopPropagation>
							{#each allTags as tag}
								<button
									type="button"
									class:tag-active={activeTags.includes(tag)}
									on:click={() => toggleTag(tag)}
								>
									{tag}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
			{#if activeTags.length > 0}
				<div class="ux-active-tags">
					{#each activeTags as tag}
						<button type="button" on:click={() => toggleTag(tag)}>
							{tag} ✕
						</button>
					{/each}
				</div>
			{/if}
			<ul>
				{#each filteredCaseStudies as cs, i}
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

	.ux-group-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.6rem;
		margin-bottom: 0.6rem;
	}

	.ux-filter {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		position: relative;
	}

	.ux-filter-clear {
		border: 1px solid rgba(245, 242, 236, 0.35);
		background: rgba(12, 10, 14, 0.45);
		color: rgba(245, 242, 236, 0.9);
		font-size: 0.6rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.2rem 0.45rem;
		border-radius: 999px;
		cursor: pointer;
	}

	.ux-filter-clear:hover {
		background: rgba(245, 242, 236, 0.12);
	}

	.ux-filter-toggle {
		border: 1px solid rgba(245, 242, 236, 0.35);
		background: rgba(12, 10, 14, 0.65);
		color: rgba(245, 242, 236, 0.9);
		font-size: 0.62rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0.2rem 0.45rem;
		border-radius: 10px;
		cursor: pointer;
	}

	.ux-filter-menu {
		position: absolute;
		top: calc(100% + 0.35rem);
		right: 0;
		min-width: 170px;
		background: rgba(12, 10, 14, 0.92);
		border: 1px solid rgba(245, 242, 236, 0.2);
		border-radius: 12px;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		z-index: 20;
		box-shadow: 0 16px 30px rgba(5, 4, 8, 0.4);
	}

	.ux-filter-menu button {
		border: 1px solid rgba(245, 242, 236, 0.25);
		background: rgba(245, 242, 236, 0.08);
		color: rgba(245, 242, 236, 0.9);
		font-size: 0.62rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0.28rem 0.45rem;
		border-radius: 10px;
		text-align: left;
		cursor: pointer;
	}

	.ux-filter-menu button.tag-active {
		background: rgba(245, 242, 236, 0.85);
		color: #1f1c16;
		border-color: transparent;
	}

	.ux-active-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin: 0 0 0.7rem;
	}

	.ux-active-tags button {
		border: 1px solid rgba(245, 242, 236, 0.35);
		background: rgba(245, 242, 236, 0.85);
		color: #1f1c16;
		font-size: 0.6rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.2rem 0.45rem;
		border-radius: 999px;
		cursor: pointer;
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
