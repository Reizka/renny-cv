<script>
	import skills from "$lib/data/skills.json";

	// Track the open state of each category, with only one category open at a time
	let openCategories = skills.map((skill) =>
		skill.categories.map(() => false),
	);

	// Toggle the open state of a category and close others
	function toggleCategory(skillIndex, categoryIndex) {
		openCategories = openCategories.map((skillCategories, i) =>
			i === skillIndex
				? skillCategories.map((isOpen, j) =>
						j === categoryIndex ? !isOpen : false,
					)
				: skillCategories.map(() => false),
		);
	}
</script>

<main>
	<div class="flex flex-col justify-center items-center relative w-full">
		<!-- Title -->
		<h2 class="text-xl lg:text-6xl underline mt-4 min-[400px]:text-2xl">
			Skills
		</h2>

		<!-- Navigation Links (hidden on small screens) -->
		<div class="z-10 bg-white shadow-md w-full p-2 sm:p-4 hidden sm:block">
			<nav class="flex justify-center space-x-4">
				{#each skills as skill, index}
					<button
						class="px-2 py-2 sm:px-4 sm:py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none text-sm sm:text-base"
						on:click={() =>
							(openCategories = openCategories.map(() =>
								skill.categories.map(() => false),
							))}
					>
						{skill.title}
					</button>
				{/each}
			</nav>
		</div>

		<!-- Scrollable Skill Containers -->
		<div
			class="slide-container flex overflow-x-auto snap-x snap-mandatory mt-4"
			style="cursor: grab;"
		>
			{#each skills as skill, skillIndex}
				<div
					class="skill-container snap-center flex-shrink-0 w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 -ml-6 sm:ml-0"
				>
					<h2
						class="text-xl sm:text-3xl underline mt-4 m-auto text-center"
					>
						{skill.title}
					</h2>
					<div class="grid gap-2 p-4 sm:p-6">
						{#each skill.categories as category, categoryIndex}
							<div class="skill-item flex flex-col">
								<!-- Toggle Button for Category -->
								<button
									class="bg-teal-300 text-base sm:text-lg text-center font-bold p-2 rounded"
									on:click={() =>
										toggleCategory(
											skillIndex,
											categoryIndex,
										)}
								>
									{category.name}
								</button>
								<!-- Collapsible Content with Borders and Background -->
								{#if openCategories[skillIndex][categoryIndex]}
									<div
										class="p-4 bg-gray-100 border border-gray-300 rounded mt-2 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100"
									>
										{#each category.items as item}
											<div class="py-1">{item}</div>
										{/each}
									</div>
								{:else}
									<div
										class="bg-gray-100 border border-gray-300 rounded mt-2 transition-all duration-300 ease-in-out transform translate-y-[-10px] opacity-0 h-0 overflow-hidden"
									></div>
								{/if}
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
		padding: 10px;
	}

	.skill-container {
		scroll-snap-align: center;
		background-color: white;
		margin-bottom: 10px;
		border-radius: 5px;
		box-shadow:
			0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
		padding-bottom: 0.5em;
		max-width: 400px; /* adjust this value as needed for smaller screens */
		overflow-y: auto;
	}

	.skill-container h2 {
		text-align: center;
	}

	.flex-shrink-0 {
		flex-shrink: 0;
	}

	/* Adjust spacing for fixed navbar */
	.h-16 {
		height: 4rem;
	}

	/* Styling for the navigation bar */
	nav button {
		cursor: pointer;
	}

	/* Animation for dropping items */
	@keyframes drop {
		0% {
			opacity: 0;
			transform: translateY(-10px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-drop {
		animation: drop 0.3s ease-in-out forwards;
	}
</style>
