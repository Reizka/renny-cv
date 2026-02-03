<script>
	/**
	 * @typedef {{
	 * 	title: string;
	 * 	short_description: string;
	 * 	type: string;
	 * 	keywords: string[];
	 * 	long_description: string;
	 * 	imageName: string;
	 * 	url: string;
	 * 	github: string;
	 * }} PortfolioProps
	 */

	export let props = /** @type {PortfolioProps} */ ({
		title: "",
		short_description: "",
		type: "",
		keywords: [],
		long_description: "",
		imageName: "",
		url: "",
		github: "",
	});

	import placeholder from "$lib/images/no-photos.png";
	import GetLogo from "./GetLogo.svelte";

	let title = "";
	let short_description = "";
	let type = "";
	let keywords = /** @type {string[]} */ ([]);
	let long_description = "";
	let imageName = "";
	let url = "";
	let github = "";

	$: ({
		title,
		short_description,
		type,
		keywords,
		long_description,
		imageName,
		url,
		github,
	} = props);

	let showModal = false;

	function closeModal() {
		showModal = false;
	}

	// Mapping of type values to corresponding background classes
	const typeToClassMap = /** @type {Record<string, string>} */ ({
		Work: "bg-violet-400",
		Hobby: "bg-green-400",
		Research: "bg-orange-400",
	});

	// Default class if type doesn't match any key in the map
	const defaultClass = "bg-blue-400";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="fixed inset-0 bg-white/40 backdrop-blur-sm flex justify-center items-center z-20 modal-backdrop"
		on:click={closeModal}
	>
		<div
			class="relative bg-white/80 rounded-2xl shadow-xl w-full lg:w-3/4 sm:w-[86%] max-h-[86vh] overflow-y-auto modal-sheet"
		>
			<div class="modal-image">
				{#if imageName === ""}
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src={placeholder} alt="image placeholder" />
				{:else}
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src={"/images/" + imageName + ".png"} alt="image of portfolio" />
				{/if}
			</div>
			<button
				class="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
				aria-label="Close details"
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

			<div class="flex flex-col gap-2 px-5 sm:px-7 pt-5">
				<h1 class="text-2xl font-bold">{title}</h1>
				<p class="text-sm text-gray-600">{type}</p>
			</div>
			<p class="mt-3 px-5 sm:px-7 text-gray-800 leading-relaxed">
				{long_description}
			</p>

			<div class="flex flex-col mt-6 mx-5 sm:mx-7 mb-6 rounded-xl bg-white/70 p-4">
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
					<div class="flex items-center pb-4">
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
					<h3 class="text-lg font-semibold">Technologies</h3>
					<div class="mt-3 flex flex-row flex-wrap items-center gap-3">
						{#each keywords as kw, i}
							<span class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
								>{kw}</span
							>
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
	class="group flex-col h-2/3 rounded-xl w-[70%] m-auto transition-transform transform hover:scale-105 cursor-pointer"
	on:click={() => (showModal = true)}
>
	<div class="relative flex bg-gray-200 justify-center">
		<div class="image-frame">
			{#if imageName === ""}
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src={placeholder}
					alt="image placeholder"
					class="h-60 w-full object-cover"
				/>
			{:else}
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					class="h-60 w-full object-cover"
					src={"/images/" + imageName + ".png"}
					alt="image of portfolio"
				/>
			{/if}
		</div>
		<div class="icon-stack">
			<GetLogo {keywords} />
		</div>
		<div
			class="absolute w-full bottom-0 left-1/2 -translate-x-1/2 bg-teal-400 p-2 pw-5 opacity-80"
		>
			<h1 class="text-xl font-bold text-black opacity-100">{title}</h1>
		</div>
	</div>
	<div class="flex-shrink h-auto bg-white rounded-b-2xl shadow-2xl">
	</div>
</div>

<style>
	.modal-backdrop {
		animation: backdropFade 180ms ease-out;
		perspective: 1200px;
	}

	.modal-sheet {
		animation: modalFlip 260ms ease-out;
		backdrop-filter: blur(12px);
		transform-style: preserve-3d;
		overflow: hidden;
	}

	.modal-image img {
		display: block;
		width: 100%;
		height: 220px;
		object-fit: cover;
	}

	@media (min-width: 640px) {
		.modal-image img {
			height: 260px;
		}
	}

	@keyframes modalFlip {
		from {
			transform: translateY(18px) rotateY(-18deg) scale(0.98);
			opacity: 0;
		}
		to {
			transform: translateY(0) rotateY(0deg) scale(1);
			opacity: 1;
		}
	}

	@keyframes backdropFade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.image-frame {
		width: 100%;
		overflow: hidden;
	}

	.icon-stack {
		position: absolute;
		top: 0.85rem;
		right: 0;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		pointer-events: none;
	}

	:global(.icon-stack .logo-chip) {
		width: 2.25rem;
		height: 2.25rem;
		display: grid;
		place-items: center;
		background: rgba(255, 255, 255, 0.92);
		border-radius: 0 999px 999px 0;
		box-shadow: 0 10px 18px rgba(10, 8, 12, 0.2);
		transform: translateX(0);
		opacity: 0;
		transition: transform 320ms ease, opacity 220ms ease;
		transition-delay: var(--delay, 0ms);
	}

	:global(.icon-stack .logo-chip img),
	:global(.icon-stack .logo-chip svg) {
		width: 1.35rem;
		height: 1.35rem;
	}

	.group:hover :global(.icon-stack .logo-chip) {
		transform: translateX(115%);
		opacity: 1;
	}
</style>
