<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let href = '';
	/** @type {string} */
	export let text = '';
	/** @type {string} */
	export let className = '';
</script>

<a
	{href}
	class={merge(
		'inline-flex w-full justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700',
		className
	)}
	target="_blank"
>
	<span>{text}</span>
</a>
