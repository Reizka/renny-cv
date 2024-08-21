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
			component: ItemTypeOne,
		};
		return p;
	});
</script>

<div class="flex flex-col justify-center items-center">
	<h2
		class="text-6xl relative postion-left-0 pb-10 underline min-[400px]:text-2xl"
	>
		Technical portfolio
	</h2>
	<div class="flex flex-col lg:flex-row m-auto md:w-1/2 sm:w-[80%]">
		<div
			class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 m-auto p-6"
		>
			{#each mapped as item, i}
				<svelte:component this={item.component} props={item} />
			{/each}
		</div>
	</div>
</div>
