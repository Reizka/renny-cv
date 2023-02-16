<script>
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

	export let keywords = [];
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
