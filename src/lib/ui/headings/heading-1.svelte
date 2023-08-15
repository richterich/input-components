<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let heading = '';
	/** @type {string} */
	export let className = '';
</script>

<h1 class={merge('text-base font-semibold leading-7 text-indigo-500', className)}>{heading}</h1>
