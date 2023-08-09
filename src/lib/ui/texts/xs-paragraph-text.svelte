<script>
	/** @type {string} */
	export let text = '';
	/** @type {boolean} */
	export let semiBold = false;
	/** @type {boolean} */
	export let truncate = false;
</script>

<p class="text-xs leading-5 text-gray-500" class:font-semibold={semiBold} class:truncate>{text}</p>
