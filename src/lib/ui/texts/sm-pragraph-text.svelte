<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let text = '';
	/** @type {string} */
	export let className = '';
</script>

<p class={merge('text-sm leading-6 text-gray-900', className)}>{text}</p>
