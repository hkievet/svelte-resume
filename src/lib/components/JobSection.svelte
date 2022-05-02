<script lang="ts">
	import type { IResumeJob } from 'src/app';
	import { makeDate } from '../make-date';
	export let job: IResumeJob;
</script>

<div class="m-5">
	<h3 class="text-lg">
		{job.title} @ {job.companyName}
	</h3>
	<p>
		{makeDate(job.startDate)} - {job.endDate ? makeDate(job.endDate) : 'present'}
	</p>
	<ul>
		{#each job.bullets as bullet}
			<li>{bullet}</li>
		{/each}
	</ul>
</div>
