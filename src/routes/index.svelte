<script>
	import EducationSection from '$lib/components/EducationSection.svelte';

	import JobSection from '$lib/components/JobSection.svelte';
	import { allJobs, allEducation } from '$lib/resume-data';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import { projects } from './projects';
	import { ExternalLink, Icon } from 'svelte-hero-icons';
	import ExternalLinkIcon from '$lib/components/ExternalLinkIcon.svelte';
	import SectionHeader from '$lib/components/layout/SectionHeader.svelte';
	projects.reverse();
</script>

<div>
	<h1 class="text-2xl print:text-center">
		<a href={'https://hunterkievet.com'}>Hunter Kievet</a>
	</h1>
	<SectionHeader>Education</SectionHeader>
	{#each allEducation as education}
		<EducationSection {education} />
	{/each}
	<SectionHeader>Jobs</SectionHeader>
	{#each allJobs as job}
		<JobSection {job} />
	{/each}
	<SectionHeader class="print:hidden">Coding Samples</SectionHeader>
	<div class="grid grid-cols-1 lg:grid-cols-3 print:hidden">
		<!-- <SimpleGrid columns={[1, 1, 2]} spacing="5">
			{projectElements}
		</SimpleGrid> -->
		{#each projects as project}
			<ProjectSection {project} />
		{/each}
	</div>
	<a href={'https://www.linkedin.com/in/hkievet/'} class="print:hidden">
		Connect with Hunter Kievet on LinkedIn
		<ExternalLinkIcon />
	</a>
	<p class="hidden print:block print:text-sm print:fixed print:bottom-0">
		See extended resume and projects @ https://hunterkievet.com
	</p>
</div>
