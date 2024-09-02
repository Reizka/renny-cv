<script>
	export let props = undefined;

	import placeholder from "$lib/images/no-photos.png";
	import GetLogo from "./GetLogo.svelte";

	const title = props.title;
	const short_description = props.short_description;
	let type = props.type;
	const keywords = props.keywords;
	const long_description = props.long_description;
	const imageName = props.imageName;
	const url = props.url;
	const github = props.github;

	let showModal = false;

	function closeModal() {
		showModal = false;
	}

	// Mapping of type values to corresponding background classes
	const typeToClassMap = {
		Work: "bg-violet-400",
		Hobby: "bg-green-400",
		Research: "bg-orange-400",
	};

	// Default class if type doesn't match any key in the map
	const defaultClass = "bg-blue-400";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20"
		on:click={closeModal}
	>
		<div
			class="relative bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-2/3 h-full sm:w-[80%] sm:h-[80%] overflow-y-auto"
		>
			<button
				class="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
				on:click={closeModal}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<div class="flex items-center space-x-4">
				<h1 class="text-2xl font-bold">{title}</h1>
			</div>
			<h2 class="{typeToClassMap[type] || defaultClass} m-auto">
				{type}
			</h2>
			<p>{long_description}</p>

			<div
				class="flex flex-col mt-4 border-t-4 border-b-4 border-gray-500 rounded-lg p-4"
			>
				{#if url !== ""}
					<div class="flex items-center pb-4">
						<div class="ml-2">
							<span class="font-semibold">Project Website: </span>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-500 hover:underline"
							>
								{url}
							</a>
						</div>
					</div>
				{/if}

				{#if github !== ""}
					<div
						class="flex items-center pb-4 border-b-4 border-gray-500"
					>
						<img
							class="w-10 h-10"
							src="/images/github-mark.png"
							alt="GitHub Repository Thumbnail"
						/>
						<div class="ml-2">
							<span class="font-semibold">Project Link: </span>
							<a
								href={github}
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-500 hover:underline"
							>
								{github}
							</a>
						</div>
					</div>
				{/if}

				<div class="pt-4">
					<div class="mb-2 flex flex-row items-center space-x-2">
						<h3 class="text-lg font-semibold underline">
							Features
						</h3>
						<GetLogo {keywords} />
					</div>
					<div class="flex flex-row items-center space-x-4">
						{#each keywords as kw, i}
							<div class="flex items-center space-x-2">
								<!-- svelte-ignore a11y-label-has-associated-control -->
								<label>{kw}</label>
								{#if i < keywords.length - 1}
									<div class="border-l-2 h-6 mx-2"></div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Main Component -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex-col h-2/3 rounded-xl w-[70%] m-auto transition-transform transform hover:scale-105 cursor-pointer"
	on:click={() => (showModal = true)}
>
	<div class="relative flex bg-gray-200 justify-center">
		{#if imageName === ""}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src={placeholder}
				alt="image placeholder"
				class="scale-50 h-60 w-60"
			/>
		{:else}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				class="scale-55 h-60"
				src={"/images/" + imageName + ".png"}
				alt="image of portfolio"
			/>
		{/if}
		<div
			class="absolute w-full bottom-0 left-1/2 -translate-x-1/2 border-3 bg-teal-400 p-2 pw-5 opacity-80"
		>
			<h1 class="text-xl font-bold text-black opacity-100">{title}</h1>
		</div>
	</div>
	<div class="flex-shrink border-2 h-auto bg-white rounded-b-2xl shadow-2xl">
		<h2 class="{typeToClassMap[type] || defaultClass} m-auto">{type}</h2>
		<p>{short_description}</p>
		<div class="flex flex-row">
			<GetLogo {keywords} />
		</div>
	</div>
</div>
