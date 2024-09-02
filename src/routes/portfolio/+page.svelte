<script>
	import pf from "$lib/data/portfolio.json";
	import ItemTypeOne from "./portfolioComponent.svelte";
	const mapped = pf.map((x) => {
		let p = {
			title: x.title,
			short_description: x.short_description,
			type: x.type,
			keywords: x.keywords,
			long_description: x.long_description,
			imageName: x.imageName,
			url: x.url,
			type: x.type,
			github: x.github,
			component: ItemTypeOne,
		};
		return p;
	});
</script>

<div class="flex flex-col justify-center items-center">
	<h2 class="text-xl lg:text-6xl underline mt-4 min-[400px]:text-2xl">
		Technical portfolio
	</h2>

	<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
		{#each mapped as item, i}
			<svelte:component this={item.component} props={item} />
		{/each}
	</div>
</div>
