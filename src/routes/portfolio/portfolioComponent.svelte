<script>
	export let props = undefined;

	import placeholder from '$lib/images/no-photos.png';
	import GetLogo from './GetLogo.svelte';

	const title = props.title;
	const short_description = props.short_description;
	const type = props.type;
	const keywords = props.keywords;
	const long_description = props.long_description;
	const imageName = props.imageName;
	const url = props.url;
	console.log('image', imageName);

	//keyword icons
	import DiAndroid from 'svelte-icons/di/DiAndroid.svelte';
	import DiUnitySmall from 'svelte-icons/di/DiUnitySmall.svelte';
	import DiHtml5 from 'svelte-icons/di/DiHtml5.svelte';
	import DiJsBadge from 'svelte-icons/di/DiJsBadge.svelte';
	import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte';
	import DiFirebase from 'svelte-icons/di/DiFirebase.svelte';
	import DiReact from 'svelte-icons/di/DiReact.svelte';
	import DiJava from 'svelte-icons/di/DiJava.svelte';
	import DiMysql from 'svelte-icons/di/DiMysql.svelte';
	import DiSqllite from 'svelte-icons/di/DiSqllite.svelte';
	import DiCss3 from 'svelte-icons/di/DiCss3.svelte';
</script>

<div class="flex-col h-1/2 rounded-xl">
	<div class="relative flex bg-gray-200 justify-center">
		{#if imageName === ''}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={placeholder} alt="image placeholder" class=" scale-50 h-60 w-60" />
		{:else}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img class="scale-55 h-60" src={'/images/' + imageName + '.png'} alt="image of portfolio" />
		{/if}
		<div
			class="absolute w-full bottom-0 left-1/2  -translate-x-1/2 border-3 bg-teal-400 p-2 pw-5 opacity-80"
		>
			<h1 class="text-xl font-bold text-black opacity-100">{title}</h1>
		</div>
	</div>
	<div class="flex-grow border-2 h-[200px] border-black bg-white rounded-b-2xl shadow-2xl">
		<h2>{type}</h2>
		<p>{short_description}</p>
		<div class="flex flex-row">
			<GetLogo {keywords} />
		</div>
		<p>{url}</p>
		<!--

        {long_description}
        {imageName}

    -->
	</div>
</div>
