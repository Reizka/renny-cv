<script>
	
    export let props = undefined;

    import placeholder from "$lib/images/no-photos.png";

    const title = props.title;
    const short_description = props.short_description;
    const type = props.type;
    const keywords = props.keywords;
    const long_description = props.long_description;
    const imageName = props.imageName;
    const url = props.url;

</script>


<div class="flex-col h-1/2 rounded-xl ">
    <div class="relative flex bg-black justify-center">
        {#if imageName === ""}
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={placeholder} alt="image placeholder" class="w-1/2"/>

        {:else}
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={"$lib/images/"+{imageName}} alt="image of portfolio"/>
        
        {/if}
        <div class="absolute w-full bottom-0 left-1/2  -translate-x-1/2 border-3 bg-gray-400 p-2 pw-5 opacity-50">
            <h1 class="text-xl font-bold text-white opacity-100">{title}</h1>
        </div>
    </div>
    <div class="flex-grow border-2 h-[200px] border-black bg-gray-400 rounded-b-2xl shadow-2xl">
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