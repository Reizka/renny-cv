<script>
	import PartOne from './about/myLife/partOne.svelte';
	import PartTwo from './about/myLife/partTwo.svelte';
	import PartThree from './about/myLife/partThree.svelte';
	import PartFour from './about/myLife/partFour.svelte';
	import PartFive from './about/myLife/partFive.svelte';
	import PartSix from './about/myLife/partSix.svelte';
	import PartSeven from './about/myLife/partSeven.svelte';

	import FaAngleDown from 'svelte-icons/fa/FaAngleDown.svelte';

	const css = 'p-2 shadow-2xl border-solid w-1/2 h-50 mt-12 border-2 border-black rounded-md';
	let y = 0;
	console.log(y);
	let calc = (y * 2) / 3;
	let keycount = 0;

	let zArray = [10, 9, 8, 7, 6, 5, 4, 3];
	let zBool = [false, false, false, false, false, false, false, false];

	const comps = [PartOne, PartTwo, PartThree, PartFour, PartFive, PartSix];

	function getComponents(keycount) {
		let comp = comps.map((elemet, index) => {
			if (keycount >= i) {
				return elemet;
			}
		});
		return comp;
	}

	function handleKeydown(event) {
		let key = event.key;
		let code = event.code;
		if (code === 'ArrowDown') {
			keycount++;
			if (keycount === 8) {
				keycount = 0;
			}

			console.log(zArray);
			console.log(zBool);
		} else if (code === 'ArrowUp') {
			keycount--;
			if (keycount < 0) {
				keycount = 7;
			}
		}

		for (let i = 0; i < zArray.length; i++) {
			if (zArray[i] === 10) {
				zBool[i] = true;
				zArray[i] = 0;
			} else {
				zBool[i] = false;
				let x = zArray[i];
				x++;
				zArray[i] = x;
			}
		}
	}

	function checkCount(expected, given) {
		if (expected !== given) {
			return 0;
		}
		return given;
	}
	//https://v2.tailwindcss.com/docs/transform
	//https://www.w3schools.com/Css/css3_2dtransforms.asp
	//https://svelte.dev/tutorial/svelte-window-bindings
</script>

<!--
<svelte:head>
	<title>About</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
-->
<svelte:window bind:scrollY={y} class="absolute" on:keydown={handleKeydown} />

