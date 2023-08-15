<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let text = '';
	/** @type {string} */
	export let className = '';
</script>

<p class={merge('text-xs leading-5 text-gray-500', className)}>
	{text}
	<slot name="nested-slot" />
</p>
