<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let href = '';
	/** @type {string} */
	export let heading = '';
	/** @type {string} */
	export let className = '';
</script>

<h2 class={merge('truncate text-base font-medium leading-7 text-slate-900', className)}>
	<a {href}>{heading}</a>
	<slot name="badge" />
</h2>
