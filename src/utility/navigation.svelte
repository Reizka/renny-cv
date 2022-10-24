<script>
    import { Router, Link, Route } from "svelte-navigator";
	import About from "../pages/About.svelte";
    import Resume from "../pages/Resume.svelte";
	import Portfolio from "../pages/Portfolio.svelte";
	import Contact from "../pages/Contact.svelte";
    import Publications from "../pages/Publications.svelte";

</script>

<Router>
	
	<nav class="navbar">
		<!--wrapper required for being able to apply css in the Link components:https://github.com/mefechoel/svelte-navigator#faq -->
		<div class="wrapper">
			<Link class="my-a-link" to="about">About</Link>
			<Link class="my-a-link" to="resume">Resume</Link>
			<Link class="my-a-link" to="portfolio">Portfolio</Link>
			<Link class="my-a-link" to="contact">Contact</Link>
			<Link class="my-a-link" to="publications">Publications</Link>
		</div>	
		
	</nav>

	<div>
		<Route path="/">
			<About />
		</Route>
		<Route path="about" component={About} />
		<Route path="resume" component={Resume}/>
		<Route path="portfolio" component={Portfolio}/>
        <Route path="contact" component={Contact}/>
        <Route path="publications" component={Publications}/>
    </div>
	
</Router>

<style>

/* 
	 .wrapper :global(a:link) {
		background-color: yellow;
	 }
	 
	 .wrapper :global(a:visited) {
  		background-color: cyan;
	}

	.wrapper :global(a:hover) {
		background-color: lightgreen;
	}

	.wrapper :global(a:active) {
	background-color: hotpink;
	}  
*/

	.navbar{
		flex-grow:1;
		background-color: lightblue;
		padding-bottom:20px;
		padding-top:20px;
		padding-left: 5px;
		padding-right: 5px;
	}
	

	
	

</style>