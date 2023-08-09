<script>
	/** @type {number} */
	export let timestamp;
	/** @type {Date} */
	const lastSeen = new Date(Date.now() - timestamp);
	/** @type {number} */
	const hours = lastSeen.getHours();
	/** @type {string} */
	const datetime = lastSeen.toISOString();
</script>

<time {datetime}>{hours > 1 ? `${hours}h ago` : 'recently'}</time>
