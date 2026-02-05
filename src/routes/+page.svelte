<script lang="ts">
	let activeTopic = "welcome";
	let isFlipping = false;

	const topics = [
		{ key: "education", label: "My Education" },
		{ key: "languages", label: "My Languages" },
		{ key: "travels", label: "Countries I've lived in" },
		{ key: "skills", label: "My Skills" },
	];
	const topicsByKey = Object.fromEntries(
		topics.map((topic) => [topic.key, topic.label])
	);
	$: activeTopicLabel = topicsByKey[activeTopic] || "Welcome";

	const education = [
		{
			school: "Vrije Universiteit Brussels",
			degree: "PhD. Human Computer Interaction",
			year: "2022",
			location: "Brussels, Belgium",
		},
		{
			school: "Ajou University",
			degree: "M.Sc. Computer Engineering & Science",
			year: "2017",
			location: "Suwon, South-Korea",
		},
		{
			school: "Haaga-Helia",
			degree: "BSc. in Business Information Administration",
			year: "2014",
			location: "Helsinki, Finland",
		},
	];

	const travels = [
		{ name: "Australia", duration: "1.5 years", flag: "🇦🇺" },
		{ name: "Thailand", duration: "10 months", highlight: true, flag: "🇹🇭" },
		{ name: "Vietnam", duration: "1 year", flag: "🇻🇳" },
		{ name: "Israel", duration: "6 months", flag: "🇮🇱" },
		{ name: "South Korea", duration: "2.5 years", flag: "🇰🇷" },
		{ name: "Belgium", duration: "9 years", flag: "🇧🇪" },
	];

	const languages = [
		{ name: "Finnish", level: "Native", flag: "🇫🇮" },
		{ name: "English", level: "Fluent", flag: "🇬🇧" },
		{ name: "French", level: "B1", flag: "🇫🇷" },
		{ name: "Dutch", level: "A1", flag: "🇳🇱" },
	];

	const skills = [
		{
			group: "Product & Strategy",
			items: "Feature scoping, roadmap support, requirements, documentation",
		},
		{
			group: "Web & App Development",
			items: "React, NodeJS, Firebase, Tailwind, Rails",
		},
		{
			group: "Identity & Security",
			items: "CIAM, OAuth2 flows, access control training",
		},
		{
			group: "Game Development",
			items: "Unity3D (C#), multiplayer concepts, rapid prototyping",
		},
		{
			group: "Research & UX",
			items: "User interviews, usability evaluation, accessibility, engagement",
		},
	];

	// Keeps the flip animation stable by updating state mid-transition.
	function selectTopic(key: string) {
		if (activeTopic === key || isFlipping) return;
		isFlipping = true;
		setTimeout(() => {
			activeTopic = key;
		}, 200);
		setTimeout(() => {
			isFlipping = false;
		}, 420);
	}
</script>

