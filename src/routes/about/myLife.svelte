<script>
	const css = 'p-2 shadow-2xl border-solid w-1/2 h-50 mt-12 border-2 border-black rounded-md';
	let y = 0;
	console.log(y);
</script>

<svelte:window bind:scrollY={y} />

<div class="grid place-items-center">
	<div class="part-1  , {css}">
		<h1>1986: The beginning</h1>
		<h3>Several historical events happened that year</h3>
		<ul>
			<li>Chernobyl</li>
			<li>Space shuttle Challenger</li>
			<li>Halley's Comet</li>
			<li>Mad cow disease</li>
			<li>Me</li>
		</ul>
	</div>

	<div class="part-2 ,{css}">
		<h1>2006:Upper Secondary School</h1>
		<p>
			Graduated from upper Secondary school (Lukio) with grades that weren't bad, but also not great
			enough to flaunt here separately
		</p>
	</div>

	<div class="part-3, {css}">
		<h1>2006: Army</h1>
		<p>
			Spending 6 months in Eastern-finnish forests and learning the concept "Hurry to wait"
			thoroughly.
		</p>
	</div>
	<div class="part-4 , {css}">
		<h1>2008 - 2011: Travelling</h1>
		<p>
			Spent nearly four years travelling Oceania and South-east Asia. I started off with a working
			holiday in Australia, before picking up a scuba certificate in Thailand and later finding work
			in Vietnam. Before coming back home I went to check out my roots in Israel
		</p>
	</div>
	<div class="part-5 , {css}">
		<h1>2012 - 2014: Haaga-Helia</h1>
		<p>
			Comeleted my studies in Business Information Tech, a degree program intended to teach both
			business and programming with the idea of:"Jack of all trades, master of none"
		</p>
		<p>
			While at Haaga-Helia, I also took on the head tutor activities. My Thesis focused on creating
			an Eductional AR game for the Android device. The project was fun and I learned a lot, but I
			am somewhat relieved no one will ever get their hands on the source code
		</p>
	</div>
	<div class="part-6 , {css}">
		<h1>2015 - 2017: Ajou Univeristy South Korea</h1>
		<p>
			After finishing my studies I wanted to continue further with my studies and looking into
			educational games. I was very lucky to get a position at Ajou university
		</p>
		<p>
			I finished my Msc studies in time this time creating an adaptive educational game that adapted
			slightly depending on the users' learning and play style. Again a very fun project created
			using Unity3D and Springboot (backend) but equally happy the source code is lost to sands of
			time
		</p>
	</div>
	<div class="part-7 , {css}">
		<h1>2017 - 2022: VUB Belgium</h1>
		<p>
			After my Msc, I was not ready to start real work and instead had yet another very lucky chance
			as I was invited to do a PhD at Vrije Universiteit Brussel. I had also been invited for a Phd
			at a Finnish University but the chance to live overseas was far too oppoturnity to pass
		</p>
		<p>
			This time my project was more convoluted and COVID did not help, but in the end I managed to
			succesfully defend my thesis in July 2022 focusing on Social Engagement platforms and creating
			designg recommendations for them with older users specifically in mind
		</p>
		<p>
			The project involved number of smaller portions, such as creating a fully functional web
			application on React & Firebase, as well as, using Unity3D to create a game that was
			complimenting the project
		</p>
	</div>
</div>

<style>
	.part-1 {
		margin: auto;
		position: relative;
		text-align: center;
		top: 50%;
		width: 20%;
	}
</style>
