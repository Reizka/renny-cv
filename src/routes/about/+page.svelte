<script>
	import PartOne from './myLife/partOne.svelte';
	import PartTwo from './myLife/partTwo.svelte';
	import PartThree from './myLife/partThree.svelte';
	import PartFour from './myLife/partFour.svelte';
	import PartFive from './myLife/partFive.svelte';
	import PartSix from './myLife/partSix.svelte';
	import PartSeven from './myLife/partSeven.svelte';

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

<svelte:head>
	<title>About</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window bind:scrollY={y} class="absolute" on:keydown={handleKeydown} />
<div id="" class="flex flex-col">
	{#if keycount === 0}
		<h2 class="text-6xl relative postion-left-0 pb-10 underline ">About me</h2>
		<div class="flex flex-col lg:flex-row m-2">
			<img
				class="bg-yellow-200 p-6 shadow-xl max-w-[20em] max-h-[20em]"
				src="/main-portrait-cropped.jpg"
				alt="main portrait"
			/>

			<div
				class="border-solid font-sans bg-white pl-4 pr-4"
			>
				<h1>welcome!</h1>
				<p class="mt-4">
					This site is mainly intended to work as an online CV and show off some of my old projects
					and general know-how.
				</p>
				<br />
				<p class="mt-4">
					It is not easy to nail down my exact area of focus in terms of employment as I mainly hail
					from academia. My main passion though revoles mostly around games and game desing &
					development.
				</p>

				<p class="mt-4">
					Before starting my studies I spent four years travelling around Ocenia, South-east Asia
					and Israel. I worked in various different jobs during this time and during the second half
					of my trip acquired my scuba-diving instructor license.
				</p>

				<p class="mt-4">
					After returning to Finland in 2012 I stared my Bacherlor studies at Haaga-Helia, where I
					completed the Business Information Technology (BITe) in 2½ years (it is normally a 3½ year
					program)
				</p>
				<p class="mt-4">
					I continued directly to Msc studies after completing my Bachelor studies and moved to
					South Korea for 2 years where I studied at Ajou University
				</p>
				<p class="mt-4 pb-10">
					Lastly, I moved to Belgium to start my PhD, which I succesfully defended in July 2022.
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
	<div class="w-[10em] bg-blue-400 border-solid rounded-xl h-[5em] m-auto mt-10">
		Marjo life events
	</div>
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
