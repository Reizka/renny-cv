<script>
	
    export let props = undefined;

    import placeholder from "$lib/images/no-photos.png";

    console.log("PROPS",props)
    const title = props.title;
    const short_description = props.short_description;
    const type = props.type;
    const keywords = props.keywords;
    const long_description = props.long_description;
    const imageName = props.imageName;
    const url = props.url;

</script>


<div class="border-2 border-black rounded-xl shadow-xl bg-gray-400">
    {#if imageName === ""}
       <image src={placeholder} alt="image placeholder" class="w-1/2 justify-center bg-white"/>

    {:else}
        <image src={"$lib/images/"+{imageName}} alt="image of portfolio"/>
      
    {/if}
        <h1>{title}</h1>
        <h2>{type}</h2>
        <p>{short_description}</p>
        <p>{keywords}</p>
        <p>{url}</p>
   <!--

    {long_description}
    {imageName}

   --> 
   
    
</div>