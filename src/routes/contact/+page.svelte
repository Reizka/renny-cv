<script>
	let name = '';
	let email = '';
	let message = '';
</script>

<main>
	<div class="flex flex-col items-center ">
		<h2 class="text-6xl relative postion-left-0 pb-10 underline min-[400px]:text-2xl">
			Contact me
		</h2>
		<div class="flex flex-col bg-white border-2 m-auto md:w-1/2 sm:w-[80%] shadow-2xl items-center">
			<form name="contact" netlify>
				<p>
					<label>Name <input type="text" name="name" /></label>
				</p>
				<p>
					<label>Email <input type="email" name="email" /></label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	</div>
</main>
