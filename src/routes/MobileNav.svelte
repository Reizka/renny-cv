<script>
    import { page } from '$app/stores';
import FaBars from 'svelte-icons/fa/FaBars.svelte';
let showNav = false;
function toggle() {
    showNav = !showNav
}

export let links = undefined;



</script>

{#if showNav == false}
    <button class="absolute right-0 top-0 h-12 w-12 m-2 " on:click={() => toggle()}>
		<FaBars />
	</button>	
{:else}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="flex bg-black w-32 absolute right-2 top-2 z-10 p-6 rounded-md opacity-75">
	<ul class="flex flex-col text-white justify-center">
	  {#each links as { href, text }}
		
	  <li class:classActive={$page.url.pathname === href} on:click={() => toggle()}>
		<a class="opacity-100 {[ $page.url.pathname === href ? 'text-red-500' : '' ]}" href={href}>{text}</a>
	  </li>
	  {/each}
	</ul>
  </div>
{/if}


