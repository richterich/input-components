<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {{blur:string, point:string}} */
	export let className = { blur: '', point: '' };
</script>

<div class={merge('rounded-full bg-emerald-500/20 p-1', className.blur)}>
	<div class={merge('h-1.5 w-1.5 rounded-full bg-emerald-500', className.point)} />
</div>
