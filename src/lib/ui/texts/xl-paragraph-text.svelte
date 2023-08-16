<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let text = '';
	/** @type {string} */
	export let className = '';
</script>

<p class={merge('text-xl leading-8 text-gray-600', className)}>{text}</p>
