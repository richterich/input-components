<script>
	import Preview from '$lib/components/Preview.svelte';
	import StackedLists from '$lib/previews/StackedLists.svelte';
</script>

<svelte:head>
	<title>Custom UI Components</title>
</svelte:head>

<div class="lg mx-auto max-w-[40rem] lg:max-w-none">
	<h1 class="text-base font-semibold leading-7 text-indigo-500">Components preview</h1>
	<p class="mt-3 max-w-4xl text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
		Get a better idea of how our components work by exploring our live playground.
	</p>
	<ol class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
		<li class="flex">
			<div class="ml-6">
				<h2 class="flex items-center text-sm font-semibold leading-6">
					<span class="text-indigo-500">Step 1</span>
					<span class="ml-2 h-4 w-px bg-slate-300" />
					<span class="ml-2 text-slate-900">
						<span class="xl:hidden">Find a component</span>
						<span class="hidden xl:inline">Find the perfect component</span>
					</span>
				</h2>
				<p class="mt-2 text-sm leading-7 text-slate-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium. Placeat sit,
					quia blanditiis et nam nesciunt ipsa accusantium sed, recusandae, veritatis facere saepe
					voluptates!
				</p>
			</div>
		</li>
		<li class="flex">
			<div class="ml-6">
				<h2 class="flex items-center text-sm font-semibold leading-6">
					<span class="text-indigo-500">Step 2</span>
					<span class="ml-2 h-4 w-px bg-slate-300" />
					<span class="ml-2 text-slate-900">Copy the Snippet</span>
				</h2>
				<p class="mt-2 text-sm leading-7 text-slate-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium. Placeat sit,
					quia blanditiis et nam nesciunt ipsa accusantium sed, recusandae, veritatis facere saepe
					voluptates!
				</p>
			</div>
		</li>
		<li class="flex">
			<div class="ml-6">
				<h2 class="flex items-center text-sm font-semibold leading-6">
					<span class="text-indigo-500">Step 3</span>
					<span class="ml-2 h-4 w-px bg-slate-300" />
					<span class="ml-2 text-slate-900">Make it yours</span>
				</h2>
				<p class="mt-2 text-sm leading-7 text-slate-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laudantium. Placeat sit,
					quia blanditiis et nam nesciunt ipsa accusantium sed, recusandae, veritatis facere saepe
					voluptates!
				</p>
			</div>
		</li>
	</ol>
</div>
<div class="my-20 h-px bg-slate-900/10" />
<div class="space-y-24 pb-px">
	<Preview id={'f8a7439724f5d82ce53d38ace8f35c17'} name={'Simple'}>
		<StackedLists slot="preview-component" />
	</Preview>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
