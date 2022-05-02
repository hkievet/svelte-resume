<script lang="ts">
	import type { IEducation } from '../../app';
	import { makeDate } from '../make-date';
	import SectionContainer from './layout/SectionContainer.svelte';
	import SubHeader from './layout/SubHeader.svelte';

	export let education: IEducation;
</script>

<SectionContainer>
	<SubHeader>
		{education.location}
	</SubHeader>
	<p class="print:text-sm">
		{makeDate(education.startDate)} - {makeDate(education.endDate)}
	</p>
	<p>{education.description}</p>
</SectionContainer>
