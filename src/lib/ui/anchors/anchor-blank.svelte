<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let href = '';
	/** @type {string} */
	export let text = '';
	/** @type {string} */
	export let className = '';
</script>

<a {href} class={merge('text-slate-900', className)} target="_blank">{text}</a>
