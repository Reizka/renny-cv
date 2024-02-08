<script>
	import skills from '$lib/data/skills.json';
	import TiChevronRightOutline from 'svelte-icons/ti/TiChevronRightOutline.svelte'
	import TiChevronLeftOutline from 'svelte-icons/ti/TiChevronLeftOutline.svelte'

	let currentIndex = 0; 

	function goNext() {
		currentIndex = (currentIndex + 1) % skills.length; // Cycle forward
	}

	function goPrevious() {
		currentIndex = (currentIndex - 1 + skills.length) % skills.length; // Cycle backward
	}
	
	 // Reactive statement to update button text based on currentIndex
	 $: nextBtnText = currentIndex + 1 < skills.length ? skills[currentIndex + 1].title : skills[0].title;
	 $: prevBtnText = currentIndex -1  > 0 ? skills[currentIndex -1].title : skills[skills.length - 1].title;



</script>


<main>
	<button class="absolute mt-15 mb-20 h-full w-20 left-0 text-sm hover:w-40 hover:text-xl" on:click={goPrevious}>{prevBtnText} <TiChevronLeftOutline/> </button>
	<button class="absolute mt-15 mb-20 h-full w-20 right-0 text-sm hover:w-40 hover:text-xl" on:click={goNext}>{nextBtnText} <TiChevronRightOutline/></button>
	<div class="flex flex-col justify-center -center">
		<div class="slide flex flex-col justify-center items-center">
			<h2 class="sm:text-6xl underline mt-4 m-auto min-[400px]:text-2xl">
				{skills[currentIndex].title}
			</h2>
	
			<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 m-auto p-12">
				{#each skills[currentIndex].categories as category}
					<div class="skill-container flex flex-col">
						<h3 class="bg-teal-300 text-xl text-center font-bold">{category.name}</h3>
						<ul class="list-disc m-auto p-10">
							{#each category.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	.skill-container {
		background-color: white;
		margin-bottom: 20px;
		border-radius: 5px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		padding-bottom: 1em;
	}
	p{
		margin-left: 6px;
		margin-right: 6px;
	}
</style>
