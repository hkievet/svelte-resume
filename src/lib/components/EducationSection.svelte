<script lang="typescript">
	import type { IEducation } from '../../app';

	export let education: IEducation;
</script>

<div>
	<h3>
		{education.location}
	</h3>
	<p>
		{education.startDate} - {education.endDate}
	</p>
	<p>{education.description}</p>
</div>
