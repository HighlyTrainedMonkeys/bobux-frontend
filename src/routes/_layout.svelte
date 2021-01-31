<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

{#if !segment || !segment.includes("staff")}
	<Nav {segment}/>
{/if}

<main>
	<slot></slot>
</main>