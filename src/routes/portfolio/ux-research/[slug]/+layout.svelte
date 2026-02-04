<script>
	import { page } from "$app/stores";
	import data from "$lib/data/ux-research.json";

	$: basePath = `/portfolio/ux-research/${$page.params.slug}`;
	$: currentPath = $page.url.pathname;
	$: isCaseStudy = data.caseStudies.some((cs) => cs.slug === $page.params.slug);
</script>

{#if isCaseStudy}
	<div class="detail-tabs-wrap">
		<div class="detail-tabs" style={`--active-index: ${currentPath === basePath ? 0 : 1}`}>
			<span class="tab-indicator"></span>
			<a class:active={currentPath === basePath} href={basePath}>Work</a>
			<a
				class:active={currentPath === `${basePath}/research-output`}
				href={`${basePath}/research-output`}
				>Research Output</a
			>
		</div>
	</div>
{/if}
<slot />

<style>
	.detail-tabs-wrap {
		max-width: 720px;
		margin: 0 auto 1.4rem;
	}

	.detail-tabs {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.2rem;
		background: rgba(255, 255, 255, 0.6);
		padding: 0.3rem;
		border-radius: 999px;
		box-shadow: 0 10px 22px rgba(31, 28, 22, 0.08);
		position: relative;
	}

	.detail-tabs a {
		text-decoration: none;
		color: #2f2a22;
		font-size: 0.9rem;
		padding: 0.35rem 0.2rem;
		border-radius: 999px;
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.detail-tabs a.active {
		color: #f5f2ec;
	}

	.tab-indicator {
		position: absolute;
		top: 0.3rem;
		left: 0.3rem;
		height: calc(100% - 0.6rem);
		width: calc((100% - 0.6rem) / 2);
		background: #2a241f;
		border-radius: 999px;
		transform: translateX(calc(var(--active-index) * 100%));
		transition: transform 260ms ease;
	}
</style>
