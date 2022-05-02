<script>
	import EducationSection from '$lib/components/EducationSection.svelte';

	import JobSection from '$lib/components/JobSection.svelte';
	import { allJobs, allEducation } from '$lib/resume-data';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import { projects } from './projects';
</script>

<div>
	<h1 class="text-2xl">
		<a href={'https://hunterkievet.com'}>Hunter Kievet</a>'s Resume
	</h1>
	<h2 class="text-xl">Education</h2>
	{#each allEducation as education}
		<EducationSection {education} />
	{/each}
	<h2 class="text-xl">Jobs</h2>
	{#each allJobs as job}
		<JobSection {job} />
	{/each}
	<h2 class="text-xl">Coding Samples</h2>
	<div class="grid grid-cols-3">
		<!-- <SimpleGrid columns={[1, 1, 2]} spacing="5">
			{projectElements}
		</SimpleGrid> -->
		{#each projects as project}
			<ProjectSection {project} />
		{/each}
	</div>
	<h2 class="text-xl">
		Connect with{' '}
		<p>
			<a href={'https://hunterkievet.com'}>Hunter Kievet</a>
		</p>
	</h2>
	<a href={'https://www.linkedin.com/in/hkievet/'}> Connect on LinkedIn </a>
</div>
