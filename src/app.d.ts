/// <reference types="@sveltejs/kit" />
/// <reference path="./svelte-icons.d.ts" />

declare module "svelte-icons/*/*" {
	import type { SvelteComponentTyped } from "svelte";

	export default class Icon extends SvelteComponentTyped<
		Record<string, never>
	> {}
}

declare module "svelte-icons/*/*.svelte" {
	import type { SvelteComponentTyped } from "svelte";

	export default class Icon extends SvelteComponentTyped<
		Record<string, never>
	> {}
}
