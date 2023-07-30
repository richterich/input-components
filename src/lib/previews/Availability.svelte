<script>
	/** @type {number} */
	export let timestamp;
	/** @type {boolean} */
	export let available;

	/** @type {Date} */
	const lastSeen = new Date(Date.now() - timestamp);
	/** @type {number} */
	const hours = lastSeen.getHours();
</script>

{#if available}
	<div class="mt-1 flex items-center gap-x-1.5">
		<div class="flex-none rounded-full bg-emerald-500/20 p-1">
			<div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
		</div>
		<p class="text-xs leading-5 text-gray-500">Online</p>
	</div>
{:else}
	<p class="mt-1 text-xs leading-5 text-gray-500">
		Last seen <time datetime={lastSeen.toISOString()}
			>{hours > 0 ? `${hours}h ago` : 'recently'}</time
		>
	</p>
{/if}
