<script>
	/** @type {string}*/
	export let name;
	/** @type {string}*/
	export let id;
</script>

<div>
	<section id={`component-${id}`}>
		<div class="grid grid-cols-[1fr,auto] items-center">
			<div class="flex min-w-0">
				<h2 class="truncate text-base font-medium leading-7 text-slate-900">
					<a href={`#component-${id}`}>{name}</a>
				</h2>
			</div>
			<div class="col-span-2 row-start-2 min-w-0">
				<div class="mt-4 focus:outline-none">
					<div id={`preview-${id}`} class="relative" style="height: auto; width: 1296px;">
						<div
							id={`preview-${id}`}
							class="w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10"
							title={name}
							style="height: 629px;"
						>
							<slot name="preview-component" />
						</div>
						<div
							class="absolute inset-y-0 left-full hidden cursor-ew-resize items-center px-2 sm:flex"
						>
							<div class="h-8 w-1.5 rounded-full bg-slate-400" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
