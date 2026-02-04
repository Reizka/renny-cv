<script>
	import data from "$lib/data/ux-research.json";
	import { page } from "$app/stores";

	const sectionHeaders = [
		"Summary",
		"Constraints",
		"Research Goals",
		"Approach & Methods",
		"Data",
		"Conclusions",
	];

	$: slug = $page.params.slug;
	$: caseStudy = data.caseStudies.find((cs) => cs.slug === slug);
	$: section = data.sections.find((s) => s.slug === slug);
	$: isCaseStudyOne = slug === "online-user-studies-on-online-platforms";
</script>

{#if caseStudy}
	<div class="ux-case-layout">
		<aside class="ux-toc">
			<p class="toc-title">On this page</p>
			<ul>
				<li><a href="#summary">Summary</a></li>
				<li><a href="#constraints">Constraints</a></li>
				<li><a href="#research-goals">Research Goals</a></li>
				<li><a href="#approach">Approach &amp; Methods</a></li>
				<li><a href="#data">Data</a></li>
				<li><a href="#conclusions">Conclusions</a></li>
			</ul>
		</aside>

		<section class="ux-detail">
			<p class="eyebrow">UX Research · Case Study</p>
		<p class="ux-title">
			{isCaseStudyOne
				? "Understanding Help-Seeking in Social Engagement Platforms"
				: caseStudy.title}
		</p>

			{#if isCaseStudyOne}
				<h1 id="summary">Summary</h1>
				<p class="body">
					This case study is part of a larger research project examining online social
					engagement platforms across Europe and their potential as sources of help and
					social connection, particularly for older adults. The research took place
					during the COVID-19 pandemic, which made the topic especially timely but also
					required more creative approaches to data collection.
				</p>
				<p class="body">
					This case study focuses specifically on the user studies I conducted as part
					of that research. I organized and ran studies across three online platforms:
					Commu, Nappi Naapuri (now discontinued), and Hoplr.
				</p>
				<p class="body">
					Commu is a Finnish startup launched in May 2021. At the time of the survey,
					it was still relatively small and primarily focused on the Finnish cities of
					Helsinki and Tampere. Since then, Commu has expanded beyond Finland and now
					operates in several European countries.
				</p>
				<p class="body">
					Nappi Naapuri was a Finnish web platform that, like Commu, offered open
					access to users. Registration required only an address, which defined the
					user's local focus within the service. Users could also register multiple
					addresses. Nappi Naapuri shut down permanently in late 2022.
				</p>
				<p class="body">
					Hoplr is a Belgian-based platform built around private online communities
					restricted to residents of a specific street or district. The platform is
					also active in the Netherlands.
				</p>
				<p class="body">
					The primary research method was an online survey created using Qualtrics.
					The survey was distributed by the operators of each platform and promoted in
					their active feeds for approximately one week.
				</p>
				<p class="body">
					After cleaning the data, over 800 valid responses were collected from active
					users across the three platforms.
				</p>
				<div class="section-line"></div>

				<h1 id="constraints">Constraints</h1>
				<p class="body">
					The study was constrained by several factors. There was limited time to
					distribute questionnaires on each platform, and because the survey was
					conducted entirely online, there was no direct control over who received or
					responded to it. Additionally, as there was effectively only one opportunity
					to run the survey on each platform, it needed to address multiple research
					questions without becoming excessively long.
				</p>
				<div class="section-line"></div>

				<h1 id="research-goals">Research Goals</h1>
				<p class="body">
					While the research covered several areas, the primary focus was on user
					behavior related to offering and requesting help on these platforms. The
					study aimed to understand how actively this functionality was used, whether
					users were aware of it, and whether they had personally engaged with it.
					Where applicable, the study also explored whether these interactions worked
					as users expected.
				</p>
				<p class="body">
					In addition, the platforms implemented help-seeking in slightly different
					ways. The research therefore examined whether these mechanisms were easy to
					understand and use, as well as why users might hesitate to ask for help or
					offer it in the first place.
				</p>
				<p class="body">
					Some usability-related questions were included, but the central emphasis of
					the study remained on help-seeking and help-offering behavior.
				</p>
				<div class="section-line"></div>

				<h1 id="approach">Approach &amp; Methods</h1>
				<h2>Survey Distribution and Sampling</h2>
				<p class="body">
					Surveys were distributed using different channels depending on platform
					practices and constraints.
				</p>
				<p class="body">
					For Nappi Naapuri and Commu, surveys were distributed via email to
					registered users.
				</p>
				<p class="body">
					The Nappi Naapuri survey collected 266 responses. At the time of data
					collection (August 2021), the platform had approximately 40,000 registered
					users, with around 2,000 active users.
				</p>
				<p class="body">
					Commu, a newer service, yielded 94 responses from an estimated 2,800
					registered users. The Commu survey was conducted twice—once in October and
					once in November 2021—with the second round including a slightly modified
					question aimed at recruiting participants for a follow-up study.
				</p>
				<p class="body">
					Hoplr had a substantially larger user base. According to official figures
					available in 2022, the platform had approximately 500,000 registered users.
					To avoid unnecessary email communication, Hoplr opted to deploy the survey
					directly within the platform interface. As a result, responses were limited
					to active users only.
				</p>
				<p class="body">
					Because Hoplr operates through closed neighborhood groups, survey targeting
					could be more tightly controlled. In this study, the survey was distributed
					to users in 25 municipalities in Flanders and selected districts in Brussels
					(specific districts were not disclosed). All target areas were selected by
					Hoplr. This deployment resulted in 455 responses.
				</p>
				<p class="body">
					All surveys remained open for slightly over two weeks. Data collection took
					place in September 2021 (Nappi Naapuri), October and November 2021 (Commu),
					and November 2021 (Hoplr). In total, 813 responses were collected across the
					three platforms.
				</p>
				<p class="body">
					The distribution method introduces important sampling considerations. For
					Nappi Naapuri and Commu, users received the survey via email, whereas for
					Hoplr the survey was visible only within the platform. Consequently, users
					who were inactive or only rarely active on Hoplr were unlikely to encounter
					the survey, a factor that must be considered when interpreting the results.
				</p>

				<h2>Data Completion and Quality</h2>
				<p class="body">
					Survey completion was tracked using Qualtrics, which records both completion
					percentages and a Boolean “finished” status indicating whether a respondent
					reached the end of the questionnaire. When considering only fully completed
					surveys, the final sample sizes were:
				</p>
				<ul class="body-list">
					<li>Nappi Naapuri: 149</li>
					<li>Commu: 56</li>
					<li>Hoplr: 319</li>
				</ul>

				<h2>Data Analysis</h2>
				<p class="body">
					Basic descriptive statistics—including means, standard deviations, and
					margins of error—were calculated where applicable. Population sizes were
					based on the best available figures: 40,000 users for Nappi Naapuri, 2,800
					for Commu, and 12,500 for Hoplr. The population estimate provided by Hoplr
					excluded Brussels, meaning the true population size is likely slightly
					higher.
				</p>
				<p class="body">
					Confidence levels were adjusted based on response rates. A 90% confidence
					level was used for Commu due to its smaller sample size, while 95%
					confidence levels were applied for Nappi Naapuri and Hoplr. Margins of error
					were reported where relevant, and follow-up questions with very low response
					counts were excluded from statistical calculations.
				</p>
				<p class="body">
					Using only fully completed responses, the resulting margins of error were
					8% for Nappi Naapuri, 11% for Commu, and 5% for Hoplr.
				</p>
				<div class="section-line"></div>

				<h1 id="data">Data &amp; Findings</h1>
				<h2>Participant Profile</h2>
				<p class="body">
					Respondents across platforms skewed older, with the majority being 46 years
					or older, and the largest age group falling between 56–65. This aligned with
					the core demographics of the platforms themselves. Gender distribution varied
					by platform: Nappi Naapuri and Commu had a higher proportion of female
					respondents, while Hoplr showed a near-even split.
				</p>
				<p class="body">
					Only Hoplr offered both web and mobile access. While smartphones were the
					most commonly used device overall, usage declined noticeably among older age
					groups, with laptops and desktop computers becoming more common.
				</p>

				<h2>Help-Seeking and Help-Offering Behavior</h2>
				<p class="body">
					Across all platforms, most users had never requested help, and among those
					who had, the majority had done so only once. A small minority of users
					accounted for repeated help requests or offers. The types of help requested
					were generally small, practical tasks such as shopping, minor household help,
					or walking dogs.
				</p>
				<p class="body">
					Platform structure had a clear impact. Hoplr, which operates through closed,
					neighborhood-based communities and explicitly supports a “pool of helpers,”
					showed higher levels of repeated helping and more sustained engagement
					compared to the more open platforms (Nappi Naapuri and Commu).
				</p>

				<h2>Awareness vs. Usage</h2>
				<p class="body">
					Awareness of help-related features did not consistently translate into use.
					On Hoplr, many users were aware of the help and volunteer features but had
					never used them, indicating that feature visibility alone was insufficient
					to drive participation.
				</p>
				<p class="body">
					When help was requested, success rates were generally moderate. Hoplr in
					particular showed a reasonable likelihood of receiving a response, suggesting
					that social and structural context plays a larger role than interface design
					alone.
				</p>

				<h2>Perceived Ease and Barriers</h2>
				<p class="body">
					Users generally described the technical process of requesting or offering
					help as easy. Usability issues were rarely cited as the primary barrier.
				</p>
				<p class="body">
					Instead, the main obstacles were social and psychological:
				</p>
				<ul class="body-list">
					<li>Reluctance to burden others</li>
					<li>Fear of low or no response</li>
					<li>Lack of nearby or active users</li>
					<li>Discomfort engaging with strangers</li>
				</ul>
				<p class="body">
					In several cases, users reported stopping use of the help feature after
					repeated unanswered requests, indicating that early negative experiences had
					a strong impact on continued engagement.
				</p>

				<h2>Summary Insight</h2>
				<p class="body">
					Overall, the findings suggest that social dynamics and platform structure are
					more influential than interface usability in determining whether users ask
					for or offer help. Closed, locality-based designs appear to support more
					sustained helping behavior, while open platforms struggle to convert awareness
					into action.
				</p>
				<div class="section-line"></div>

				<h1 id="conclusions">Conclusions</h1>
				<p class="body">
					Across all platforms, the majority of users had never used help-request or
					help-offer features, and no clear differences emerged across age groups.
					Most respondents indicated they either did not need help or were too busy to
					offer it. However, a sizable portion stated that they would use the platform
					to ask for help if needed, suggesting that help-seeking is perceived as a
					last-resort behavior rather than a routine interaction.
				</p>
				<p class="body">
					This perception is reinforced by social barriers. Many users expressed
					reluctance to “bother others,” indicating a high perceived threshold for
					when it is appropriate to ask for help. As a result, even when help features
					exist and are visible, they are often underused.
				</p>
				<p class="body">
					Hoplr’s “pool of helpers” model introduced an alternative pathway for
					requesting help, but adoption remained low. Despite its potential to lower
					social friction, additional steps—such as initiating direct messages or
					navigating overly detailed help categories—may unintentionally reintroduce
					barriers.
				</p>
				<p class="body">
					Overall, the findings point to a clear pattern: the primary obstacles to
					asking for or offering help are social and psychological, not technical. For
					many users, these platforms are joined out of curiosity or for purposes
					unrelated to helping, with help-related features remaining peripheral rather
					than central to everyday use.
				</p>
				<div class="section-line"></div>
			{:else}
				{#each sectionHeaders as heading}
					<h1 id={heading.toLowerCase().replace(/[^a-z]+/g, "-")}>
						{heading}
					</h1>
					<p class="body">Content coming soon.</p>
					<div class="section-line"></div>
				{/each}
			{/if}
		</section>
	</div>
{:else if section}
	<section class="ux-detail">
		<p class="eyebrow">UX Research</p>
		<h1>{section.title}</h1>
		<p class="body">Content coming soon.</p>
	</section>
{:else}
	<section class="ux-detail">
		<p class="eyebrow">UX Research</p>
		<h1>Section Not Found</h1>
		<p class="body">This section is still being mapped.</p>
	</section>
{/if}

<style>
	.ux-case-layout {
		display: grid;
		grid-template-columns: minmax(160px, 220px) 1fr;
		gap: 2rem;
		align-items: start;
		max-width: 980px;
		margin: 0 auto;
	}

	.ux-toc {
		position: sticky;
		top: 1.5rem;
		align-self: start;
		background: rgba(255, 255, 255, 0.55);
		border-radius: 14px;
		padding: 0.9rem 1rem;
		box-shadow: 0 10px 22px rgba(31, 28, 22, 0.08);
	}

	.toc-title {
		margin: 0 0 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		font-size: 0.65rem;
		color: #6b655b;
	}

	.ux-toc ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.ux-toc a {
		text-decoration: none;
		color: #2f2a22;
		font-size: 0.9rem;
	}

	.ux-toc a:hover {
		color: #7a2f1f;
	}

	.ux-detail {
		max-width: 720px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.24em;
		font-size: 0.65rem;
		color: #7b756c;
		margin: 0;
	}

	.ux-title {
		font-size: clamp(1.6rem, 2.4vw, 2.2rem);
		margin: 0 0 0.6rem;
		font-weight: 600;
	}

	h1 {
		font-size: 1.1rem;
		margin: 1.2rem 0 0.4rem;
		padding-bottom: 0.4rem;
		border-bottom: 1px solid rgba(47, 42, 34, 0.2);
	}

	h2 {
		font-size: 1rem;
		margin: 0.9rem 0 0.4rem;
		color: #4c4740;
	}

	.body {
		margin: 0;
		color: #2f2a22;
	}

	.body-list {
		margin: 0 0 0.6rem 1.2rem;
		padding-left: 0.6rem;
		list-style: disc;
		color: #2f2a22;
	}

	.section-line {
		height: 1px;
		background: rgba(47, 42, 34, 0.12);
		margin: 0.4rem 0 0.8rem;
	}

	@media (max-width: 900px) {
		.ux-case-layout {
			grid-template-columns: 1fr;
		}

		.ux-toc {
			position: static;
		}
	}
</style>
