<div class="location-card">
	<div class="location-content">
		<div class="location-header">
			<div>
				<h3>Surrounding Area</h3>
				<p class="meta">Trade Road · Farmland</p>
			</div>
			<span class="location-role">Backdrop</span>
		</div>
		<p class="body">
			Littlefare sits along a trade road with a river running close to town, slow-moving and
			shallow enough for small barges in good weather.
		</p>
		<p class="body">
			The surrounding land is primarily farming fields, divided by low stone walls and dirt
			paths. Wheat, root vegetables, and grazing patches dominate the area. The land is open,
			giving long sightlines.
		</p>
		<p class="body">A few scattered tree lines and hedgerows break up the farmland.</p>
	</div>
	<div class="location-portrait" aria-hidden="true">
		<div class="portrait-frame">
			<span>Profile Image</span>
		</div>
	</div>
</div>

<div class="location-card">
	<div class="location-content">
		<div class="location-header">
			<div>
				<h3>Town Square</h3>
				<p class="meta">Civic Center</p>
			</div>
			<span class="location-role">Gathering</span>
		</div>
		<p class="body">
			Open plaza at the center of town with a dry well or cracked fountain. Used for
			announcements and other gatherings.
		</p>
		<p class="body">Nearby: the mayor’s office and the Rusty Dragon Inn.</p>
	</div>
	<div class="location-portrait" aria-hidden="true">
		<div class="portrait-frame">
			<span>Profile Image</span>
		</div>
	</div>
</div>

<div class="location-card">
	<div class="location-content">
		<div class="location-header">
			<div>
				<h3>Town Jail</h3>
				<p class="meta">Holding Cells</p>
			</div>
			<span class="location-role">Containment</span>
		</div>
		<p class="body">Small stone holding area beneath civic buildings. Damp and underlit.</p>
		<p class="location-label">Person of Interest</p>
		<p class="body">Orren Pike</p>
	</div>
	<div class="location-portrait" aria-hidden="true">
		<div class="portrait-frame">
			<span>Profile Image</span>
		</div>
	</div>
</div>

<div class="location-card">
	<div class="location-content">
		<div class="location-header">
			<div>
				<h3>Rusty Dragon Inn</h3>
				<p class="meta">Tavern · Common Room</p>
			</div>
			<span class="location-role">Social Hub</span>
		</div>
		<p class="body">Primary tavern and gathering place. Warm but tense atmosphere.</p>
		<p class="location-label">Person of Interest</p>
		<p class="body">Marta Greybloom</p>
	</div>
	<div class="location-portrait" aria-hidden="true">
		<div class="portrait-frame">
			<span>Profile Image</span>
		</div>
	</div>
</div>

<div class="location-card">
	<div class="location-content">
		<div class="location-header">
			<div>
				<h3>Shrine of Chauntea</h3>
				<p class="meta">Faith · Garden</p>
			</div>
			<span class="location-role">Sanctuary</span>
		</div>
		<p class="body">
			Modest shrine near the edge of town. A well-kept garden survives despite general
			decline.
		</p>
		<p class="location-label">Person of Interest</p>
		<p class="body">Brother Elric</p>
	</div>
	<div class="location-portrait" aria-hidden="true">
		<div class="portrait-frame">
			<span>Profile Image</span>
		</div>
	</div>
</div>

<div class="location-card">
	<div class="location-content">
		<div class="location-header">
			<div>
				<h3>Merchants’ Guild Storehouse</h3>
				<p class="meta">Warehouse · Main Road</p>
			</div>
			<span class="location-role">Storage</span>
		</div>
		<p class="body">Large locked warehouse near the main road.</p>
		<p class="location-label">Person of Interest</p>
		<p class="body">Havel Tonn</p>
	</div>
	<div class="location-portrait" aria-hidden="true">
		<div class="portrait-frame">
			<span>Profile Image</span>
		</div>
	</div>
</div>

<div class="location-card">
	<div class="location-content">
		<div class="location-header">
			<div>
				<h3>Offering Field</h3>
				<p class="meta">Tribute Clearing</p>
			</div>
			<span class="location-role">Ritual</span>
		</div>
		<p class="body">
			A flat clearing surrounded by farmland. No trees directly within the center area,
			giving clear visibility from surrounding fields.
		</p>
		<p class="body">Used for leaving tribute to the “dragon.”</p>
		<p class="location-label">Points of Interest</p>
		<ul class="body-list">
			<li>Illusion magic residue</li>
			<li>Large claw prints that don’t match a dragon</li>
			<li>A concealed vantage point from which the barghest observes</li>
		</ul>
	</div>
	<div class="location-portrait" aria-hidden="true">
		<div class="portrait-frame">
			<span>Profile Image</span>
		</div>
	</div>
</div>

<style>
	h3 {
		font-size: 1rem;
		margin: 0 0 0.2rem;
		color: #4c4740;
	}

	.location-card {
		display: flex;
		gap: 1.4rem;
		padding: 1.2rem 1.3rem;
		border-radius: 18px;
		background: #ffffff;
		border: 2px solid transparent;
		border-image: linear-gradient(135deg, #7a1a1a, #b22222) 1;
		box-shadow: 0 12px 26px rgba(36, 28, 18, 0.12);
	}

	.location-content {
		flex: 1 1 0;
		min-width: 0;
	}

	.location-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 0.6rem;
	}

	.location-role {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.68rem;
		color: #5c4630;
		font-weight: 700;
		white-space: nowrap;
	}

	.location-label {
		margin: 0.5rem 0 0.25rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 0.68rem;
		color: #5c4630;
		font-weight: 700;
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

	.location-portrait {
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
		.location-card {
			flex-direction: column;
		}

		.location-portrait {
			align-self: flex-start;
		}
	}
</style>
