<script>
	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		// Verify the reCAPTCHA response
		grecaptcha.ready(function () {
			grecaptcha.execute('6LcB46AkAAAAAJe6LD9b22BcSy45z-wwkwtoWZyx', { action: 'login' }).then(function (token) {
				// Send the email
				// Replace this with your own email sending logic
				console.log(`Name: ${name}`);
				console.log(`Email: ${email}`);
				console.log(`Message: ${message}`);
				console.log(`reCAPTCHA response: ${token}`);

				// Reset the form
				name = '';
				email = '';
				message = '';
			});
		});

		// Prevent form submission until reCAPTCHA response is verified
		return false;
	}
</script>
<main><script src="https://www.google.com/recaptcha/enterprise.js?render=6LcB46AkAAAAAJe6LD9b22BcSy45z-wwkwtoWZyx" async defer></script>
<div class="flex flex-col items-center ">
	<h2 class="text-6xl relative postion-left-0 pb-10 underline min-[400px]:text-2xl">Contact me</h2>
	<div class="flex flex-col bg-white border-2 m-auto md:w-1/2 sm:w-[80%] shadow-2xl items-center">
		<form on:submit|preventDefault={handleSubmit}>
			<div class="flex flex-col mb-4">
				<label for="name">Name</label>
				<input class="border-solid border-2 border-black " type="text" id="name" bind:value={name} required />
			</div>
			<div class="flex flex-col mb-4">
				<label for="email">Email</label>
				<input class="border-solid border-2 border-black "  type="email" id="email" bind:value={email} required />
			</div>
			<div class="flex flex-col mb-4">
				<label for="message">Message</label>
				<textarea class="border-solid border-2 border-black "  id="message" bind:value={message} required />
			</div>
			<div class="g-recaptcha m-auto mb-4" data-sitekey="6LcB46AkAAAAAJe6LD9b22BcSy45z-wwkwtoWZyx" />
			<button class="flex justify-center m-auto bg-blue-400 rounded-md font-bold mb-4 w-1/2 p-4" type="submit">Submit</button>
		</form>
	</div>
</div>
</main>