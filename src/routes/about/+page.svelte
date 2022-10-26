<script>
    import About from "./About.svelte";
    import MyLife from "./myLife.svelte";
</script>
<svelte:head>
	<title>About</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<h1 class="title font-mono">About me</h1>
<About />
<h1 class="font-mono pt-10">My life</h1>
<MyLife />

<style>
    h1{
        font-size: 3.2em;
        line-height: 1.1;
    }

</style>