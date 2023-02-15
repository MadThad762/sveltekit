<script lang="ts">
  import { page } from "$app/stores"
  import "../app.css";
</script>

<div>
  <header class="px-6 lg:px-8">
    <div class="">
      <div class=" flex flex-row mt-3 justify-between">
        {#if $page.data.session}
          <div>
            {#if $page.data.session.user?.image}
              <span
                style="background-image: url('{$page.data.session.user.image}')"
                class=""
              />
            {/if}
            <span class="flex w-48">
              <a href="/"><strong
                >{$page.data.session.user?.email ??
                  $page.data.session.user?.name}</strong
              ></a>
            </span>
          </div>
        {/if}
        {#if !$page.data.session}
          <div class="flex w-48"><a href="/">Home</a></div>
        {/if}
          <nav>
            <ul class="flex flex-row space-x-8">
              <li class=""><a href="/contentful">Contentful</a></li>
              <li class=""><a href="/planet-scale">Planet Scale</a></li>
            </ul>
          </nav>
        {#if $page.data.session}
          <div class="flex justify-end w-48"><a href="/auth/signout" class="button" data-sveltekit-preload-data="off">Sign out</a></div>
        {:else}
        <div class="flex justify-end w-48"><a href="/auth/signin" class="buttonPrimary" data-sveltekit-preload-data="off">Sign in</a></div>
        {/if}
        </div>
    </div>
  </header>
  <slot />
</div>

<style>
  
</style>
