<script>
	import data from "$lib/data/narrative-design.json";
</script>

<section class="section">
	<p class="eyebrow">Narrative Design</p>
	<h1>Story Worlds</h1>
	<p class="intro">
		This space is a narrative design archive rather than a traditional
		portfolio. Each system links to playable stories, with drafts, NPCs, and
		locations organized like a writer's room.
	</p>
	<p class="intro">
		Select a system and scenario to explore the Story landing page and its
		supporting materials.
	</p>

	<div class="overview-grid">
		{#each data.systems as system}
			<div class="overview-card">
				<h2>{system.name}</h2>
				<p>
					{system.groups.map((group) => group.name).join(" · ")}
				</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.section {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
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

	.overview-grid {
		margin-top: 1.6rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.1rem;
	}

	.overview-card {
		background: rgba(255, 255, 255, 0.45);
		border-radius: 18px;
		padding: 1.1rem 1.2rem;
		box-shadow: 0 12px 24px rgba(31, 28, 22, 0.08);
	}

	.overview-card h2 {
		margin: 0 0 0.4rem;
		font-size: 1.1rem;
	}

	.overview-card p {
		margin: 0;
		color: #5b5852;
		font-size: 0.9rem;
	}
</style>
