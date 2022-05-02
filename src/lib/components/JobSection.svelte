<script lang="ts">
	import type { IResumeJob } from 'src/app';
	import { makeDate } from '../make-date';
	import SectionContainer from './layout/SectionContainer.svelte';
	import SubHeader from './layout/SubHeader.svelte';
	export let job: IResumeJob;
</script>

<SectionContainer class="print:mb-2">
	<div class="print:flex print:flex-row print:content-center print:justify-between">
		<SubHeader>
			{job.title} @ {job.companyName}
		</SubHeader>
		<p class="print:text-sm">
			{makeDate(job.startDate)} - {job.endDate ? makeDate(job.endDate) : 'present'}
		</p>
	</div>
	<ul class="list-disc list-inside">
		{#each job.bullets as bullet}
			<li class="print:text-sm">{bullet}</li>
		{/each}
	</ul>
</SectionContainer>
