<script>
	import MobileNav from '$lib/components/MobileNav.svelte';
	import '../app.postcss';

	let open = false;

	const openNavigation = () => (open = true);
	const closeNavigation = () => (open = false);
</script>

<header class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
	<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="relative flex items-center py-[2.125rem]">
			<div class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5" />
			<a href="/" class="flex-none select-none text-xl font-extrabold uppercase text-slate-900">
				ui components
			</a>
			<div class="ml-auto hidden lg:flex lg:items-center">
				<a href="/">Components</a>
			</div>
			<button
				type="button"
				class="-my-1 -mr-1 ml-auto flex h-8 w-8 items-center justify-center lg:hidden"
				on:click={openNavigation}
				><span class="sr-only">Open navigation</span><svg
					viewBox="0 0 24 24"
					class="h-6 w-6 stroke-slate-900"
					><path
						d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
						fill="none"
						stroke-width="1.5"
						stroke-linecap="round"
					/></svg
				>
			</button>
			<div
				class="lg:border-slate-900/15 hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:pl-8"
			>
				<a href="//github.com/richterich/ui-components/" target="_blank">Browse repo</a>
				<a
					class="-my-2.5 ml-8 inline-flex justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm text-white hover:bg-slate-700"
					href="/contact"
				>
					<span>Contact <span aria-hidden="true">→</span></span>
				</a>
			</div>
		</div>
	</nav>
</header>

<main class="relative mx-auto mt-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
	<slot />
</main>

<footer class="mx-auto mt-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="border-t border-slate-900/5 py-10">
		<p class="mt-5 text-center text-sm leading-6 text-slate-500">
			Made with Svelte and Tailwind CSS
		</p>
	</div>
</footer>

{#if open}
	<MobileNav closeHandler={closeNavigation} />
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
		font-family: 'Inter', system-ui, sans-serif;
	}
</style>
