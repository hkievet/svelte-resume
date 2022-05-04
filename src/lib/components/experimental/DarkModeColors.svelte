<script lang="ts">
	const values: string[] = [];
	for (let i = 1; i < 10; i++) {
		values.push(`text-neutral-${i * 100}`);
	}
	const fillerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, assumenda. Qui dolorem fuga sunt
		possimus, vitae sint magnam harum facilis beatae! Temporibus sint recusandae incidunt illo
		minima, facere ea error maxime nesciunt dolorum perferendis, sunt, odio facilis. Ratione
		expedita quisquam porro pariatur, rerum rem nihil architecto illum esse possimus necessitatibus
		molestias quibusdam dignissimos quos quae. Delectus eligendi quisquam beatae deserunt ullam,
		nulla doloremque molestiae quidem culpa debitis possimus vel neque sapiente facere ab libero
		tenetur! Animi obcaecati dignissimos, eligendi ullam, quasi alias suscipit excepturi totam odit
		veniam facilis fugiat quae, enim perferendis voluptatem temporibus voluptatum aut quos maxime
		cumque sit?`;
	// https://stackoverflow.com/questions/65542265/adding-dynamic-class-name-in-svelte
</script>

<div class="bg-zinc-900 p-10 font-sans">
	<h1>H1</h1>
	<!-- <p class={`text-neutral-100`}>{fillerText}</p>
	<p class={`text-neutral-200`}>{fillerText}</p> -->
	<p class={`text-neutral-300`}>{fillerText}</p>
	<!-- <p class={`text-neutral-400`}>{fillerText}</p>
	<p class={`text-neutral-500`}>{fillerText}</p>
	<p class={`text-neutral-600`}>{fillerText}</p>
	<p class={`text-neutral-700`}>{fillerText}</p>
	<p class={`text-neutral-800`}>{fillerText}</p>
	<p class={`text-neutral-900`}>{fillerText}</p>-->
</div>

<style lang="postcss">
	h1 {
		@apply text-3xl font-serif;
	}
	p {
		@apply my-5;
	}
</style>
