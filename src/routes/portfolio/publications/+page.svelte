<!--PUBLICATIONS-->
<script>
	import pf from "$lib/data/2022-pubs.json";
	// @ts-ignore - svelte-icons lacks published type declarations
	import GoLinkExternal from "svelte-icons/go/GoLinkExternal.svelte";
</script>

<section class="section">
	<div class="section-inner">
		<p class="eyebrow">Portfolio</p>
		<h1>Publications</h1>
		<div class="grid">
			{#each pf as p, i}
				<div class="pub-card">
					<div class="pub-head">
						<div class="pub-type">
							{#if p.info.type === "Journal Articles"}
								<div class="bg-violet-200">Journal Paper</div>
							{:else if p.info.type === "Conference and Workshop Papers"}
								<div class="bg-cyan-300">Conference Paper</div>
							{:else if p.info.type === "Dissertation"}
								<div class="bg-amber-200">Dissertation</div>
							{:else}
								<div class="bg-amber-200">Publication</div>
							{/if}
						</div>
						<div class="pub-link group">
							<div class="link-tip">external link</div>
							<a href={p.info.ee} target="_blank" rel="noopener noreferrer">
								<GoLinkExternal />
							</a>
						</div>
					</div>

					<div class="pub-title">{p.info.title}</div>
					<div class="pub-meta">
						<div>{p.info.year}</div>
						<div>{p.info.venue}</div>
					</div>
					<div class="pub-authors">
						{#each p.info.authors.author as a}
							{#if a.text === "Renny S. N. Lindberg"}
								<div class="author-strong">{a.text}</div>
							{:else}
								<div class="author-weak">{a.text}</div>
							{/if}
						{/each}
					</div>
				</div>
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

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.24em;
		font-size: 0.65rem;
		color: #7b756c;
		margin-bottom: 0.8rem;
	}

	h1 {
		font-size: clamp(2rem, 4vw, 3rem);
		margin: 0 0 1.4rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.2rem;
	}

	.pub-card {
		background: #ffffff;
		border-radius: 16px;
		box-shadow: 0 16px 30px rgba(31, 28, 22, 0.1);
		padding: 1rem 1rem 1.2rem;
	}

	.pub-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.pub-type {
		font-size: 0.75rem;
	}

	.pub-link {
		position: relative;
		width: 1.8rem;
		height: 1.8rem;
		display: grid;
		place-items: center;
	}

	.pub-link :global(svg) {
		width: 1rem;
		height: 1rem;
	}

	.link-tip {
		opacity: 0;
		position: absolute;
		right: -0.8rem;
		top: -1.8rem;
		background: #1f1c16;
		color: #f5f2ec;
		font-size: 0.65rem;
		padding: 0.2rem 0.4rem;
		border-radius: 6px;
		transition: opacity 150ms ease;
		white-space: nowrap;
	}

	.pub-link:hover .link-tip {
		opacity: 1;
	}

	.pub-title {
		font-family: "Space Grotesk", "Segoe UI", sans-serif;
		margin-top: 0.8rem;
		font-size: 1rem;
	}

	.pub-meta {
		display: flex;
		gap: 0.6rem;
		font-size: 0.85rem;
		color: #6a6358;
		margin-top: 0.4rem;
	}

	.pub-authors {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		margin-top: 0.6rem;
	}

	.author-strong {
		font-weight: 600;
		font-size: 0.75rem;
	}

	.author-weak {
		font-weight: 300;
		font-size: 0.75rem;
	}
</style>
