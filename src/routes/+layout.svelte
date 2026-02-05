<script>
	import Header from "./Header.svelte";
	import "./app.css";
		import PageTrans from "../lib/utility/PageTrans.svelte";
		import { page, navigating } from "$app/stores";

		const isNarrativePath = (pathname) =>
			pathname?.startsWith("/portfolio/narrative-design/");
		const isUxResearchPath = (pathname) =>
			pathname?.startsWith("/portfolio/ux-research/");
		const buildNarrativeKey = (pathname, params) => {
			if (!pathname) return "";
			const parts = pathname.split("/").filter(Boolean);
			const system = params?.system ?? parts[2] ?? "";
			const category = params?.category ?? parts[3] ?? "";
			const title = params?.title ?? parts[4] ?? "";
			return [system, category, title].filter(Boolean).join("/");
		};
		const buildUxKey = (pathname, params) => {
			if (!pathname) return "";
			const parts = pathname.split("/").filter(Boolean);
			return params?.slug ?? parts[2] ?? "";
		};

		$: pageRefreshKey = isNarrativePath($page.url.pathname)
			? buildNarrativeKey($page.url.pathname, $page.params)
			: isUxResearchPath($page.url.pathname)
				? buildUxKey($page.url.pathname, $page.params)
				: $page.route.id;

		$: navigatingFrom = $navigating?.from?.url?.pathname;
		$: navigatingTo = $navigating?.to?.url?.pathname;
		$: fromKey = isNarrativePath(navigatingFrom)
			? buildNarrativeKey(navigatingFrom, $navigating?.from?.params)
			: isUxResearchPath(navigatingFrom)
				? buildUxKey(navigatingFrom, $navigating?.from?.params)
				: navigatingFrom;
		$: toKey = isNarrativePath(navigatingTo)
			? buildNarrativeKey(navigatingTo, $navigating?.to?.params)
			: isUxResearchPath(navigatingTo)
				? buildUxKey(navigatingTo, $navigating?.to?.params)
				: navigatingTo;
		$: showNavOverlay =
			$navigating && (!fromKey || !toKey || fromKey !== toKey);
	</script>

<div class="app">
	<Header />

		{#if showNavOverlay}
			<div class="nav-overlay" aria-hidden="true">
				<div class="spinner"></div>
			</div>
		{/if}

	<main>
		{#if $page.url.pathname.startsWith("/portfolio/narrative-design")}
			<div class="m-6">
				<slot />
			</div>
		{:else}
			<PageTrans refresh={pageRefreshKey} cls={"m-6"}>
				<slot />
			</PageTrans>
		{/if}
	</main>

	<!--
	<footer class="w-full bg-gray-400 ">
		<p>footer</p>
	</footer>
-->
</div>

<style>
	.nav-overlay {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		background: rgba(10, 8, 12, 0.25);
		backdrop-filter: blur(2px);
		z-index: 9998;
	}


	.spinner {
		width: 32px;
		height: 32px;
		border-radius: 999px;
		border: 2px solid rgba(245, 242, 236, 0.4);
		border-top-color: rgba(245, 242, 236, 0.9);
		animation: spin 700ms linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
