<script>
	let name = '';
	let email = '';
	let message = '';
	let sgAPI ="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"

	function handleSubmit() {
		console.log(`Name: ${name}`);
				console.log(`Email: ${email}`);
				console.log(`Message: ${message}`);
		// Verify the reCAPTCHA response
		grecaptcha.enterprise.ready(function () {
			grecaptcha.enterprise.execute(process.env.GOOGLE_RECAPTCHA, {action: 'login'}).then(function(token) {
				// Send the email
				// Replace this with your own email sending logic
				
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
<main>

<div class="flex flex-col items-center ">
	<h2 class="text-6xl relative postion-left-0 pb-10 underline min-[400px]:text-2xl">Contact me</h2>
	<div class="flex flex-col bg-white border-2 m-auto md:w-1/2 sm:w-[80%] shadow-2xl items-center">
		<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
			<p>
			  <label for="name">Your Name:</label>
			  <input type="text" name="name" id="name" required>
			</p>
			<p>
			  <label for="email">Your Email:</label>
			  <input type="email" name="email" id="email" required>
			</p>
			<p>
			  <label for="message">Message:</label>
			  <textarea name="message" id="message" required></textarea>
			</p>
			<div class="hidden">
			  <label>Don’t fill this out if you're human: <input name="bot-field"></label>
			</div>
			<p>
			  <button type="submit">Send</button>
			</p>
		  </form>
		  
	</div>
</div>
</main>