<script>
	import Header from "./Header.svelte";
	import "./app.css";
	import PageTrans from "../lib/utility/PageTrans.svelte";
	import { page, navigating } from "$app/stores";
</script>

<div class="app">
	<Header />

	{#if $navigating}
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
			<PageTrans refresh={$page.route.id} cls={"m-6"}>
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
