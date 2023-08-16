<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let heading = '';
	/** @type {string} */
	export let className = '';
</script>

<h2 class={merge('text-4xl font-extrabold tracking-tight text-gray-900', className)}>{heading}</h2>
