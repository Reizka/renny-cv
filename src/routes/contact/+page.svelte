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