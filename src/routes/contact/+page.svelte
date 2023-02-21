<script>
    let name = '';
    let email = '';
    let message = '';
  
    function handleSubmit() {
      // Verify the reCAPTCHA response
      grecaptcha.ready(function() {
        grecaptcha.execute('YOUR_SITE_KEY', {action: 'submit'}).then(function(token) {
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

<main>

    <h2>contact</h2>
   <!-- Add this script to your HTML head -->
<script src="https://www.google.com/recaptcha/api.js" async defer></script>

<form on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" bind:value={name} required>
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" id="email" bind:value={email} required>
  </div>
  <div>
    <label for="message">Message</label>
    <textarea id="message" bind:value={message} required></textarea>
  </div>
  <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
  <button type="submit">Send</button>
</form>




  
  
</main>