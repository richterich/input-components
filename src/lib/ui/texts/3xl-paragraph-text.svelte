<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let text = '';
	/** @type {string} */
	export let className = '';
</script>

<p class={merge('text-3xl tracking-tight text-slate-900', className)}>{text}</p>
