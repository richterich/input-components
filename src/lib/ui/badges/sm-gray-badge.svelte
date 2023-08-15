<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let text = '';
	/** @type {string} */
	export let className = '';
</script>

<span
	class={merge(
		'whitespace-nowrap rounded-md bg-slate-100 px-2 py-1 text-center text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-500/10',
		className
	)}
>
	{text}
</span>
