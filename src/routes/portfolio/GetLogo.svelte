<script>
	//keyword icons
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiAndroid from 'svelte-icons/di/DiAndroid.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiUnitySmall from 'svelte-icons/di/DiUnitySmall.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiHtml5 from 'svelte-icons/di/DiHtml5.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiJsBadge from 'svelte-icons/di/DiJsBadge.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiFirebase from 'svelte-icons/di/DiFirebase.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiReact from 'svelte-icons/di/DiReact.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiJava from 'svelte-icons/di/DiJava.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiMysql from 'svelte-icons/di/DiMysql.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiSqllite from 'svelte-icons/di/DiSqllite.svelte';
	// @ts-ignore - svelte-icons lacks published type declarations
	import DiCss3 from 'svelte-icons/di/DiCss3.svelte';

	export let keywords = /** @type {string[]} */ ([]);
</script>

{#each keywords as kw}
	<div class="w-8 h-8 flex-col m-4 items-center">
		{#if kw === 'Unity3D'}
			<DiUnitySmall />
		{:else if kw === 'C#'}
			<img src={'/images/hashtag.png'} alt="C# logo" />
		{:else if kw === 'MySQL'}
			<DiMysql />
		{:else if kw === 'Java'}
			<DiJava />
		{:else if kw === 'Firebase'}
			<DiFirebase />
		{:else if kw === 'springboot'}
			<img src={'/images/springboot.png'} alt="springboot logo" />
		{:else if kw === 'JavaScript'}
			<DiJsBadge />
		{:else if kw === 'React'}
			<DiReact />
		{:else if kw === 'NodeJS'}
			<DiNodejsSmall />
		{:else if kw === 'Tailwind'}
			<img src={'/images/tailwind-css.svg'} alt="Tailwindcss logo" />
		{:else if kw === 'HTML'}
			<DiHtml5 />
		{:else if kw === 'C++'}
			<img src={'/images/cPlusPlusIcon.png'} alt="C++ icon from Freepik" />
		{:else if kw === 'Json'}
			<img src={'/images/json.png'} alt="json logo" />
		{:else if kw === 'Multilanguage'}
			<img src={'/images/language.png'} alt="multilanguage icon from Freepik" />
		{:else if kw === 'multiplayer'}
			<img src={'/images/multiplayer.png'} alt="multiplayer icon from Freepik" />
		{:else if kw === 'CSS'}
			<img src={'/images/multiplayer.png'} alt="multiplayer icon from Freepik" />
		{/if}
		<div class="text-center text-xs relative items-center">
			<!--{kw}-->
		</div>
	</div>
{/each}
