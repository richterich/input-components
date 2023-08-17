<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let text = '';
	/** @type {string} */
	export let className = '';
	/** @type {() => any} */
	export let click = () => {};
</script>

<button
	type="submit"
	class={merge(
		'block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
		className
	)}
	on:click={click}
>
	{text}
</button>