<div class="flex flex-col justify-center items-center">
	<div class={`welcome-shell ${activeTopic !== "welcome" ? "topic-mode" : ""}`}>
		<div class="portrait-wrap">
			<img
				class="portrait"
				src="/main-portrait-cropped.jpg"
				alt="main portrait"
			/>
		</div>

		<div
			class={`welcome-panel ${activeTopic !== "welcome" ? "flipped" : ""} ${
				isFlipping ? "flipping" : ""
			}`}
		>
			<div class="panel-face panel-front font-sans">
				<h2 class="font-serif text-4xl">Welcome!</h2>

				<p class="mt-4">
					This site is mainly intended to work as an online CV and present
					some of my old projects, as well as indicate some general areas
					of expertise.
				</p>
			</div>
			<div class="panel-face panel-back font-sans">
				{#key activeTopic}
					<div class="type-box">
						<h2 class="font-serif text-3xl">
							{activeTopicLabel}
						</h2>
						<div class="type-content">
							{#if activeTopic === "education"}
								<ul class="edu-list">
									{#each education as item}
										<li class="type-line">
											<span class="edu-school">{item.school}</span>
											<span class="edu-degree">{item.degree}</span>
											<span class="edu-meta">{item.year} · {item.location}</span>
										</li>
									{/each}
								</ul>
							{:else if activeTopic === "travels"}
								<ul class="travel-list">
									{#each travels as country}
										<li class="type-line">
											<span class="flag">{country.flag}</span>
											<span class="travel-name">{country.name}</span>
											<span class="travel-duration">{country.duration}</span>
										</li>
									{/each}
								</ul>
							{:else if activeTopic === "languages"}
								<ul class="language-list">
									{#each languages as lang}
										<li class="type-line">
											<span class="flag">{lang.flag}</span>
											<span class="language-name">{lang.name}</span>
											<span class="language-level">{lang.level}</span>
										</li>
									{/each}
								</ul>
							{:else if activeTopic === "skills"}
								<ul class="skills-list">
									{#each skills as skill}
										<li class="type-line">
											<span class="skill-group">{skill.group}</span>
											<span class="skill-items">{skill.items}</span>
										</li>
									{/each}
								</ul>
							{:else}
								<p class="type-line">
									{activeTopicLabel}
								</p>
							{/if}
						</div>
					</div>
				{/key}
			</div>
		</div>

		<div class="topic-tabs">
		{#each topics as topic}
			<button
				class={`topic-tab ${activeTopic === topic.key ? "active" : ""}`}
				on:click|stopPropagation={() => selectTopic(topic.key)}
				type="button"
			>
				<span>{topic.label}</span>
			</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.welcome-shell {
		position: relative;
		display: flex;
		gap: 1.2rem;
		align-items: stretch;
		background: #ffffff;
		margin: 0 auto 1rem;
		width: min(720px, 92vw);
		box-shadow: 0 22px 50px rgba(10, 8, 12, 0.2);
		border-radius: 22px;
		padding: 1.4rem 1.6rem 2.2rem;
		overflow: visible;
	}


	.portrait-wrap {
		flex: 0 0 auto;
		transition: opacity 260ms ease, transform 260ms ease, max-width 260ms ease;
	}

	.portrait {
		max-width: 12em;
		max-height: 12em;
		border-radius: 999px;
		box-shadow: 0 8px 24px rgba(31, 28, 22, 0.2);
	}

	.welcome-panel {
		position: relative;
		flex: 1;
		min-height: 340px;
		transform-style: preserve-3d;
		transition: transform 420ms ease;
		overflow: hidden;
	}

	.welcome-panel.flipping {
		animation: panelFlip 420ms ease;
	}

	.panel-face {
		position: absolute;
		inset: 0;
		backface-visibility: hidden;
		padding-right: 0.4rem;
		transition: opacity 220ms ease;
		box-sizing: border-box;
	}

	.panel-back {
		transform: none;
		opacity: 0;
	}

	.welcome-panel.flipped .panel-front {
		opacity: 0;
	}

	.welcome-panel.flipped .panel-back {
		opacity: 1;
	}

	.welcome-shell.topic-mode .portrait-wrap {
		opacity: 0;
		transform: translateX(-12px);
		max-width: 0;
		width: 0;
		flex: 0 0 0;
		margin: 0;
		overflow: hidden;
	}

	.topic-tabs {
		position: absolute;
		right: 0;
		top: 1.2rem;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		transform: translateX(100%);
	}

	.topic-tab {
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0.5rem 0.9rem;
		border-radius: 0 999px 999px 0;
		background: rgba(24, 20, 30, 0.92);
		color: #f5f2ec;
		border: none;
		cursor: pointer;
		box-shadow: 0 12px 24px rgba(10, 8, 12, 0.2);
		transform: scaleX(0.2);
		transform-origin: left center;
		transition: transform 220ms ease, background 220ms ease;
	}

	.topic-tab span {
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.topic-tab:hover,
	.topic-tab.active {
		transform: scaleX(1);
	}

	.topic-tab.active {
		background: #2a241f;
	}

	.type-box {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.type-content {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.type-line {
		position: relative;
		display: block;
		white-space: normal;
		max-width: 100%;
		overflow: hidden;
		width: 0;
		animation: typeLine 1400ms steps(40, end) forwards;
	}

	.type-line:nth-child(1) {
		animation-delay: 180ms;
	}

	.type-line:nth-child(2) {
		animation-delay: 420ms;
	}

	.type-line:nth-child(3) {
		animation-delay: 660ms;
	}

	.type-line:nth-child(4) {
		animation-delay: 900ms;
	}

	.type-line:nth-child(5) {
		animation-delay: 1140ms;
	}

	.type-line:nth-child(6) {
		animation-delay: 1380ms;
	}

	.edu-list,
	.travel-list,
	.skills-list,
	.language-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
	}

	.edu-school {
		font-weight: 600;
		display: block;
	}

	.edu-degree {
		display: block;
		color: #4c4740;
	}

	.edu-meta {
		display: block;
		color: #6a6358;
		font-size: 0.9rem;
	}

	.travel-list .type-line {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
	}

	.flag {
		font-size: 1.2rem;
	}

	.travel-duration {
		color: #6a6358;
		font-size: 0.9rem;
	}

	.language-level {
		color: #6a6358;
		font-size: 0.9rem;
	}

	.travel-pop {
		background: #2a241f;
		color: #f5f2ec;
		padding: 0.1rem 0.4rem;
		border-radius: 999px;
		font-size: 0.7rem;
	}

	.skill-group {
		font-weight: 600;
		display: block;
	}

	.skill-items {
		display: block;
		color: #4c4740;
		font-size: 0.95rem;
	}

	@keyframes panelFlip {
		0% {
			transform: rotateY(0deg);
		}
		50% {
			transform: rotateY(90deg);
		}
		100% {
			transform: rotateY(0deg);
		}
	}

	@keyframes typeLine {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}


	@media (max-width: 700px) {
		.welcome-shell {
			flex-direction: column;
			padding-bottom: 2.6rem;
		}

		.topic-tabs {
			position: static;
			transform: none;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 1rem;
		}

		.topic-tab {
			transform: none;
			border-radius: 999px;
		}
	}
</style>
