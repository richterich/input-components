<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let src = '';
	/** @type {string} */
	export let alt = '';
	/** @type {string} */
	export let className = '';
</script>

<img
	class={merge('h-12 w-12 flex-none rounded-full bg-gray-50', className)}
	{src}
	{alt}
	loading="lazy"
/>
