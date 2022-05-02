<script>
	import EducationSection from '../lib/components/EducationSection.svelte';
	import ProjectViewer from '../lib/components/ProjectViewer.svelte';

	import JobSection from '../lib/components/JobSection.svelte';
	import { allJobs, allEducation } from '../lib/resume-data';
</script>

<div class="bg-black text-white">
	<h1>
		<a href={'https://hunterkievet.com'}>Hunter Kievet</a>'s Resume
	</h1>
	<h2>Education</h2>
	{#each allEducation as education}
		<EducationSection {education} />
	{/each}
	<h2>Jobs</h2>
	{#each allJobs as job}
		<JobSection {job} />
	{/each}
	<ProjectViewer />
	<h2>
		Connect with{' '}
		<p as="span" color="blue.600">
			<a href={'https://hunterkievet.com'}>Hunter Kievet</a>
		</p>
	</h2>
	<a href={'https://www.linkedin.com/in/hkievet/'}> Connect on LinkedIn </a>
</div>
