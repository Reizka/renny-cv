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
	console.log("image", imageName);

	//keyword icons
	import DiAndroid from "svelte-icons/di/DiAndroid.svelte";
	import DiUnitySmall from "svelte-icons/di/DiUnitySmall.svelte";
	import DiHtml5 from "svelte-icons/di/DiHtml5.svelte";
	import DiJsBadge from "svelte-icons/di/DiJsBadge.svelte";
	import DiNodejsSmall from "svelte-icons/di/DiNodejsSmall.svelte";
	import DiFirebase from "svelte-icons/di/DiFirebase.svelte";
	import DiReact from "svelte-icons/di/DiReact.svelte";
	import DiJava from "svelte-icons/di/DiJava.svelte";
	import DiMysql from "svelte-icons/di/DiMysql.svelte";
	import DiSqllite from "svelte-icons/di/DiSqllite.svelte";
	import DiCss3 from "svelte-icons/di/DiCss3.svelte";

	// Mapping of type values to corresponding background classes
	const typeToClassMap = {
		Work: "bg-violet-400",
		Hobby: "bg-green-400",
		Research: "bg-orange-400",
	};

	// Default class if type doesn't match any key in the map
	const defaultClass = "bg-blue-400";
</script>

<div class="flex-col h-2/3 rounded-xl w-[70%] m-auto">
	<div class="relative flex bg-gray-200 justify-center">
		{#if imageName === ""}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src={placeholder}
				alt="image placeholder"
				class=" scale-50 h-60 w-60"
			/>
		{:else}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<a href={url}>
				<img
					class="scale-55 h-60"
					src={"/images/" + imageName + ".png"}
					alt="image of portfolio"
				/>
			</a>
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
		<a href={github} target="_blank">
			<img
				class="p-2 m-auto w-10 h-10"
				src={"/images/github-mark.png"}
				alt="GitHub Repository Thumbnail"
			/>
		</a>

		<!--

        {long_description}
        {imageName}

    -->
	</div>
</div>
