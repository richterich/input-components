<script>
	import classes from '$lib/utilities/transitions';

	export let closeHandler = () => {};
</script>

<div>
	<div
		class="fixed inset-0 z-50 overflow-hidden lg:hidden"
		role="dialog"
		aria-modal="true"
		aria-labelledby="dialog-title"
	>
		<div
			class="absolute inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity"
			in:classes={{
				duration: 150,
				base: 'duration-150',
				from: 'opacity-0',
				to: 'opacity-100'
			}}
			out:classes={{
				duration: 75,
				base: 'duration-75',
				from: 'opacity-100',
				to: 'opacity-0'
			}}
		/>
		<div
			class="fixed inset-0 flex items-start justify-end overflow-y-auto"
			in:classes={{
				duration: 200,
				base: 'duration-200',
				from: 'translate-x-[min(20rem,calc(100vw-theme(spacing.10)))]',
				to: 'translate-x-0'
			}}
			out:classes={{
				duration: 200,
				base: 'duration-200',
				from: 'translate-x-0',
				to: 'translate-x-[min(20rem,calc(100vw-theme(spacing.10)))]'
			}}
		>
			<div
				class="min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10 transition"
			>
				<h2 class="sr-only" id="dialog-title">Navigation</h2>
				<button
					type="button"
					class="absolute right-6 top-5 flex h-8 w-8 items-center justify-center"
					tabindex="0"
					on:click={closeHandler}
					><span class="sr-only">Close navigation</span><svg
						class="h-3.5 w-3.5 overflow-visible stroke-slate-900"
						fill="none"
						stroke-width="1.5"
						stroke-linecap="round"
						xmlns="http://www.w3.org/2000/svg"
						><path d="M0 0L14 14M14 0L0 14" />
					</svg>
				</button>
				<nav class="divide-y divide-slate-900/10 text-base leading-7 text-slate-900">
					<div class="px-8 py-6">
						<a
							class="flex-none select-none text-xl font-extrabold uppercase text-slate-900"
							href="/"
							on:click={closeHandler}
						>
							UI COMPONENTS
						</a>
					</div>
					<div class="px-8 py-6">
						<div class="-my-2 items-start space-y-2">
							<a class="block w-full py-2 font-semibold" href="/" on:click={closeHandler}>
								Components
							</a>
						</div>
					</div>
					<div class="px-8 py-6">
						<div class="-my-2 space-y-4">
							<a
								class="block w-full py-2 font-semibold"
								href="//github.com/richterich/ui-components/"
								target="_blank"
								on:click={closeHandler}
							>
								Browse repo
							</a>
							<a
								class="inline-flex w-full justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
								href="/contact"
								on:click={closeHandler}
							>
								<span>Contact <span aria-hidden="true">→</span></span>
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
</div>
