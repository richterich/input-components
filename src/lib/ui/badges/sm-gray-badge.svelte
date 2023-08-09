<script>
	/** @type {string} */
	export let text = '';
	/** @type {boolean} */
	export let leftMargin = false;
	/** @type {boolean} */
	export let rightMargin = false;
</script>

<span
	class="whitespace-nowrap rounded-md bg-slate-100 px-2 py-1 text-center text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-500/10"
	class:ml-3={leftMargin}
	class:mr-3={rightMargin}
>
	{text}
</span>
