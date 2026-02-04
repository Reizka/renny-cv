<script>
	import data from "$lib/data/narrative-design.json";
	import { page } from "$app/stores";

	$: params = $page.params;
	$: system = data.systems.find((s) => s.slug === params.system);
	$: group = system?.groups.find((g) => g.slug === params.category);
	$: item = group?.items.find((i) => i.slug === params.title);
</script>

<div class="story-layout">
	<aside class="story-toc">
		<p class="toc-title">On this page</p>
		<ul>
			<li><a href="#intro">Introduction</a></li>
			<li><a href="#summary">Story Summary</a></li>
			<li><a href="#scenarios">Scenarios</a></li>
			<li><a href="#act-1">Act 1</a></li>
			<li><a href="#act-2">Act 2</a></li>
			<li><a href="#act-3">Act 3</a></li>
		</ul>
	</aside>

	<section class="detail-section">
		<p class="eyebrow">Narrative Design</p>
		<h1>{item?.name || "Story"}</h1>
		<p class="meta">{system?.name} · {group?.name}</p>

		<h2 id="intro">Introduction</h2>
		<table class="intro-table">
			<tbody>
				<tr>
					<th>Recommended Party Size &amp; Level</th>
					<td></td>
				</tr>
				<tr>
					<th>Estimated Runtime</th>
					<td>3–4 hours</td>
				</tr>
				<tr>
					<th>Tone &amp; Themes</th>
					<td></td>
				</tr>
				<tr>
					<th>Content Warnings</th>
					<td></td>
				</tr>
				<tr>
					<th>GM Difficulty</th>
					<td>Low / Medium / High prep</td>
				</tr>
			</tbody>
		</table>

		<h2 id="summary">Story Summary</h2>
		<p class="body">Story content coming soon.</p>

		<h2 id="scenarios">Scenarios</h2>
		<h3 id="act-1">Act 1:</h3>
		<p class="body">Content coming soon.</p>
		<h3 id="act-2">Act 2:</h3>
		<p class="body">Content coming soon.</p>
		<h3 id="act-3">Act 3:</h3>
		<p class="body">Content coming soon.</p>
	</section>
</div>

<style>
	.story-layout {
		display: grid;
		grid-template-columns: minmax(160px, 220px) 1fr;
		gap: 2rem;
		align-items: start;
		max-width: 980px;
		margin: 0 auto;
	}

	.story-toc {
		position: sticky;
		top: 1.5rem;
		align-self: start;
		background: rgba(255, 255, 255, 0.55);
		border-radius: 14px;
		padding: 0.9rem 1rem;
		box-shadow: 0 10px 22px rgba(31, 28, 22, 0.08);
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
		flex-direction: column;
		gap: 0.4rem;
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

	.meta {
		color: #6b655b;
		margin: 0;
	}

	.body {
		margin: 0.4rem 0 0;
		color: #2f2a22;
	}

	.intro-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.95rem;
	}

	.intro-table th {
		text-align: left;
		padding: 0.5rem 0.6rem 0.5rem 0;
		color: #4c4740;
		font-weight: 600;
		width: 45%;
	}

	.intro-table td {
		padding: 0.5rem 0;
		color: #2f2a22;
	}

	@media (max-width: 900px) {
		.story-layout {
			grid-template-columns: 1fr;
		}

		.story-toc {
			position: static;
		}
	}
</style>
