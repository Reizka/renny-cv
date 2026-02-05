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
		{:else if slug === "expert-evaluation-of-a-design-guidelines"}
			<h1 id="summary">Summary</h1>
			<p class="body">
				This case study is part of a broader research project examining online
				social engagement platforms across Europe and their potential to support
				help and social connection, particularly for older adults. The research was
				conducted during the COVID-19 pandemic, which made the topic especially
				relevant and required more creative approaches to data collection.
			</p>
			<p class="body">
				This case study focuses specifically on design guidelines for digital tools
				aimed at elderly users. The work involved collecting and consolidating a
				wide range of existing guidelines from prior research into a single,
				harmonized set. These guidelines were then validated through structured
				expert evaluation.
			</p>
			<p class="body">
				Rather than detailing the full guideline list, this case study emphasizes
				the expert evaluation process itself—how it was designed, organized, and
				used to assess and refine the proposed guidelines.
			</p>
			<div class="section-line"></div>

			<h1 id="constraints">Constraints</h1>
			<p class="body">
				Expert availability was the primary constraint in this study. Although a
				large number of potential experts were identified and contacted, actual
				participation rates were low. This made it essential to design an evaluation
				process that was efficient, low-friction, and respectful of experts’ limited
				time.
			</p>
			<p class="body">
				A secondary constraint was evaluation fatigue. Asking experts to review a
				large set of items in detail risked discouraging participation or producing
				low-quality feedback. The evaluation therefore needed to balance depth with
				practicality.
			</p>
			<div class="section-line"></div>

			<h1 id="research-goals">Research Goals</h1>
			<p class="body">
				The goal of this study was to validate and refine a consolidated set of
				design guidelines for digital tools aimed at elderly users through expert
				evaluation.
			</p>
			<p class="body">
				Rather than re-assessing the correctness of individual guidelines—most of
				which were already grounded in established literature—the focus was on:
			</p>
			<ul class="body-list">
				<li>Ensuring the guidelines had been combined in a sensible and meaningful way</li>
				<li>
					Assessing the perceived importance of each guideline from an expert
					perspective
				</li>
				<li>
					Gathering structured expert input that could support prioritization and
					practical use by designers and developers
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="approach">Approach &amp; Methods</h1>
			<h2>Expert Recruitment</h2>
			<p class="body">
				Expert recruitment was carried out in three phases:
			</p>
			<ul class="body-list">
				<li>
					Professional networks, including word-of-mouth recommendations from
					colleagues
				</li>
				<li>
					Academic outreach, targeting university departments working in HCI,
					usability, and related fields
				</li>
				<li>
					Relevant publications, identifying authors who had published on usability
					and design for elderly users
				</li>
			</ul>
			<p class="body">
				An initial list of candidates was reviewed by a small group of usability
				experts involved in the early stages of the project to validate credibility
				and suggest additional candidates. In total, 68 experts were contacted.
				Participation rates were lower than expected, with seven experts completing
				the evaluation and four providing partial feedback.
			</p>

			<h2>Evaluation Setup</h2>
			<p class="body">
				To reduce cognitive load and increase participation, the evaluation was
				designed to focus on importance rather than exhaustive qualitative critique.
				Experts were asked to assess how important each guideline was, rather than
				to provide detailed commentary on every item.
			</p>
			<p class="body">
				A dedicated web-based evaluation tool was developed to support this process.
				The tool allowed experts to:
			</p>
			<ul class="body-list">
				<li>Review each guideline in a clear, scannable format</li>
				<li>
					Rate its importance using a four-point Likert scale (from strongly agree to
					strongly disagree)
				</li>
				<li>
					Provide optional comments when they felt clarification or refinement was
					needed
				</li>
			</ul>
			<p class="body">
				To avoid bias, experts were not shown metadata such as how frequently a
				guideline appeared in the literature. Additional interface features—such as
				topic-based filters—were included to allow experts to focus on specific areas
				of interest and to break the evaluation into smaller, manageable sessions.
			</p>
			<p class="body">
				This setup enabled experts to complete the evaluation efficiently while
				still providing structured, comparable input across the guideline set.
			</p>
			<div class="section-line"></div>

			<h1 id="data">Data &amp; Findings</h1>
			<h2>Expert Participation</h2>
			<p class="body">
				In total, 11 experts participated in the evaluation. Of these, seven
				completed the full evaluation, while the remaining experts provided partial
				input. For most guidelines, the number of expert ratings ranged between seven
				and eight, providing sufficient consistency for comparative analysis.
			</p>

			<h2>Overall Evaluation Outcomes</h2>
			<p class="body">
				Across the guideline set, experts rated the vast majority of items as
				important. Most guidelines received either “Strongly Agree” or “Agree”
				ratings when asked to assess their importance for designing digital tools for
				elderly users.
			</p>
			<p class="body">
				Because the evaluation deliberately excluded a neutral option, some experts
				may have leaned toward “Agree” rather than “Disagree”. Despite this,
				disagreement was relatively rare, indicating broad consensus around the
				relevance of most guidelines.
			</p>
			<p class="body">
				Optional qualitative feedback was limited, which was expected given that the
				guidelines were derived from established literature. Where feedback was
				provided, it primarily focused on:
			</p>
			<ul class="body-list">
				<li>Identifying guidelines that were too specific for the intended scope</li>
				<li>Suggesting further merging or rewording of overlapping items</li>
				<li>
					Proposing a small number of additional guidelines, which were reviewed
					positively but not rated as critically important
				</li>
			</ul>

			<h2>Patterns and Gaps Identified</h2>
			<p class="body">
				A notable outcome of the evaluation was the absence of explicit
				security-related guidelines. While security concerns are often implicitly
				embedded within broader usability or input-related guidelines, experts
				highlighted that elderly users may face heightened challenges with
				authentication, password management, and security practices.
			</p>
			<p class="body">
				This raised a broader design question: whether security should be addressed
				explicitly through dedicated design guidelines or treated as a cross-cutting
				concern that extends beyond interface-level solutions. The findings suggest
				that security may represent a gap area in existing guideline frameworks for
				elderly users.
			</p>

			<h2>Prioritization Potential</h2>
			<p class="body">
				Based on expert ratings, the guidelines could be meaningfully grouped into
				three broad categories:
			</p>
			<ul class="body-list">
				<li>Very important</li>
				<li>Important</li>
				<li>Nice to have</li>
			</ul>
			<p class="body">
				This type of prioritization has clear practical value, enabling designers
				and developers to make informed trade-offs when time or resources are
				limited.
			</p>
			<div class="section-line"></div>

			<h1 id="conclusions">Conclusions</h1>
			<p class="body">
				This study validated a consolidated set of design guidelines for elderly
				users through structured expert evaluation. Despite changes in technology
				and interaction paradigms, most existing guidelines remain relevant,
				reinforcing their continued value for modern web and mobile applications.
			</p>
			<p class="body">
				At the same time, the results indicate that some guidelines are becoming
				less relevant, while others may need refinement or replacement as new
				technologies and interaction models emerge. Areas such as security,
				authentication, and emerging technologies were identified as potential gaps
				that warrant further exploration.
			</p>
			<p class="body">
				While expert participation was sufficient for an evaluative study, broader
				validation—particularly involving end users—would be necessary to further
				refine and prioritize the guidelines. The evaluation process itself
				demonstrated that expert-driven prioritization is a viable and effective way
				to keep long-standing design guidance aligned with contemporary use contexts.
			</p>
			<p class="body">
				Overall, the study highlights that maintaining effective design guidelines
				for elderly users is not a one-time effort, but an ongoing process that must
				evolve alongside technology, user expectations, and patterns of adoption.
			</p>
			<div class="section-line"></div>
		{:else if slug === "heurestical-evaluation-of-online-platforms"}
			<h1 id="summary">Summary</h1>
			<p class="body">
				This case study focuses on a hands-on heuristic evaluation of neighborhood-based
				social platforms, with particular attention to safety, trust, visibility, and
				engagement patterns relevant to elderly users.
			</p>
			<p class="body">
				Rather than relying on surveys or interviews, this evaluation examined how
				platform design choices shape user behavior through structure, affordances, and
				implicit social rules. The analysis was conducted alongside broader research on
				social engagement platforms but is presented here as a standalone design-focused
				study.
			</p>
			<div class="section-line"></div>

			<h1 id="constraints">Constraints</h1>
			<p class="body">
				A key constraint in this evaluation was platform access. Many of the
				neighborhood platforms studied are geographically restricted, operating at
				the level of cities, municipalities, or even individual streets. Access often
				required location verification, which limited the ability to explore platforms
				outside specific regions and reduced opportunities for direct comparison across
				countries.
			</p>
			<p class="body">
				Language and cultural context posed an additional constraint. While modern
				translation tools made it possible to navigate platforms in different
				languages, there is always a risk of misinterpreting tone, social norms, or
				culturally specific meanings—particularly in community-driven content where
				nuance matters. This was taken into account when analyzing interaction
				patterns and trust signals.
			</p>
			<p class="body">
				Finally, as this was a heuristic evaluation rather than a longitudinal study,
				observations were limited to visible design choices and interaction flows at
				the time of access. Platform designs were also evolving during the research
				period, meaning that some findings reflect specific moments in time rather
				than permanent design decisions.
			</p>
			<div class="section-line"></div>

			<h1 id="research-goals">Research Goals</h1>
			<p class="body">
				The primary goal of this evaluation was to understand how platform design
				decisions influence perceived safety, trust, and participation, especially in
				contexts where users are encouraged to interact with strangers in their local
				area.
			</p>
			<p class="body">Specifically, the evaluation aimed to:</p>
			<ul class="body-list">
				<li>Identify structural design patterns that affect trust and perceived security</li>
				<li>Compare open vs. closed neighborhood models</li>
				<li>
					Examine how visibility, verification, and metadata influence user confidence
				</li>
				<li>Identify design signals that either discourage or enable participation</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="approach">Approach &amp; Methods</h1>
			<p class="body">
				The study used a heuristic, exploratory evaluation of multiple neighborhood-based
				platforms, focusing on real usage flows and visible interface elements rather
				than formal usability testing.
			</p>
			<p class="body">The evaluation included:</p>
			<ul class="body-list">
				<li>Reviewing how users discover, post, and respond to help requests</li>
				<li>
					Examining how platforms communicate visibility, reach, and audience of messages
				</li>
				<li>
					Comparing how platforms handle user verification, neighborhood boundaries, and
					moderation
				</li>
				<li>Observing how inactive or dormant users are surfaced—or hidden—by design</li>
			</ul>
			<p class="body">
				Where available, platform documentation and public-facing UI cues were used to
				supplement the evaluation.
			</p>
			<div class="section-line"></div>

			<h1 id="data">Data &amp; Findings</h1>
			<h2>Platform Structure and Trust</h2>
			<p class="body">
				The evaluated platforms fell into two clear structural categories:
			</p>
			<ul class="body-list">
				<li>
					Open-map platforms, where help requests and offers are visible to all users
					within a geographic radius (e.g. Commu, Nappi Naapuri, similar community tools)
				</li>
				<li>
					Closed neighborhood platforms, where interaction is restricted to verified
					local groups and help is one feature among many (e.g. Hoplr and similar
					services)
				</li>
			</ul>
			<p class="body">
				Closed neighborhood platforms consistently conveyed a stronger sense of safety
				and trust, largely due to:
			</p>
			<ul class="body-list">
				<li>Additional verification steps</li>
				<li>Clear neighborhood boundaries</li>
				<li>Limited visibility outside one’s immediate area</li>
			</ul>
			<p class="body">
				These structural choices appeared to lower the perceived risk of interaction,
				which is especially relevant for elderly users.
			</p>

			<h2>Communication Visibility and Metadata</h2>
			<p class="body">
				One platform stood out by explicitly communicating who would see a message, how
				widely it would be distributed, and how active the relevant neighborhood was.
				This form of message-level metadata reduced ambiguity and helped users better
				judge whether posting felt safe or worthwhile.
			</p>
			<p class="body">
				In contrast, platforms that lacked clear visibility indicators required users
				to infer audience and reach, increasing uncertainty and potential hesitation.
			</p>

			<h2>Safety Signals and Social Risk</h2>
			<p class="body">
				While serious misuse was rare, the evaluation identified design gaps around
				social safety, particularly in private messaging. Isolated cases highlighted
				how unclear boundaries and insufficient safeguards can lead to uncomfortable
				interactions.
			</p>
			<p class="body">
				Notably, security and safety were often handled implicitly—through general
				interaction design—rather than being addressed as explicit design concerns. This
				places a higher cognitive burden on users, especially those less experienced
				with digital platforms.
			</p>

			<h2>Dormant Users and Engagement Signals</h2>
			<p class="body">
				The evaluation also revealed differences in how platforms expose user
				inactivity.
			</p>
			<p class="body">
				Some platforms made dormancy visible through outdated discussions or lack of
				recent activity, while others obscured inactivity entirely. Hidden dormancy can
				create a misleading sense of community vitality, whereas visible inactivity may
				discourage participation but provides a more honest signal.
			</p>
			<p class="body">
				From a design perspective, inactivity among surrounding users can be more
				impactful than the inactivity of elderly users themselves, as it directly
				affects response likelihood and perceived usefulness.
			</p>
			<div class="section-line"></div>

			<h1 id="conclusions">Conclusions</h1>
			<p class="body">
				This heuristic evaluation shows that platform structure plays a decisive role
				in shaping trust, safety, and engagement—often more so than individual
				interface elements.
			</p>
			<p class="body">
				Closed, neighborhood-based designs with clear boundaries and verification
				mechanisms tend to foster stronger perceptions of safety, while open-map
				platforms rely more heavily on user judgment and social risk-taking.
			</p>
			<p class="body">
				Importantly, many safety- and trust-related behaviors are shaped by implicit
				design signals, such as visibility cues, messaging scope, and user metadata.
				Making these signals explicit can significantly lower uncertainty and reduce
				participation barriers.
			</p>
			<p class="body">
				Overall, the findings suggest that designing for elderly users in neighborhood
				platforms is less about simplifying interaction and more about making social
				risks legible, bounded, and manageable through design.
			</p>
			<div class="section-line"></div>
		{:else if slug === "stakeholder-perspectives-on-safety-engagement"}
			<h1 id="summary">Summary</h1>
			<p class="body">
				This mini case study focuses on interviews conducted with representatives of
				neighborhood-based social platforms. The aim was to understand how platform
				operators perceive safety, trust, engagement, and long-term participation—particularly
				in relation to vulnerable user groups such as elderly users.
			</p>
			<p class="body">
				Rather than evaluating interfaces directly, this study captures organizational
				perspectives on user behavior, platform risks, and the trade-offs made during
				design and moderation decisions.
			</p>
			<div class="section-line"></div>

			<h1 id="constraints">Constraints</h1>
			<p class="body">
				Interviews were conducted with platform representatives rather than end
				users, meaning insights reflect organizational perspectives on safety and
				engagement. Definitions of user activity varied between platforms, limiting
				direct comparison. Additionally, reported misuse was relatively rare and
				described anecdotally, restricting insight into edge cases. Finally,
				platforms were evolving during the study, so findings reflect practices at a
				specific point in time.
			</p>
			<div class="section-line"></div>

			<h1 id="research-goals">Research Goals</h1>
			<p class="body">The interviews aimed to explore:</p>
			<ul class="body-list">
				<li>How platform operators conceptualize safety and trust</li>
				<li>What types of misuse or negative interactions occur in practice</li>
				<li>How platforms attempt to balance openness with moderation</li>
				<li>How engagement and inactivity are understood and measured internally</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="approach">Approach &amp; Methods</h1>
			<p class="body">
				Semi-structured interviews were conducted with representatives from several
				neighborhood-based platforms. Participants held roles related to platform
				design, operations, or community management.
			</p>
			<p class="body">Interviews focused on:</p>
			<ul class="body-list">
				<li>Real-world incidents involving misuse or uncomfortable interactions</li>
				<li>Existing safety mechanisms and moderation practices</li>
				<li>Definitions of “active” vs “inactive” users</li>
				<li>Challenges in sustaining engagement over time</li>
			</ul>
			<p class="body">
				Interviews were analyzed thematically, with recurring patterns grouped across
				platforms.
			</p>
			<div class="section-line"></div>

			<h1 id="data">Data &amp; Findings</h1>
			<h2>Safety and Misuse in Practice</h2>
			<p class="body">
				Interviewees reported that serious misuse was relatively rare, but not
				nonexistent. The most common negative experiences involved:
			</p>
			<ul class="body-list">
				<li>Unwanted private messages</li>
				<li>Boundary-crossing behavior</li>
				<li>Misaligned expectations between helpers and recipients</li>
			</ul>
			<p class="body">
				One interviewee highlighted how openness, while central to their platform’s
				philosophy, also introduced risks—particularly when vulnerable users
				interacted with unfamiliar individuals.
			</p>

			<h2>Openness vs Control</h2>
			<p class="body">Platforms described a recurring tension between:</p>
			<ul class="body-list">
				<li>Maintaining low barriers to entry to encourage participation, and</li>
				<li>Introducing verification and controls to reduce risk</li>
			</ul>
			<p class="body">
				Closed neighborhood models were often described as safer, but also more
				restrictive. Open platforms emphasized accessibility, sometimes at the cost
				of reduced trust.
			</p>

			<h2>Dormant Users and Engagement</h2>
			<p class="body">
				Interviewees acknowledged that user inactivity is a persistent challenge.
				Definitions of “active users” varied widely, with some platforms equating
				verification with activity, and others focusing on content creation or
				messaging.
			</p>
			<p class="body">
				Several representatives described ongoing efforts to convert passive users
				into active participants, often through:
			</p>
			<ul class="body-list">
				<li>Notifications and messaging</li>
				<li>New content hooks</li>
				<li>Email reminders</li>
			</ul>
			<p class="body">
				However, there was no shared consensus on what sustainable engagement should
				look like.
			</p>
			<div class="section-line"></div>

			<h1 id="conclusions">Conclusions</h1>
			<p class="body">
				The interviews reveal that platform operators are highly aware of the social
				risks and engagement challenges inherent in neighborhood-based platforms.
				While most platforms strive to remain open and inclusive, this openness often
				conflicts with the need to protect users from uncomfortable or unsafe
				interactions.
			</p>
			<p class="body">
				A key insight is that many trust- and safety-related outcomes are shaped less
				by explicit policy and more by structural design decisions, such as
				verification, messaging scope, and visibility rules. These decisions directly
				affect how safe users feel, even when formal safeguards exist.
			</p>
			<p class="body">
				Overall, the findings reinforce the importance of aligning platform values
				with concrete design mechanisms that make trust, boundaries, and expectations
				explicit.
			</p>
			<div class="section-line"></div>
		{:else if slug === "expert-evaluation-of-a-simple-game"}
			<h1 id="summary">Summary</h1>
			<p class="body">
				Nosville is a research prototype developed to test a subset of the design
				recommendations derived from earlier studies. It is a fully functional web
				application, partly built on top of the TICKLE framework, and reinterprets
				location-based digital cards as help requests within a neighborhood context.
			</p>
			<p class="body">
				The goal was not to launch a production-ready platform, but to experiment
				with alternative ways of stimulating engagement, particularly by coupling a
				social engagement platform with a lightweight game layer.
			</p>
			<div class="section-line"></div>

			<h1 id="constraints">Constraints</h1>
			<p class="body">
				The original plan was to follow a user-centered design approach involving
				elderly participants through collaboration with a local volunteering
				organization. This became infeasible due to COVID-19 restrictions, which
				prevented in-person testing and long-term field studies.
			</p>
			<p class="body">As a result:</p>
			<ul class="body-list">
				<li>
					Design decisions relied primarily on validated design guidelines and prior
					research
				</li>
				<li>
					Evaluation focused on expert feedback and formative testing, rather than
					end-user validation
				</li>
				<li>
					Participation numbers for the game evaluation remained low, reflecting the
					difficulty of recruiting evaluators for early-stage prototypes
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="research-goals">Research Goals</h1>
			<p class="body">The Nosville prototype was designed to explore three main questions:</p>
			<ul class="body-list">
				<li>
					Can help requests be reframed in a more engaging way using familiar,
					game-like mechanics?
				</li>
				<li>
					Can loosely coupling a social engagement platform with a digital game create
					additional motivation for volunteers to remain active?
				</li>
				<li>
					Does this approach show enough potential to justify further development and
					user testing?
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="approach">Approach &amp; Methods</h1>
			<h2>Platform Design</h2>
			<p class="body">Nosville consists of two loosely coupled components:</p>
			<ul class="body-list">
				<li>
					A web-based social engagement platform, built on top of TICKLE, where
					completing help requests generates collectible digital cards
				</li>
				<li>
					A digital card-based game, developed separately using Unity, where these
					cards become playable resources
				</li>
			</ul>
			<p class="body">
				Completing a help request results in a card being generated and marked as
				collected by the volunteer. These cards can then be used by players in the
				game to build and grow a virtual town, creating a feedback loop between
				helping activity and gameplay.
			</p>
			<p class="body">
				The web platform was adapted using existing design guidelines for elderly
				users, including:
			</p>
			<ul class="body-list">
				<li>Simplified interface structure</li>
				<li>Embedded guidance and contextual help</li>
				<li>Multilingual support (Finnish, Dutch, French, English)</li>
			</ul>

			<h2>Game Evaluation</h2>
			<p class="body">
				A formative expert evaluation was conducted on an early, fully playable
				proof of concept. The game was accessible via a web browser and supported
				both single-player (AI opponent) and multiplayer modes.
			</p>
			<p class="body">
				Participants were recruited through professional contacts and online game
				development communities. Due to recruitment challenges, six experts
				ultimately participated.
			</p>
			<p class="body">
				The evaluation used a Qualtrics questionnaire with:
			</p>
			<ul class="body-list">
				<li>4-point Likert-scale statements (no neutral option)</li>
				<li>Optional open-ended feedback fields</li>
				<li>A focus on potential, not polish or visual quality</li>
			</ul>
			<p class="body">
				Participants were explicitly told the game was an early prototype and that
				graphical fidelity was not representative of a final product.
			</p>
			<div class="section-line"></div>

			<h1 id="data">Data &amp; Findings</h1>
			<h2>Expert Background</h2>
			<p class="body">
				All participants reported experience in at least one of the following areas:
			</p>
			<ul class="body-list">
				<li>Game development</li>
				<li>Game design</li>
				<li>Programming</li>
				<li>User experience engineering</li>
			</ul>
			<p class="body">
				This was important, as the evaluation relied on participants’ ability to
				assess design potential, not just surface usability.
			</p>

			<h2>Perceived Potential</h2>
			<p class="body">Overall feedback was cautiously positive:</p>
			<ul class="body-list">
				<li>
					The core concept was seen as interesting and potentially impactful if
					supported by an active user base
				</li>
				<li>
					Location-based cards were generally viewed as engaging, especially when tied
					to familiar places
				</li>
				<li>
					The visual growth of the town during gameplay was consistently identified as
					a strong engagement driver
				</li>
				<li>
					Several participants explicitly linked progression and visible change to
					known engagement mechanics in games
				</li>
			</ul>

			<h2>Identified Issues and Risks</h2>
			<p class="body">The evaluation also surfaced clear limitations:</p>
			<ul class="body-list">
				<li>Lack of an in-game tutorial made learning the rules harder than necessary</li>
				<li>
					Long-term engagement would likely depend on regular content updates, which
					could become resource-intensive
				</li>
				<li>
					The limited variety of cards restricted strategic depth in the current
					version
				</li>
				<li>
					Sustaining an active player community was seen as critical for long-term
					viability
				</li>
			</ul>
			<p class="body">
				Participants also noted that crowdsourcing new cards could be an interesting
				future direction, though it would require moderation and security safeguards.
			</p>
			<div class="section-line"></div>

			<h1 id="conclusions">Conclusions</h1>
			<p class="body">
				The Nosville prototype demonstrated that gamifying help requests is a viable
				concept, with clear potential to increase engagement beyond traditional social
				platform mechanics.
			</p>
			<p class="body">
				Despite its early-stage nature and small evaluation sample, expert feedback
				supported the core hypothesis: coupling a social engagement platform with a
				game can create additional, indirect value for volunteers and related user
				groups.
			</p>
			<p class="body">
				At the same time, the study highlighted important trade-offs. Maintaining
				fresh content, onboarding users effectively, and sustaining a player community
				are non-trivial challenges that would need to be addressed before broader
				deployment.
			</p>
			<p class="body">
				Overall, Nosville functioned as intended: not as a finished product, but as a
				research-driven prototype to test ideas, surface risks, and inform future
				iterations.
			</p>
			<div class="section-line"></div>
		{:else if slug === "evaluation-of-truebiters-game-about-logic-gates"}
			<h1 id="summary">Summary</h1>
			<p class="body">
				TrueBiters is a multiplayer educational game designed to help students
				practice the truth tables of propositional logic (AND, OR, IMPLY,
				EQUIVALENT, NOT). The game was developed as a multiplatform application
				(web, mobile) and evaluated iteratively across several academic years.
			</p>
			<p class="body">
				The primary aim was twofold:
			</p>
			<ul class="body-list">
				<li>
					To assess whether a game-based approach can effectively support learning
					compared to traditional exercises.
				</li>
				<li>
					To investigate how player-centered design, informed by the theory of
					Multiple Intelligences (MI), affects both learning outcomes and game
					experience.
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="constraints">Constraints</h1>
			<ul class="body-list">
				<li>Low voluntary participation in early pilot studies limited sample sizes.</li>
				<li>
					The game needed to fit within an existing curriculum, constraining playtime
					and learning scope.
				</li>
				<li>
					Motivation varied widely among students, including those who could benefit
					most from additional practice.
				</li>
				<li>COVID-19 and scheduling realities restricted long-term, in-person evaluations.</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="research-goals">Research Goals</h1>
			<p class="body">The study aimed to answer the following questions:</p>
			<ul class="body-list">
				<li>
					Can an educational game effectively support practice of propositional logic
					truth tables?
				</li>
				<li>
					How does a player-centered design aligned with logical–mathematical
					intelligence affect engagement and learning?
				</li>
				<li>Can such a game replace or complement traditional exercise sessions?</li>
				<li>
					What role do motivation and course integration play in the effectiveness of
					learning games?
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="approach">Approach &amp; Methods</h1>
			<p class="body">
				TrueBiters was developed iteratively and evaluated through four successive
				evaluations, each refining both the game and the research focus.
			</p>
			<h2>Game Design Principles</h2>
			<ul class="body-list">
				<li>Core mechanics centered on logical reasoning and strategic decision-making</li>
				<li>Gameplay involved combining logical operators to correctly resolve truth values</li>
				<li>
					Designed primarily for students with strong logical–mathematical
					intelligence, while remaining accessible to others
				</li>
				<li>
					Included single-player and multiplayer modes to support different learning
					preferences
				</li>
			</ul>

			<h2>Evaluation Overview</h2>
			<h3>Pilot Evaluation (2015–2016)</h3>
			<ul class="body-list">
				<li>Small-scale study with students who had failed the logic exam</li>
				<li>Used pre/post-tests and game experience questionnaires</li>
				<li>Explored links between dominant intelligences, game experience, and learning</li>
			</ul>

			<h3>Controlled Classroom Study (2016–2017)</h3>
			<ul class="body-list">
				<li>
					Compared a control group (traditional exercises) with an experimental group
					(gameplay)
				</li>
				<li>
					Found no overall learning advantage for the game, but identified a critical
					design issue: students avoided practicing the IMPLY operator
				</li>
				<li>Led to redesign enforcing more balanced operator use</li>
			</ul>

			<h3>Motivation &amp; Voluntary Use Study (2017–2018)</h3>
			<ul class="body-list">
				<li>Students introduced to the game and allowed to use it voluntarily</li>
				<li>
					Final exam results showed significantly better performance for students who
					practiced with the game
				</li>
				<li>Highlighted motivation and integration as key factors</li>
			</ul>

			<h3>Secondary Education Workshop</h3>
			<ul class="body-list">
				<li>Tested usability and perceived learning value with high school students</li>
				<li>Participants saw clear learning potential despite limited exposure time</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="data">Data &amp; Findings</h1>
			<h2>Learning Outcomes</h2>
			<ul class="body-list">
				<li>The game produced learning outcomes comparable to traditional exercise sessions</li>
				<li>
					Students who practiced with the game over time showed higher final exam
					scores
				</li>
				<li>
					Learning benefits became more apparent as course material increased in
					complexity
				</li>
			</ul>

			<h2>Player-Centered Design Insights</h2>
			<ul class="body-list">
				<li>
					Students with dominant logical–mathematical intelligence experienced higher
					challenge, competence, flow, and immersion
				</li>
				<li>Game mechanics aligned with this intelligence profile proved effective</li>
				<li>
					Some players experienced increased tension, highlighting the importance of
					balancing challenge and accessibility
				</li>
			</ul>

			<h2>Motivation as a Critical Factor</h2>
			<p class="body">
				A key insight was that providing a game is not sufficient to ensure
				engagement:
			</p>
			<ul class="body-list">
				<li>Some students avoided the game due to lack of interest in games</li>
				<li>Others doubted its learning value or preferred traditional methods</li>
				<li>
					Voluntary use alone did not reach all students—especially those who needed
					practice most
				</li>
			</ul>
			<p class="body">
				This confirmed that how a learning game is introduced, framed, and triggered
				matters as much as its design.
			</p>
			<div class="section-line"></div>

			<h1 id="conclusions">Conclusions</h1>
			<p class="body">
				TrueBiters demonstrates that educational games can effectively support
				learning when they are:
			</p>
			<ul class="body-list">
				<li>Properly aligned with the target audience</li>
				<li>Integrated meaningfully into the course structure</li>
				<li>Supported by appropriate motivational triggers</li>
			</ul>
			<p class="body">
				From a learning perspective, the game proved capable of replacing traditional
				practice sessions without loss of effectiveness. However, motivation and
				course embedding emerged as decisive factors in whether students actually
				benefit.
			</p>
			<p class="body">
				The case highlights a broader UX lesson: learning tools do not exist in
				isolation. Their success depends not only on usability or mechanics, but on
				context, incentives, and timing. Designing educational experiences therefore
				requires equal attention to behavioral triggers, not just content delivery.
			</p>
			<div class="section-line"></div>
		{:else if slug === "evaluation-of-minerva-an-adaptive-game-about-proramming-concepts"}
			<h1 id="summary">Summary</h1>
			<p class="body">
				Minerva is an adaptive, multi-genre educational game designed to support
				elementary school students in learning core programming concepts, such as
				commands, repetition, decisions, and basic logic. Unlike many programming
				games that rely on a single genre or fixed experience, Minerva combines
				adventure, action, and puzzle mechanics and adapts both gameplay and learning
				content to players’ styles.
			</p>
			<p class="body">
				The study focused on whether this adaptive, game-based approach could:
			</p>
			<ul class="body-list">
				<li>Support learning as effectively as traditional materials</li>
				<li>Increase engagement among heterogeneous learners</li>
				<li>Reveal usability and instructional challenges early in development</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="constraints">Constraints</h1>
			<ul class="body-list">
				<li>Single-session evaluation limited insight into long-term learning effects</li>
				<li>
					Cultural specificity: all participants were Korean 6th-grade students,
					limiting generalizability
				</li>
				<li>Time limitations restricted depth of tutorial use and exploration</li>
				<li>
					Adaptive features were not fully evaluated due to sample size and study scope
				</li>
				<li>
					Heterogeneous play and learning styles made per-style analysis statistically
					infeasible
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="research-goals">Research Goals</h1>
			<p class="body">The study aimed to investigate:</p>
			<ul class="body-list">
				<li>
					Whether a multi-genre, adaptive game can engage children with diverse learning
					preferences
				</li>
				<li>
					Whether learning outcomes (retention) are comparable to traditional
					handout-based instruction
				</li>
				<li>How students perceive the game as a learning tool</li>
				<li>What usability and instructional issues emerge in real classroom use</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="approach">Approach &amp; Methods</h1>
			<h2>Study Design</h2>
			<p class="body">A formative mixed-method evaluation was conducted with two groups:</p>
			<ul class="body-list">
				<li>Game group: 32 sixth-grade students who played Minerva</li>
				<li>
					Control group: 32 sixth-grade students who learned the same concepts using
					handouts
				</li>
			</ul>
			<p class="body">
				Both groups studied identical programming concepts. Learning outcomes were
				measured using a retention test, while engagement and experience were captured
				through questionnaires, observations, and interviews.
			</p>

			<h2>Data Collected</h2>
			<ul class="body-list">
				<li>Quantitative retention tests (commands, repetition, decisions, basic concepts)</li>
				<li>Self-reported learning experience and engagement</li>
				<li>Observations during gameplay</li>
				<li>Teacher and student qualitative feedback</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="data">Data &amp; Findings</h1>
			<h2>Learning Outcomes</h2>
			<ul class="body-list">
				<li>Overall, learning retention was comparable between the game group and the control group</li>
				<li>For some topics (e.g. repetition), the game group performed better</li>
				<li>For others (e.g. basic concepts), the control group slightly outperformed the game group</li>
				<li>
					The results suggest the game is at least as effective as traditional methods,
					while being more engaging
				</li>
			</ul>

			<h2>Engagement and Experience</h2>
			<ul class="body-list">
				<li>Students reported largely positive learning experiences</li>
				<li>
					Teachers observed increased engagement, including among students with
					typically low motivation
				</li>
				<li>Behavioral, emotional, and cognitive engagement were clearly present</li>
				<li>No cases of complete disengagement were observed</li>
			</ul>
			<p class="body">However, engagement quality varied:</p>
			<ul class="body-list">
				<li>Some students experienced frustration due to unclear instructions or controls</li>
				<li>Others showed self-regulated interest, replaying the game or helping peers</li>
			</ul>

			<h2>Usability Issues Identified</h2>
			<p class="body">Key issues surfaced during the evaluation:</p>
			<ul class="body-list">
				<li>Unclear instructions and tutorials</li>
				<li>Difficulty understanding what to do next</li>
				<li>Confusion between movement controls and programming commands</li>
				<li>High cognitive load in repetition and decision puzzles</li>
				<li>Tutorials perceived as boring or easy to skip</li>
			</ul>
			<p class="body">
				These issues directly informed design recommendations for improving onboarding,
				tutorials, and pacing.
			</p>
			<div class="section-line"></div>

			<h1 id="conclusions">Conclusions</h1>
			<p class="body">
				The evaluation showed that Minerva successfully engages elementary school
				students and supports learning outcomes comparable to traditional instruction,
				while offering a more motivating experience.
			</p>
			<p class="body">
				However, the study also highlighted a critical UX insight: engagement alone
				does not guarantee learning. Clear guidance, well-designed tutorials, and
				appropriate scaffolding are essential—especially for younger users encountering
				abstract concepts like programming logic.
			</p>
			<p class="body">
				The findings reinforced the value of adaptive, multi-genre educational games,
				while underlining the importance of early formative evaluation to surface
				usability and instructional barriers. Minerva served not as a finished solution,
				but as a research-driven prototype guiding future design and development.
			</p>
			<div class="section-line"></div>
		{:else if slug === "evaluation-of-running-othello2-an-physical-educationt-game"}
			<h1 id="summary">Summary</h1>
			<p class="body">
				Running Othello 2 (RO2) is a mobile exergame designed for primary school
				Physical Education (PE). It turns Othello into a physically active,
				curriculum-linked game by combining NFC-tag movement, wearable sensing (heart
				rate), and short health-education micro-lessons (e.g., hygiene, first aid,
				safety). The goal was to see whether this kind of “move + learn” experience
				can improve learning, exercise, and motivation compared to standard PE
				learning materials.
			</p>
			<div class="section-line"></div>

			<h1 id="constraints">Constraints</h1>
			<ul class="body-list">
				<li>
					Hardware + setup dependency: required a physical board (64 NFC tags),
					smartphones, and wearables; setup time, storage, maintenance, and breakage
					risk were real constraints in a school context.
				</li>
				<li>
					Classroom realism: PE time is limited and logistically messy; the game had
					to fit into recess/short sessions and still deliver learning content.
				</li>
				<li>
					Sensor reliability: activity recognition thresholds and NFC reads caused
					occasional errors; children also performed movements “wrong” while still
					passing missions.
				</li>
				<li>
					Novelty effect risk: engagement may be inflated because the tech is new; the
					teacher explicitly worried interest would drop if repeated without variation.
				</li>
				<li>
					Translation + cultural context: instruments were translated to Korean and
					later back to English, creating unavoidable risk of nuance loss.
				</li>
				<li>
					Short-term evaluation: one-week window + a delayed post-quiz gives only
					limited insight into long-term outcomes.
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="research-goals">Research Goals</h1>
			<ul class="body-list">
				<li>
					Learning: Does RO2 improve retention of PE/health-education content compared
					to handouts?
				</li>
				<li>
					Exercise: Does gameplay generate meaningful physical activity (using heart
					rate as a proxy)?
				</li>
				<li>
					Motivation &amp; engagement: Does it increase willingness to move—especially
					among typically inactive or overweight students?
				</li>
				<li>
					Feasibility: What issues (usability, technical, operational) might block real
					PE adoption?
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="approach">Approach &amp; Methods</h1>
			<p class="body">
				Participants: 61 South Korean third-grade students (~10 years old).
			</p>
			<ul class="body-list">
				<li>Game group: 32 students played RO2</li>
				<li>Control group: 29 students studied the same content via handouts</li>
			</ul>
			<p class="body">One PE teacher interviewed</p>
			<p class="body">Study format: mixed-method, school-based, run over ~1 week.</p>
			<p class="body">
				RO2 sessions: ~15 minutes per player, 4 players at a time (two matches).
			</p>
			<p class="body">
				Post-quiz administered one week later to both groups.
			</p>
			<p class="body">Data sources:</p>
			<ul class="body-list">
				<li>Post-quiz (ordering + multiple-choice questions)</li>
				<li>Game-group questionnaire (4-point Likert + open questions)</li>
				<li>Student interviews (8 volunteers)</li>
				<li>Teacher interview</li>
				<li>Observations by researchers + teacher</li>
				<li>Heart rate data (Microsoft Band; 21 successful samples)</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="data">Data &amp; Findings</h1>
			<h2>Learning outcomes (post-quiz)</h2>
			<p class="body">
				Game group averaged 77% correct vs 65% for the control group.
			</p>
			<p class="body">
				The game group outperformed the control group on most questions;
				multiple-choice results showed significant differences in several items.
			</p>
			<p class="body">
				Ordering questions were hard for both groups; one ordering item (handwashing
				sequence) had no fully correct answers, partly due to overly similar images.
			</p>
			<p class="body">
				Interpretation: the game supported short-term learning/retention, but some
				question formats and assets undermined measurement quality.
			</p>

			<h2>Exercise efficiency</h2>
			<p class="body">
				Heart rate data showed peaks above 100 bpm in many sessions (overall average
				~84 bpm).
			</p>
			<p class="body">
				Exertion level depended heavily on physical layout (distance between tags)
				and mission thresholds.
			</p>
			<p class="body">
				Observations noted kids getting out of breath during spinning/jumping and not
				always noticing they were exercising.
			</p>
			<p class="body">
				Interpretation: RO2 produced at least mild-to-moderate physical exertion, with
				clear room for personalization (difficulty scaling, mission tuning).
			</p>

			<h2>Motivation &amp; engagement</h2>
			<p class="body">
				High engagement across the board, including students usually inactive in PE;
				the teacher specifically pointed out overweight children being unusually
				active and happy.
			</p>
			<p class="body">
				Kids consistently preferred this style of PE learning over textbook theory
				lessons.
			</p>
			<p class="body">
				Technology itself (NFC recognition, wearables) was a major motivator, but the
				teacher warned this may fade without varied modes/content.
			</p>
			<p class="body">
				Not all students enjoyed competition; at least one preferred helping rather
				than beating a friend—hinting at the need for cooperative modes.
			</p>

			<h2>Issues surfaced</h2>
			<ul class="body-list">
				<li>Technical restarts were needed sometimes.</li>
				<li>Activity recognition wasn’t always accurate (threshold tuning).</li>
				<li>Some children “gamed” physical missions without following instructions precisely.</li>
				<li>Certain pedagogical puzzles were perceived as difficult or boring by some players.</li>
				<li>
					Teacher raised practical barriers: cost, maintenance, storage, training time,
					space, and lack of onsite technical support.
				</li>
			</ul>
			<div class="section-line"></div>

			<h1 id="conclusions">Conclusions</h1>
			<p class="body">
				RO2 demonstrated that a wearable-enabled exergame can blend movement with
				curriculum learning in a way that students and teachers find compelling.
				Compared to handouts, it produced stronger short-term retention on several
				learning items, and it clearly increased motivation to move, especially for
				students who are typically less active in PE.
			</p>
			<p class="body">
				The big blockers weren’t the idea—they were execution realities: reliability
				of sensing + NFC interactions, clarity of instructions and content pacing, and
				the operational burden of hardware in schools.
			</p>
			<p class="body">
				For real adoption, the design needs: better onboarding and clearer
				instructions (ideally video), more robust activity detection, adaptive
				difficulty and cooperative play modes, and a deployment model that schools
				can actually maintain.
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
		{#if section.slug === "research-themes"}
			<p class="body">
				My work focuses on how design, structure, and interaction patterns shape
				human behavior—especially in learning, community, and technology-mediated
				support contexts. Across my projects, several recurring themes emerge:
			</p>

			<h2>Trust, Safety, and Social Risk</h2>
			<p class="body">
				How platform structure, visibility, and boundaries influence whether people
				feel safe enough to participate, ask for help, or engage with others.
			</p>

			<h2>Engagement and Motivation</h2>
			<p class="body">
				Understanding what drives sustained participation—through feedback,
				progression, gamification, and behavioral triggers—rather than assuming usage
				follows from availability.
			</p>

			<h2>Design for Vulnerable or Specific User Groups</h2>
			<p class="body">
				Translating research into practical design guidance for elderly users,
				learners, and other groups with distinct needs and constraints.
			</p>

			<h2>Learning Through Interaction</h2>
			<p class="body">
				Evaluating how interactive systems and games support learning, practice, and
				skill development compared to traditional methods.
			</p>

			<h2>From Research to Design Practice</h2>
			<p class="body">
				Moving beyond insights to prototypes, evaluations, and design
				recommendations that can be applied in real systems.
			</p>
		{:else if section.slug === "how-i-work"}
			<p class="body">
				I work by moving deliberately between research, design, and validation.
				Rather than treating research as a separate phase, I use it to shape
				concrete design decisions and test them in practice.
			</p>

			<h2>Start from real problems</h2>
			<p class="body">
				I begin with observed gaps—misaligned behavior, low engagement, or unclear
				user needs—and frame them as researchable questions.
			</p>

			<h2>Choose methods pragmatically</h2>
			<p class="body">
				I combine qualitative, quantitative, and heuristic approaches based on what
				best answers the question at hand, not methodological purity.
			</p>

			<h2>Design to test ideas</h2>
			<p class="body">
				When insights remain abstract, I prototype—often building functional
				systems—to explore how design choices play out in real use.
			</p>

			<h2>Validate and iterate</h2>
			<p class="body">
				I use expert reviews, user studies, and controlled evaluations to challenge
				assumptions and refine both designs and recommendations.
			</p>

			<h2>Translate findings into action</h2>
			<p class="body">
				I focus on outcomes that designers, developers, and organizations can
				actually use—patterns, priorities, and trade-offs rather than raw data.
			</p>

			<p class="body">
				Across projects, my work follows a consistent loop: observe → analyze →
				design → test → refine, always grounded in real constraints and context.
			</p>
		{:else}
			<p class="body">Content coming soon.</p>
		{/if}
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
		font-weight: 700;
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
