/** @type {import('./$types').LayoutServerLoad} */
export function redirectToAbout() {
    console.log("redirect");
    throw redirect(307, '/about');
  }