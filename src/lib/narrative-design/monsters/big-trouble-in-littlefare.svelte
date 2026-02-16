
<div class="monster-card">
		<div class="monster-content">
			<div class="monster-header">
				<div>
					<h3>The Barghest (Mogawg)</h3>
					<p class="meta">True Antagonist</p>
				</div>
				<span class="monster-role">Boss</span>
			</div>
			<div class="monster-grid">
				<div>
					<p class="monster-label">Role</p>
					<p class="body">True antagonist</p>
				</div>
				<div>
					<p class="monster-label">Disguise</p>
					<p class="body">Illusionary “Red Dragon”</p>
				</div>
				<div>
					<p class="monster-label">Goal</p>
					<p class="body">Feed on fear, maintain the quiet tribute system</p>
				</div>
				<div>
					<p class="monster-label">Weakness</p>
					<p class="body">Fear collapse reduces influence</p>
				</div>
			</div>
			<p class="monster-label">Tactics</p>
			<ul class="body-list">
				<li>Appears at dusk</li>
				<li>Uses illusion and staged destruction by Naa Mio’s orc allies</li>
				<li>Avoids full-scale violence</li>
			</ul>
			<p class="monster-label">Base Statistics</p>
			<p class="body">For the base statistics of the barghest, consult the Monster Manual.</p>
			<p class="monster-label">Additional Ability</p>
			<div class="ability-block">
				<p class="ability-title">Frightful Presence (Legendary Action)</p>
				<div class="ability-grid">
					<div>
						<p class="monster-label">Cost</p>
						<p class="body">2 Legendary Actions</p>
					</div>
					<div>
						<p class="monster-label">Uses</p>
						<p class="body">2 per Long Rest</p>
					</div>
				</div>
				<p class="body">
					The barghest projects overwhelming supernatural terror. Each creature of the
					barghest’s choice within 30 feet must succeed on a DC 14 Charisma saving throw
					or become frightened of the barghest until the end of its next turn.
				</p>
				<p class="body">
					A creature that succeeds on the saving throw does not gain immunity to this
					Frightful Presence and must repeat the saving throw if targeted again.
				</p>
			</div>
		</div>
		<div class="monster-portrait" aria-hidden="true">
			<div class="portrait-frame">
				<span>Profile Image</span>
			</div>
		</div>
	</div>
	<div class="monster-card">
		<div class="monster-content">
			<div class="monster-header">
				<div>
					<h3>Doppelganger</h3>
					<p class="meta">Impersonator</p>
				</div>
				<span class="monster-role">Deceiver</span>
			</div>
			<p class="monster-label">Base Statistics</p>
			<p class="body">See Monster Manual for complete stat block and abilities.</p>
			<p class="monster-label">Notes for This Adventure</p>
			<ul class="body-list">
				<li>Currently posing as Mayor Aldric Venn</li>
				<li>Will attempt deception before combat</li>
				<li>Prioritizes escape over killing</li>
				<li>Uses Read Thoughts to anticipate interrogation angles</li>
			</ul>
		</div>
		<div class="monster-portrait" aria-hidden="true">
			<div class="portrait-frame">
				<span>Profile Image</span>
			</div>
		</div>
	</div>
	<div class="monster-card">
		<div class="monster-content">
			<div class="monster-header">
				<div>
					<h3>6 x Orcs</h3>
					<p class="meta">Enforcers</p>
				</div>
				<span class="monster-role">Muscle</span>
			</div>
			<p class="monster-label">Base Statistics</p>
			<p class="body">See Monster Manual for complete stat block and abilities.</p>
			<p class="monster-label">Notes for This Adventure</p>
			<ul class="body-list">
				<li>One orc serves as the leader, posing as a guard captain</li>
				<li>Serve as hired muscle and tribute enforcers</li>
				<li>Intimidation-focused rather than tactical</li>
				<li>Break morale quickly if a leader falls</li>
			</ul>
		</div>
		<div class="monster-portrait" aria-hidden="true">
			<div class="portrait-frame">
				<span>Profile Image</span>
			</div>
		</div>
	</div>

<style>
	.detail-section {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		max-width: 720px;
		margin: 0 auto;
	}

	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.24em;
		font-size: 0.65rem;
		color: #7b756c;
		margin: 0;
	}

	h1 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		margin: 0;
	}

	.meta {
		color: #6b655b;
		margin: 0;
	}

	.body {
		margin: 0.4rem 0 0;
		color: #2f2a22;
	}

	.body-list {
		margin: 0.2rem 0 0.6rem 1.2rem;
		padding: 0;
		color: #2f2a22;
		list-style: disc;
	}

	.body-list li {
		margin: 0.35rem 0;
	}

	h3 {
		font-size: 1rem;
		margin: 0 0 0.2rem;
		color: #4c4740;
	}

	.monster-card {
		display: flex;
		gap: 1.4rem;
		padding: 1.2rem 1.3rem;
		border-radius: 18px;
		background: #ffffff;
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #7a1a1a, #b22222) 1;
		box-shadow: 0 12px 26px rgba(36, 28, 18, 0.12);
	}

	.monster-content {
		flex: 1 1 0;
		min-width: 0;
	}

	.monster-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.6rem;
	}

	.monster-role {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.68rem;
		color: #5c4630;
		font-weight: 700;
		white-space: nowrap;
	}

	.monster-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.6rem 1rem;
		margin-bottom: 0.6rem;
	}

	.monster-label {
		margin: 0.5rem 0 0.25rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.68rem;
		color: #5c4630;
		font-weight: 700;
	}

	.ability-block {
		margin-top: 0.4rem;
		padding: 0.8rem 0.9rem;
		border-radius: 14px;
		border: 1px solid rgba(94, 71, 42, 0.3);
		background: rgba(251, 244, 228, 0.7);
	}

	.ability-title {
		margin: 0 0 0.3rem;
		font-weight: 700;
		color: #4b2e1f;
	}

	.ability-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.4rem 1rem;
		margin-bottom: 0.2rem;
	}

	.monster-portrait {
		flex: 0 0 180px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.portrait-frame {
		width: 180px;
		height: 220px;
		border-radius: 16px;
		border: 2px dashed rgba(94, 71, 42, 0.5);
		background: linear-gradient(180deg, rgba(122, 47, 31, 0.08), rgba(122, 47, 31, 0.16));
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.65rem;
		color: #6b655b;
	}

	@media (max-width: 900px) {
		.monster-card {
			flex-direction: column;
		}

		.monster-portrait {
			align-self: flex-start;
		}
	}
</style>

