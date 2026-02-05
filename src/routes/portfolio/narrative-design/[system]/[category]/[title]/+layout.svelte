<script>
	import { page } from "$app/stores";

	$: basePath = `/portfolio/narrative-design/${$page.params.system}/${$page.params.category}/${$page.params.title}`;
	$: currentPath = $page.url.pathname;
	const tabs = [
		{ label: "Story", path: "" },
		{ label: "Characters", path: "/characters" },
		{ label: "Monsters", path: "/monsters" },
		{ label: "Locations", path: "/locations" },
	];

	$: activeIndex = tabs.findIndex(
		(tab) => currentPath === `${basePath}${tab.path}`
	);
	if (activeIndex < 0) activeIndex = 0;
</script>

<div class="detail-tabs-wrap">
	<div class="detail-tabs" style={`--active-index: ${activeIndex}`}>
		<span class="tab-indicator"></span>
		{#each tabs as tab}
			<a
				class:active={currentPath === `${basePath}${tab.path}`}
				href={`${basePath}${tab.path}`}
				>{tab.label}</a
			>
		{/each}
	</div>
</div>
<slot />

<style>
	.detail-tabs-wrap {
		max-width: 720px;
		margin: 0 auto 1.4rem;
	}

	.detail-tabs {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
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
		width: calc((100% - 0.6rem) / 4);
		background: #2a241f;
		border-radius: 999px;
		transform: translateX(calc(var(--active-index) * 100%));
		transition: transform 260ms ease;
	}

	@media (max-width: 640px) {
		.detail-tabs {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			border-radius: 16px;
		}

		.detail-tabs a {
			font-size: 0.8rem;
			padding: 0.45rem 0.2rem;
		}

		.detail-tabs a.active {
			background: #2a241f;
		}

		.tab-indicator {
			display: none;
		}
	}
</style>
