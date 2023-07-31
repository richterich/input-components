<script>
	import '../app.postcss';
</script>

<header>
	<p />
</header>

<main class="relative mx-auto mt-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
	<slot />
</main>

<footer>
	<p />
</footer>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
