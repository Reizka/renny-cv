<script>
    import { Router, Link, Route } from "svelte-navigator";
	import About from "../pages/About.svelte";
    import Resume from "../pages/Resume.svelte";
	import Portfolio from "../pages/Portfolio.svelte";
	import Contact from "../pages/Contact.svelte";
    import Publications from "../pages/Publications.svelte";
</script>

<Router>
	<nav>
		<Link to="about">About</Link>
		<Link to="resume">Resume</Link>
        <Link to="portfolio">Portfolio</Link>
		<Link to="contact">Contact</Link>
        <Link to="publications">Publications</Link>
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