<script>
	import { page } from "$app/stores";

	$: basePath = `/portfolio/narrative-design/${$page.params.system}/${$page.params.category}/${$page.params.title}`;
	$: currentPath = $page.url.pathname;
</script>

<div class="detail-tabs">
	<a class:active={currentPath === basePath} href={basePath}>Story</a>
	<a
		class:active={currentPath === `${basePath}/npcs`}
		href={`${basePath}/npcs`}
		>NPCs</a
	>
	<a
		class:active={currentPath === `${basePath}/locations`}
		href={`${basePath}/locations`}
		>Locations</a
	>
</div>
<slot />

<style>
	.detail-tabs {
		display: inline-flex;
		gap: 0.7rem;
		background: rgba(255, 255, 255, 0.6);
		padding: 0.4rem;
		border-radius: 999px;
		box-shadow: 0 10px 22px rgba(31, 28, 22, 0.08);
		margin-bottom: 1.4rem;
	}

	.detail-tabs a {
		text-decoration: none;
		color: #2f2a22;
		font-size: 0.9rem;
		padding: 0.35rem 0.9rem;
		border-radius: 999px;
	}

	.detail-tabs a.active {
		background: #2a241f;
		color: #f5f2ec;
	}
</style>
