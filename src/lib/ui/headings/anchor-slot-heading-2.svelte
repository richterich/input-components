<script>
	/** @type {string} */
	export let href = '';
	/** @type {string} */
	export let heading = '';
</script>

<h2 class="truncate text-base font-medium leading-7 text-slate-900">
	<a {href}>{heading}</a>
	<slot name="badge" />
</h2>
