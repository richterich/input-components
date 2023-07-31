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
		Explore these live samples to understand better how the components work.
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
					Every component is a demo preview on the page, and you can even see what they look like at
					different breakpoints by dragging the slider on the right.
				</p>
			</div>
		</li>
		<li class="flex">
			<div class="ml-6">
				<h2 class="flex items-center text-sm font-semibold leading-6">
					<span class="text-indigo-500">Step 2</span>
					<span class="ml-2 h-4 w-px bg-slate-300" />
					<span class="ml-2 text-slate-900">Connect with me</span>
				</h2>
				<p class="mt-2 text-sm leading-7 text-slate-600">
					Click the "Contact" button to get in touch. Drop a message or share your details from
					there. Feel free to contact me, and I'll get back to you as soon as possible!
				</p>
			</div>
		</li>
		<li class="flex">
			<div class="ml-6">
				<h2 class="flex items-center text-sm font-semibold leading-6">
					<span class="text-indigo-500">Step 3</span>
					<span class="ml-2 h-4 w-px bg-slate-300" />
					<span class="ml-2 text-slate-900">
						<span class="xl:hidden">Make it yours</span>
						<span class="hidden xl:inline">Bring it to your project</span>
					</span>
				</h2>
				<p class="mt-2 text-sm leading-7 text-slate-600">
					All the components are constructed solely from Tailwind's utility classes. Adjusting
					anything you want to fit your use case better is possible.
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
