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
	type="button"
	class={merge('flex h-8 w-8 items-center justify-center', className)}
	on:click={click}
>
	<span class="sr-only">{text}</span>
	<slot name="icon" />
</button>
