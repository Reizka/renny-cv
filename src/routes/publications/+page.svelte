<!--PUBLICATIONS-->
<script>
	import pf from '$lib/data/2022-pubs.json';
	//Getting external link icon
	import GoLinkExternal from 'svelte-icons/go/GoLinkExternal.svelte';
</script>

<main>



	<div class="flex flex-col justify-center items-center">
  
	<h2 class="text-6xl underline mt-4">Publications</h2>

	<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 m-6 m-auto p-6">
		{#each pf as p, i}
			<div class="border-2 mt-2 border-black bg-white shadow-xl">
				<div class="">
					<div class="float-left m-1 lg:text-l m-2">
						{#if p.info.type === 'Journal Articles'}
							<div class="bg-violet-200">Journal Paper</div>
						{:else if p.info.type === 'Conference and Workshop Papers'}
							<div class="bg-cyan-300">Conference Paper</div>
						{:else}
							<div class="bg-amber-200">Publication</div>
						{/if}
					</div>
					<div class="h-8 w-8 relative float-right group">
						<div
							class="
                            opacity-0 
                            group-hover:opacity-100
                            w-20
                            bg-black
                            absolute 
                            z-10 
                            -top-6
                            bottom-8
                            -right-6
                            -left-5
                            flex justify-center items-center
                            font-thin
                            text-xs text-white font-semibold
                            rounded
                            "
						>
							external link
						</div>
						<a href={p.info.ee} target="_blank" rel="noopener noreferrer" alt="link to publication"
							><GoLinkExternal /></a
						>
					</div>
				</div>

				<div class="font-mono ml-2 mr-2 mt-8 text-l lg:text-xl">{p.info.title}</div>
				<div class="font-serif flex lg:text-l">
					<div class="m-1">{p.info.year}</div>
					<div class="m-1">{p.info.venue}</div>
				</div>
				<div class="flex">
					{#each p.info.authors.author as a}
						{#if a.text === 'Renny S. N. Lindberg'}
							<div class="font-bold text-xs lg:text-sm pl-1">{a.text}</div>
						{:else}
							<div class="font-thin text-xs lg:text-sm pl-1">{a.text}</div>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
</main>
