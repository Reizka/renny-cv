<script>
	import { fly, fade } from 'svelte/transition';
	export let refresh;
	export let style = '';
	export let cls = '';
	const duration = 200;
</script>

{#key refresh}
	<div
		class="flex-1 flex flex-col {cls}"
		{style}
		in:fly={{ x: -50, duration: 200, delay: 150 }}
		out:fly={{ x: -50, duration: 150 }}
	>
		<slot />
	</div>
{/key}
