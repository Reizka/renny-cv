<script>
	import List from './List.svelte';
	
	const items = [
		{ value: 'I am red!', component: ItemTypeOne },
		{ value: 'I am blue!', component: ItemTypeTwo }
	];
</script>

<h1>
	Items
</h1>
<List {items} />