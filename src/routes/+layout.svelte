<script>
	import Header from "./Header.svelte";
	import "./app.css";
	import PageTrans from "../lib/utility/PageTrans.svelte";
	import { page } from "$app/stores";
</script>

<div class="app">
	<Header />

	<main>
		<PageTrans refresh={$page.route.id} cls={"m-4"}>
			<slot />
		</PageTrans>
	</main>

	<!--
	<footer class="w-full bg-gray-400 ">
		<p>footer</p>
	</footer>
-->
</div>

<style>
</style>
