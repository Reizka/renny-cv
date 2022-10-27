<script>
import pf from "$lib/data/portfolio.json" 
//import List from "./listHandler.svelte"

console.log(pf);

</script>

<main>
    <div>
    
    <h1>Portfolio</h1>
    <p> This page is a summary of my past work experience
   
    </div>
  

    {#each pf as item}
	<svelte:component this={item.title} {...item} />
    {/each}

</main>