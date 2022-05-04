<script lang="ts">
	import type { IProject } from '../../app';
	import ExternalLinkIcon from './ExternalLinkIcon.svelte';
	import SectionContainer from './layout/SectionContainer.svelte';
	import SectionHeader from './layout/SectionHeader.svelte';
	import SubHeader from './layout/SubHeader.svelte';

	export let project: IProject;
</script>

<SectionContainer class="rounded-md bg-zinc-800 p-5">
	<SubHeader>
		{project.name}
	</SubHeader>
	<p class="mb-3">{project.description}</p>
	{#if project.githubUrl}
		<p>
			<a href={project.githubUrl}>
				View the code
				<ExternalLinkIcon />
			</a>
		</p>
	{/if}
	<p>
		<a href={project.demoUrl}>
			{project.cta || 'Demo'}
			<ExternalLinkIcon />
		</a>
	</p>
</SectionContainer>
