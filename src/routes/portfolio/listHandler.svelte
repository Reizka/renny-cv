<script>
	export let items = undefined;
</script>

<div class="grid grid-cols-2 gap-8">
	{#each items as item, i}
		<svelte:component this={item.component} props={item} />
	{/each}
</div>
