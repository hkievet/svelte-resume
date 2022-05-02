<script lang="typescript">
	import type { IProject } from '../../routes/projects';

	export let project: IProject;
</script>

<div>
	<h2>
		{project.name}
	</h2>
	<p>{project.description}</p>
	{#if project.githubUrl}
		<p>
			<a href={project.githubUrl}> View the code </a>
		</p>
	{/if}
	<p>
		<a href={project.demoUrl}>
			{project.cta || 'Demo'}
		</a>
	</p>
</div>
