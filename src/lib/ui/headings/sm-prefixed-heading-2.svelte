<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let prefix = '';
	/** @type {string} */
	export let heading = '';
	/** @type {string | null} */
	export let largeHeading = null;
	/** @type {{heading:string, prefix:string, separator:string, text:string}} */
	export let className = { heading: '', prefix: '', separator: '', text: '' };
</script>

<h2 class={merge('flex items-center text-sm font-semibold leading-6', className.heading)}>
	<span class={merge('text-indigo-500', className.prefix)}>{prefix}</span>
	<span class={merge('mx-2 h-4 w-px bg-slate-300', className.separator)} />
	<span class={merge('text-slate-900', className.text)}>
		{#if largeHeading !== null}
			<span class="xl:hidden">{heading}</span>
			<span class="hidden xl:inline">{largeHeading}</span>
		{:else}
			{heading}
		{/if}
	</span>
</h2>
