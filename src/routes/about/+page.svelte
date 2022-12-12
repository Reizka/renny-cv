<script>
	import About from './About.svelte';
	import MyLife from './myLife.svelte';
	const css = 'p-2 shadow-2xl border-solid w-1/2 h-50 mt-12 border-2 border-black rounded-md';
	let y = 0;
	console.log(y);
	let calc = (y * 2) / 3;

	//https://v2.tailwindcss.com/docs/transform
	//https://www.w3schools.com/Css/css3_2dtransforms.asp
	//https://svelte.dev/tutorial/svelte-window-bindings
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<svelte:window bind:scrollY={y} class="absolute" />
<div id="wrapper" class="max-w-[100%]">
	<div class="text-container z-[10]">
		<h2 class="text-6xl relative postion-left-0 pb-10 underline ">About me</h2>
		<div class=" bg-yellow-400 ">
			<img
				class="shadow-xl max-w-[20em] max-h-[20em] flex"
				src="/main-portrait-cropped.jpg"
				alt="main portrait"
			/>

			<div class="flex p-6 m-2 border-solid ">
				<div class="font-sans bg-white">
					<p>
						Hello and welcome to my homepage! This site is mainly intended to work as an online CV
						and show off some of my old projects and know how.
					</p>

					<p>
						It is not easy to nail down my exact are of focus in terms of employment as I mainly
						hail from academia. My main passion though mostly revoles around games and game
						development. But I have picked up some android and web development skills on the way as
						well
					</p>

					<p>
						Before starting my studies I spent four years travelling around Ocenia, South-east Asia
						and Israel. I worked in various different jobs during this time and during the second
						half of my trip acquired my scuba-diving instructor license.
					</p>

					<p>
						After returning to Finland in 2012 I stared my Bacherlor studies at Haaga-Helia, where I
						completed the Business Information Technology (BITe) in 2½ years (it is normally a 3½
						year program)
					</p>
					<p>
						I continued directly to Msc studies after completing my Bachelor studies and moved to
						South Korea for 2 years where I studied at Ajou University
					</p>
					<p>
						Lastly, I moved to Belgium to start my PhD, which I succesfully defended in July 2022.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="">
		<h2 class="text-6xl pb-10 underline absolute bottom-10 ">My life</h2>

		<div class="bg-blue-400 text-container pt-2 pb-8 z-[9]" style="transform: translate(0,{24}em)">
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

		<div class="bg-red-400 p-10 text-container z-[8]" style="transform: translate(0,{30}em)">
			<h1>2006:Upper Secondary School</h1>
			<p>
				Graduated from upper Secondary school (Lukio) with grades that weren't bad, but also not
				great enough to flaunt here separately
			</p>
		</div>

		<div class="bg-amber-400 p-10 text-container z-[7]" style="transform: translate(0,{31}em)">
			<h1>2007: Army</h1>
			<p>
				Spending 6 months in (and mostly around) forest areas and learning the concept "Hurry to
				wait" thoroughly.
			</p>
		</div>

		<div class="bg-green-400 p-10 text-container z-[6]" style="transform: translate(0,{30.5}em)">
			<h1>2008 - 2011: Travelling</h1>
			<p>
				Spent nearly four years travelling Oceania and South-east Asia. I started off with a working
				holiday in Australia, before picking up a scuba certificate in Thailand and later finding
				work in Vietnam. Before coming back home I went to check out my roots in Israel
			</p>
		</div>

		<div class="bg-blue-400 text-container p-10 z-[5]" style="transform: translate(0,{30}em)">
			<h1>2012 - 2014: Haaga-Helia</h1>
			<p>
				Comeleted my studies in Business Information Tech, a degree program intended to teach both
				business and programming with the idea of:"Jack of all trades, master of none"
			</p>
			<p>
				While at Haaga-Helia, I also took on the head tutor activities. My Thesis focused on
				creating an Eductional AR game for the Android device. The project was fun and I learned a
				lot, but I am somewhat relieved no one will ever get their hands on the source code
			</p>
		</div>

		<div class="bg-cyan-400 text-container p-10 z-[4]" style="transform: translate(0,{29.5}em)">
			<h1>2015 - 2017: Ajou Univeristy South Korea</h1>
			<p>CALC`</p>
			<p>
				After finishing my studies I wanted to continue further with my studies and looking into
				educational games. I was very lucky to get a position at Ajou university
			</p>
			<p>
				I finished my Msc studies in time this time creating an adaptive educational game that
				adapted slightly depending on the users' learning and play style. Again a very fun project
				created using Unity3D and Springboot (backend) but equally happy the source code is lost to
				sands of time
			</p>
		</div>

		<div class="bg-pink-400 text-container z-5 p-10" style="transform: translate(0,{29}em)">
			<h1>2017 - 2022: VUB Belgium</h1>
			<p>
				After my Msc, I was not ready to start real work and instead had yet another very lucky
				chance as I was invited to do a PhD at Vrije Universiteit Brussel. I had also been invited
				for a Phd at a Finnish University but the chance to live overseas was far too oppoturnity to
				pass
			</p>
			<p>
				This time my project was more convoluted and COVID did not help, but in the end I managed to
				succesfully defend my thesis in July 2022 focusing on Social Engagement platforms and
				creating designg recommendations for them with older users specifically in mind
			</p>
			<p>
				The project involved number of smaller portions, such as creating a fully functional web
				application on React & Firebase, as well as, using Unity3D to create a game that was
				complimenting the project
			</p>
		</div>
	</div>
</div>

<style>
	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}

	.textBox {
		padding: 1em;
	}

	.text-container {
		width: 100%;
		position: absolute;
		margin-top: 2em;
	}

	div {
		width: 100px;
		height: 100px;
		background-color: red;
		position: relative;
		animation-name: example;
		animation-duration: 4s;
		animation-iteration-count: infinite;
	}

	@keyframes example {
		0% {
			background-color: red;
			left: 0px;
			top: 0px;
		}
		25% {
			background-color: yellow;
			left: 200px;
			top: 0px;
		}
		50% {
			background-color: blue;
			left: 200px;
			top: 200px;
		}
		75% {
			background-color: green;
			left: 0px;
			top: 200px;
		}
		100% {
			background-color: red;
			left: 0px;
			top: 0px;
		}
	}
</style>