<div class="flex flex-col justify-center items-center">
	{#if keycount === 0}
		<h2 class="text-6xl relative postion-left-0 pb-10 underline min-[400px]:text-2xl">About me</h2>
		<div class="flex flex-col lg:flex-row bg-white border-2 m-auto md:w-1/2 sm:w-[80%] shadow-2xl">
			<div class="flex flex-col">
			<img
				class="max-w-[12em] max-h-[12em] m-2 border-2 shadow-gray-400 rounded-full"
				src="/main-portrait-cropped.jpg"
				alt="main portrait"
			/>
			<aside class="border-2 sm:min-w-[14em] pl-4 pr-2 m-auto ml-2">
				<h2 class="font-bold underline justify-center">Me in short</h2>
				<ul class="ml-3 list-disc">
					<li>Ph.D. in Computer Science</li>
					<li>Over 7 years of programming</li>
					<li>Lived in 4 continents</li>
					<li>Fluent in Finnish & English</li>
					<li>A2 level in French & Dutch</li>
					<li>I like games</li>
				</ul>
			</aside>
			</div>
			<div class="border-solid font-sans pl-4 pr-4 font-sans mt-4">
				<h2 class="font-serif text-4xl">Welcome!</h2>

				<p class="mt-4">
					This site is mainly intended to work as an online CV and present some of my old projects,
					as well as indicate some general areas of expertise. I might also add a blog-ish area
					where I can update my more recent work, but we'll see.
				</p>

				<p class="mt-4">
					Before starting my studies, I spent nearly four years travelling around Oceania, Southeast
					Asia, and Israel. I worked in various different jobs during this time and, during the
					second half of my trip, even acquired a scuba-diving instructor license. I'm now a fully
					licensed PADI Master Scuba Diving Trainer <a
						class="underline"
						href="https://apps.padi.com/scuba-diving/pro-chek/">(259093)</a
					>.
				</p>

				<p class="mt-4">
					After returning to Finland in 2012, I started my Bachelor's studies at Haaga-Helia
					University of Applied Sciences, where I completed the Business Information Technology
					(BITe) program one year ahead of the normal curriculum schedule. I received full marks for
					my Bachelor's thesis, which I wrote while studying as an exchange student in South Korea
				</p>
				<p class="mt-4">
					After completing my Bachelor's studies, I continued directly to my Master's studies and
					moved to South Korea for two years to study at Ajou University. My focus was once again on
					educational games. You can read more about Minerva in the Portfolio section.
				</p>
				<p class="mt-4 pb-10">
					And then, in a moment of madness, I decided to move to Brussels, Belgium in 2017 to start
					my PhD. It took me five long years, countless all-nighters, and more coffee than any human
					should consume, but I somehow managed to defend my dissertation focusing on Social
					Engagement Platforms and Elderly Users in July 2022
				</p>

				
			</div>
		</div>
	{/if}
	{#if keycount > 0}
		<h2 class="text-6xl relative postion-left-0 pb-10 underline ">My Life</h2>
	{/if}
	<div class="">
		{#if keycount === 1}
			<div class=" test-{checkCount(1, keycount)} text-container">
				<PartOne style={'bg-blue-400'} />
			</div>
		{:else if keycount === 2}
			<PartOne style={'bg-blue-400 pt-2 pb-8'} />
			<div class=" test-{checkCount(2, keycount)} text-container">
				<PartTwo style={'bg-red-400 pt-2 pb-8'} />
			</div>
		{:else if keycount === 3}
			<PartOne style={'bg-blue-400 pt-2 pb-8 mb-2'} />

			<PartTwo style={'bg-red-400 pt-2 pb-8 mb-2'} />
			<div class=" test-{checkCount(3, keycount)}  text-container">
				<PartThree style={'bg-amber-400 p-10'} />
			</div>
		{:else if keycount === 4}
			<PartOne style={'bg-blue-400 pt-2 pb-8 mb-2'} />
			<PartTwo style={'bg-red-400 pt-2 pb-8 mb-2'} />
			<PartThree style={'bg-amber-400 pb-8 mb-2'} />
			<div class=" test-{checkCount(4, keycount)} text-container">
				<PartFour style={'bg-green-400 p-10 '} />
			</div>
		{:else if keycount === 5}
			<PartOne style={'bg-blue-400 pt-2 pb-8 mb-2'} />
			<PartTwo style={'bg-red-400 pt-2 pb-8 mb-2'} />
			<PartThree style={'bg-amber-400 pb-8 mb-2'} />
			<PartFour style={'bg-green-400 pb-8 mb-2 '} />
			<div class=" test-{checkCount(5, keycount)}  text-container">
				<PartFive style={'bg-blue-400'} />
			</div>
		{:else if keycount === 6}
			<PartOne style={'bg-blue-400 pt-2 pb-8 mb-2'} />
			<PartTwo style={'bg-red-400 pt-2 pb-8 mb-2'} />
			<PartThree style={'bg-amber-400 pb-8 mb-2'} />
			<PartFour style={'bg-green-400 pb-8 mb-2 '} />
			<PartFive style={'bg-blue-400 pb-8 mb-2 '} />
			<div class=" test-{checkCount(6, keycount)}  text-container">
				<PartSix style={'bg-cyan-400 '} />
			</div>
		{:else if keycount === 7}
			<PartOne style={'bg-blue-400 pt-2 pb-8 mb-2'} />
			<PartTwo style={'bg-red-400 pt-2 pb-8 mb-2'} />
			<PartThree style={'bg-amber-400 pb-8 mb-2'} />
			<PartFour style={'bg-green-400 pb-8 mb-2 '} />
			<PartFive style={'bg-blue-400 pb-8 mb-2 '} />
			<PartSix style={'bg-cyan-400 pb-8 mb-2 '} />
			<div class=" test-{checkCount(7, keycount)} text-container">
				<PartSeven style={'bg-gray-200'} />
			</div>
		{/if}
	</div>
	<!--
	<div class="w-[10em] bg-blue-400 border-solid rounded-xl h-[5em] m-auto mt-4">
		<FaAngleDown/>
	</div>
	-->
</div>

<style>
	h1 {
		font-size: 3.2em;
		line-height: 1.1;
	}

	.text-container {
		position: absolute;
		width: 50%;
		margin-left: 25%;
	}

	.test-1 {
		animation-name: example;
		animation-duration: 1s;
		animation-iteration-count: initial;
	}
	.test-2 {
		animation-name: example;
		animation-duration: 1s;
		animation-iteration-count: initial;
	}
	.test-3 {
		animation-name: example;
		animation-duration: 1s;
		animation-iteration-count: initial;
	}
	.test-4 {
		animation-name: example;
		animation-duration: 1s;
		animation-iteration-count: initial;
	}
	.test-5 {
		animation-name: example;
		animation-duration: 1s;
		animation-iteration-count: initial;
	}
	.test-6 {
		animation-name: example;
		animation-duration: 1s;
		animation-iteration-count: initial;
	}
	.test-7 {
		animation-name: example;
		animation-duration: 1s;
		animation-iteration-count: initial;
	}

	@keyframes example {
		0% {
			background-color: red;
			right: 100%;
		}
		70% {
			background-color: yellow;
			right: 20%;
		}
		100% {
			background-color: red;
			right: 25%;
		}
	}
</style>
