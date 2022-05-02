<script lang="ts">
	import type { IEducation } from '../../app';
	import { makeDate } from '../make-date';

	export let education: IEducation;
</script>

<div class="m-5">
	<h3 class="text-lg">
		{education.location}
	</h3>
	<p>
		{makeDate(education.startDate)} - {makeDate(education.endDate)}
	</p>
	<p>{education.description}</p>
</div>
