<script lang="ts">
	import { Icon, ExternalLink } from 'svelte-hero-icons';
	import type { IProject } from '../../app';

	export let project: IProject;
</script>

<div class="m-5 rounded-md">
	<h2 class="text-xl">
		{project.name}
	</h2>
	<p>{project.description}</p>
	{#if project.githubUrl}
		<p>
			<a href={project.githubUrl}>
				View the code
				<Icon class="inline-block" src={ExternalLink} size="32" />
			</a>
		</p>
	{/if}
	<p>
		<a href={project.demoUrl}>
			{project.cta || 'Demo'}
			<Icon class="inline-block" src={ExternalLink} size="32" slot="span" />
		</a>
	</p>
</div>
