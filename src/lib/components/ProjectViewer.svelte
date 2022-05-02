<script>
	import { projects } from '../../routes/projects';
	import ProjectSection from './ProjectSection.svelte';
</script>

<h2>Coding Samples</h2>
<div class="grid grid-cols-3">
	<!-- <SimpleGrid columns={[1, 1, 2]} spacing="5">
		{projectElements}
	</SimpleGrid> -->
	{#each projects as project}
		<ProjectSection {project} />
	{/each}
</div>
