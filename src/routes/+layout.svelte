<script>
	import Header from './Header.svelte';
	import './app.css';
</script>

<div class="app ">
	<Header />

	<main>
			<slot />
	</main>

<!--
	<footer class="w-full bg-gray-400 ">
		<p>footer</p>
	</footer>
-->
</div>

<style>
	
	/*.app {
		min-width: 400px;
	}
	
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}*/
</style>
