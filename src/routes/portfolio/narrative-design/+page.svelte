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

</style>
