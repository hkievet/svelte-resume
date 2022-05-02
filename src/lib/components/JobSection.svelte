<script lang="ts">
	import type { IResumeJob } from 'src/app';
	export let job: IResumeJob;
</script>

<div>
	<h3>
		{job.title} @ {job.companyName}
	</h3>
	<p>
		{job.startDate} to {job.endDate || 'present'}
	</p>
	<ul>
		{#each job.bullets as bullet}
			<li>{bullet}</li>
		{/each}
	</ul>
</div>
