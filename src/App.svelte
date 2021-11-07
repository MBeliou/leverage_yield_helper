<script lang="ts">
  import { ALL_TWO_SIDED_POOLS } from "./lib/data/pools";
  import {
    SelectionStore,
    ToBorrowAsset,
    SelectedAsset,
  } from "./lib/stores/SelectionStore";
  import Link from "./lib/ui/Icons/Link.Icon.svelte";
  import AssetCard from "./lib/ui/organisms/AssetCard.svelte";
  import Navbar from "./lib/ui/organisms/Navbar.svelte";
  import PoolCard from "./lib/ui/organisms/PoolCard.svelte";
  import Questions from "./lib/ui/organisms/Questions.svelte";

  import "./tailwind.css";
</script>

<div class="relative flex flex-col min-h-screen">
  <Navbar />
  <div class="mt-16" />

  <main class="w-full mx-auto my-6 max-w-7xl">
    <p class="my-4 text-xl text-center text-white">
      All farms can be found on <a
        class="text-2xl font-extrabold uppercase "
        href="https://eleven.finance"
      >
        eleven.finance
        <img
          src="/logos/eleven.png"
          alt="eleven.finance logo"
          class="inline w-12 h-12 ml-2"
        /></a
      >
    </p>
    <div
      class="w-full max-w-2xl mx-auto h-[1px] bg-gray-300 bg-opacity-40 rounded-full"
    />
    <h3 class="mt-6 text-xl font-black text-center text-gray-100 uppercase">
      I want to <span class="text-primary">farm</span>
    </h3>
    <div class="grid grid-cols-2 gap-4 px-4 mt-4 md:grid-cols-3 lg:grid-cols-4">
      {#each ALL_TWO_SIDED_POOLS as pool}
        <PoolCard {pool} />
      {/each}
    </div>

    <div class="mt-10">
      {#if $SelectionStore}
        <h3 class="text-xl font-black text-center text-gray-100 uppercase">
          I want to have <span class="text-primary">long</span> exposure to
        </h3>

        <div class="grid grid-cols-2 gap-4 px-4 mt-4">
          {#each $SelectionStore.assets as asset}
            <AssetCard {asset} />
          {/each}
        </div>
      {/if}
    </div>

    {#if $SelectedAsset && $ToBorrowAsset}
      <div class="mt-10">
        <h3 class="text-xl font-black text-center text-gray-100 uppercase">
          I need to <span class="text-primary">borrow</span>
        </h3>

        <div class="mt-4 p-0.5  rounded-md max-w-md mx-auto">
          <div
            class="flex flex-col items-center p-2 rounded-md bg-lighter-dark text-light "
          >
            <div class="flex">
              <img
                src="/logos/{$ToBorrowAsset}.png"
                class="w-10 h-10 "
                alt="{$ToBorrowAsset} logo"
              />
            </div>
            <p class="mt-3 text-sm font-semibold">{$ToBorrowAsset}</p>
          </div>
        </div>
      </div>
    {/if}
  </main>
  <section class="w-full px-4 py-6 mx-auto max-w-7xl">
    <Questions />
  </section>

  <section class="px-4 py-6 mx-auto max-w-7xl">
    <h3 class="text-2xl font-black text-center text-white uppercase">
      Need to know more?
    </h3>
    <div
      class="mt-3 w-full max-w-2xl mx-auto h-[1px] bg-gray-300 bg-opacity-40 rounded-full"
    />
    <a
      href="https://lupi.gitbook.io/eleven-finance/"
      target="_blank"
      class="block mt-4 text-center text-white"
      >Check out Eleven Finance's <span class="font-semibold text-primary">documentation!</span>
      <i class="inline-block w-5 h-5"><Link /> </i>
    </a>
  </section>
</div>

<style global>
  html,
  body {
    @apply min-h-screen bg-dark bg-blend-color;
    /* @apply min-h-screen bg-[#242943] bg-blend-color; */
    /* background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%); */
    /* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */
  }
  :root {
    font-family: "Sora", sans-serif;
    /*
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;*/
  }
</style>
