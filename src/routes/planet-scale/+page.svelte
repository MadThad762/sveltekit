<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.data.session}
	<div class="max-w-screen-2xl px-6 lg:px-8 mx-auto mt-20">
		<h1 class="text-5xl text-center mx-auto font-semibold text-pink-500">
			Planet Scale with Prisma
		</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-5">
			{#each $page.data.stars as star (star.id)}
				<div class="w-full col-span-1 aspect-video object-cover">
					<h2 class="text-xl font-semibold">{star.name}</h2>
					<img
						class="mt-2 aspect-video object-cover object-center w-full rounded-lg"
						src={star.imageUrl}
						alt=""
					/>
					<p class="mt-2 text-base text-gray-500">
						<span class="font-bold">Constellation:</span>
						{star.constellation}
					</p>
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
