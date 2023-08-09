<script>
	/** @type {string} */
	export let prefix = '';
	/** @type {string} */
	export let heading = '';
	/** @type {string | null} */
	export let largeHeading = null;
</script>

<h2 class="flex items-center text-sm font-semibold leading-6">
	<span class="text-indigo-500">{prefix}</span>
	<span class="mx-2 h-4 w-px bg-slate-300" />
	<span class="text-slate-900">
		{#if largeHeading !== null}
			<span class="xl:hidden">{heading}</span>
			<span class="hidden xl:inline">{largeHeading}</span>
		{:else}
			{heading}
		{/if}
	</span>
</h2>
