<script>
	/** @type {string} */
	export let text = '';
	/** @type {boolean} */
	export let semiBold = false;
	/** @type {boolean} */
	export let truncate = false;
</script>

<p class="text-sm leading-6 text-gray-900" class:font-semibold={semiBold} class:truncate>{text}</p>
