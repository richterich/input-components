<script>
	import Preview from '$lib/components/Preview.svelte';
	import StackedLists from '$lib/previews/StackedLists.svelte';
	import Contact from '$lib/previews/Forms/Contact.svelte';
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
			<svg class="h-11 w-11 flex-none overflow-visible" viewBox="0 0 24 24" fill="#636df2">
				<path
					d="m16 6a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2zm7.707 17.707a1 1 0 0 1 -1.414 0l-2.407-2.407a4.457 4.457 0 0 1 -2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1 -.7 2.386l2.407 2.407a1 1 0 0 1 0 1.414zm-6.207-3.707a2.5 2.5 0 1 0 -2.5-2.5 2.5 2.5 0 0 0 2.5 2.5zm-4.5 2h-6a3 3 0 0 1 -3-3v-14a3 3 0 0 1 3-3h12a1 1 0 0 1 1 1v8a1 1 0 0 0 2 0v-8a3 3 0 0 0 -3-3h-12a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h6a1 1 0 0 0 0-2z"
				/>
			</svg>
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
			<svg class="h-11 w-11 flex-none overflow-visible" viewBox="0 0 24 24" fill="#636df2"
				><path
					d="M24,23c0,.55-.45,1-1,1-1.54,0-2.29-1.12-2.83-1.95-.5-.75-.75-1.05-1.17-1.05-.51,0-.9,.44-1.51,1.15-.7,.83-1.57,1.85-3.03,1.85s-2.32-1.03-3-1.87c-.58-.7-.96-1.13-1.46-1.13-.39,0-.63,.25-1.16,.91-.72,.88-1.71,2.09-3.84,2.09-2.76,0-5-2.24-5-5s2.24-5,5-5c.55,0,1,.45,1,1s-.45,1-1,1c-1.65,0-3,1.35-3,3s1.35,3,3,3c1.18,0,1.67-.6,2.29-1.36,.6-.73,1.34-1.64,2.71-1.64,1.47,0,2.32,1.03,3,1.87,.58,.7,.96,1.13,1.46,1.13s.9-.44,1.51-1.15c.7-.83,1.57-1.85,3.03-1.85s2.29,1.12,2.83,1.95c.5,.75,.75,1.05,1.17,1.05,.55,0,1,.45,1,1Zm-15.01-7h.94c1.06,0,2.08-.42,2.83-1.17l7.72-7.72-3.59-3.59-7.72,7.72c-.75,.75-1.17,1.77-1.17,2.83v.94c0,.55,.44,.99,.99,.99ZM23.26,4.33c.48-.48,.74-1.12,.74-1.8s-.26-1.32-.74-1.79c-.99-.99-2.6-.99-3.59,0l-1.36,1.36,3.59,3.59,1.36-1.36Z"
				/>
			</svg>
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
			<svg class="h-11 w-11 flex-none overflow-visible" viewBox="0 0 512 512" fill="#636df2">
				<g>
					<path
						d="M309.333,149.333h53.333v53.333c0,17.673,14.327,32,32,32s32-14.327,32-32v-53.333H480c17.673,0,32-14.327,32-32   s-14.327-32-32-32h-53.333V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v53.333h-53.333c-17.673,0-32,14.327-32,32   S291.66,149.333,309.333,149.333z"
					/>
					<path
						d="M117.333,0C52.532,0,0,52.532,0,117.333s52.532,117.333,117.333,117.333s117.333-52.532,117.333-117.333   C234.596,52.561,182.106,0.071,117.333,0z M117.333,170.667C87.878,170.667,64,146.789,64,117.333S87.878,64,117.333,64   s53.333,23.878,53.333,53.333S146.789,170.667,117.333,170.667z"
					/>
					<path
						d="M117.333,277.333C52.532,277.333,0,329.865,0,394.667S52.532,512,117.333,512s117.333-52.532,117.333-117.333   C234.596,329.895,182.106,277.404,117.333,277.333z M117.333,448C87.878,448,64,424.122,64,394.667s23.878-53.333,53.333-53.333   s53.333,23.878,53.333,53.333S146.789,448,117.333,448z"
					/>
					<path
						d="M394.667,277.333c-64.801,0-117.333,52.532-117.333,117.333S329.865,512,394.667,512S512,459.468,512,394.667   C511.929,329.895,459.439,277.404,394.667,277.333z M394.667,448c-29.455,0-53.333-23.878-53.333-53.333   s23.878-53.333,53.333-53.333S448,365.211,448,394.667S424.122,448,394.667,448z"
					/>
				</g>
			</svg>
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
	<Preview id={'284c9bd7e7a39d1efd45e051abffeed5'} name={'Simple Contact Form'}>
		<Contact slot="preview-component" />
	</Preview>
</div>
