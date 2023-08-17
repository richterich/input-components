<script>
	import { merge } from '$lib/utilities/merge-classes';

	/** @type {string} */
	export let href = '';
	/** @type {string} */
	export let agreeText = '';
	/** @type {string} */
	export let policyName = '';
	/** @type {{text:string, policy:string}} */
	export let className = { text: '', policy: '' };
</script>

<p class={merge('text-sm leading-6 text-gray-500', className.text)}>
	{agreeText}
	<a
		{href}
		class={merge('font-semibold leading-6 text-indigo-600 hover:text-indigo-500', className.policy)}
	>
		{policyName}
	</a>.
</p>
