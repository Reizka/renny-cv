<script>
	import skills from '$lib/data/skills.json';

	let currentIndex = 0;

	// Update currentIndex based on scroll position
	function handleScroll(event) {
		const container = event.currentTarget;
		const scrollPosition = container.scrollLeft;
		const cardWidth = container.firstElementChild.offsetWidth;

		// Determine the current index based on the scroll position
		currentIndex = Math.round(scrollPosition / cardWidth);
	}
</script>

<main>
	<div class="flex flex-col justify-center items-center">
		<div 
			class="slide-container flex overflow-x-auto snap-x snap-mandatory"
			on:scroll={handleScroll}
		>
			{#each skills as skill, index}
				<div class="skill-container snap-center flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3">
					<h2 class="sm:text-6xl underline mt-4 m-auto min-[400px]:text-2xl text-center">
						{skill.title}
					</h2>
					<div class="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10 p-12">
						{#each skill.categories as category}
							<div class="skill-item flex flex-col">
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
			{/each}
		</div>
	</div>
</main>

<style>
	.slide-container {
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		width: 100%;
		padding: 20px;
	}

	.skill-container {
		scroll-snap-align: center;
		background-color: white;
		margin-bottom: 20px;
		border-radius: 5px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		padding-bottom: 1em;
		width: 100%;
		max-width: 600px; /* adjust this value as needed */
	}

	.skill-container h2 {
		text-align: center;
	}

	.flex-shrink-0 {
		flex-shrink: 0;
	}
</style>
