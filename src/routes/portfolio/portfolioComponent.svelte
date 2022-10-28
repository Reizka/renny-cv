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


<div class="flex-col h-1/2 rounded-xl shadow-xl">
    <div class="relative flex bg-white justify-center">
        {#if imageName === ""}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={placeholder} alt="image placeholder" class="w-1/2"/>

        {:else}
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={"$lib/images/"+{imageName}} alt="image of portfolio"/>
        
        {/if}
        <h1 class="absolute bottom-0 left-1/2 -translate-x-1/2 border-3 bg-white p-2 pw-5">{title}</h1>
    </div>
    
    <div class="flex-grow border-2 border-black rounded-xl shadow-xl bg-gray-400">
            <h2>{type}</h2>
            <p>{short_description}</p>
            <p>{keywords}</p>
            <p>{url}</p>
    <!--

        {long_description}
        {imageName}

    --> 
    </div>
</div>