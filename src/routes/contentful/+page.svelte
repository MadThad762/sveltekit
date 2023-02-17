<script lang="ts">
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

{#if $page.data.session}
	<div class="max-w-screen-2xl px-6 lg:px-8 mx-auto mt-20">
		<h1 class="text-5xl text-center mx-auto font-semibold text-pink-500">Contentful</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-5">
			{#each $page.data.vehicles as vehicle}
				<div>
					<h2 class="text-xl font-semibold">{vehicle.title}</h2>
					<img
						class="mt-2 aspect-video object-cover object-center rounded-lg"
						src={vehicle.imagesCollection.items[0].url}
						alt=""
					/>
					<p class="mt-2 text-base text-gray-500">Make: {vehicle.make.title}</p>
					<p class="mt-2 text-base text-gray-500">Color: {vehicle.color.title}</p>
				</div>
			{/each}
		</div>
	</div>
{:else}
	<div>
		<h1>Access Denied</h1>
		<p>
			<a href="/auth/signin"> You must be signed in to view this page </a>
		</p>
	</div>
{/if}
