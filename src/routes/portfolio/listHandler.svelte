<script>
	import List from './List.svelte';
	import pf from "$lib/data/portfolio.json" 
    import pfComponent from "./portfolioComponent.svelte";

	const items = pf.map((x) =>  {value:x, pfComponent});
</script>

<h1>
	Items
</h1>
<List {items} />