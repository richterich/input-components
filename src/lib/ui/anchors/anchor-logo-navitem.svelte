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
	class={merge('select-none text-xl font-extrabold uppercase text-slate-900', className)}
	target="_self"
>
	<span>
		{#if text !== ''}
			{text}
		{:else}
			<slot name="logo" />
		{/if}
	</span>
</a>
