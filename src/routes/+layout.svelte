<script>
	import '../app.postcss';
	import Nav from '$lib/components/layout/Nav.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<Nav />

<slot />

<Footer />
