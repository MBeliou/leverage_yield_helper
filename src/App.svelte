<script lang="ts">
  import { ALL_TWO_SIDED_POOLS } from "./lib/data/pools";
  import {
    SelectionStore,
    ToBorrowAsset,
    SelectedAsset,
  } from "./lib/stores/SelectionStore";
  import AssetCard from "./lib/ui/organisms/AssetCard.svelte";
  import Navbar from "./lib/ui/organisms/Navbar.svelte";
  import PoolCard from "./lib/ui/organisms/PoolCard.svelte";

  import "./tailwind.css";
</script>

<div class="relative flex flex-col min-h-screen">
  <Navbar />
  <div class="mt-16" />

  <main class="my-6">
    <p class="my-4 text-white text-center text-xl">
      All farms can be found on <a
        class="uppercase font-extrabold text-2xl "
        href="https://eleven.finance"
      >
        eleven.finance
        <img
          src="/logos/eleven.png"
          alt="eleven.finance logo"
          class="inline h-12 w-12 ml-2"
        /></a
      >
    </p>
    <div class="w-full max-w-2xl mx-auto h-[1px] bg-gray-300 bg-opacity-40 rounded-full"></div>
    <h3 class="mt-6 text-xl uppercase text-gray-100 font-black text-center">
      I want to <span class="text-primary">farm</span>
    </h3>
    <div class="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
      {#each ALL_TWO_SIDED_POOLS as pool}
        <PoolCard {pool} />
      {/each}
    </div>

    <div class="mt-10">
      {#if $SelectionStore}
        <h3 class="text-xl uppercase text-gray-100 font-black text-center">
          I want to have <span class="text-primary">long</span> exposure to
        </h3>

        <div class="mt-4 grid grid-cols-2 gap-4 px-4">
          {#each $SelectionStore.assets as asset}
            <AssetCard {asset} />
          {/each}
        </div>
      {/if}
    </div>

    {#if $SelectedAsset && $ToBorrowAsset}
      <div class="mt-10">
        <h3 class="text-xl uppercase text-gray-100 font-black text-center">
          I need to <span class="text-primary">borrow</span>
        </h3>

        <div class="mt-4 p-0.5  rounded-md max-w-md mx-auto">
          <div
            class="p-2  bg-lighter-dark text-light flex flex-col items-center rounded-md "
          >
            <div class="flex">
              <img
                src="/logos/{$ToBorrowAsset}.png"
                class="h-10 w-10 "
                alt="{$ToBorrowAsset} logo"
              />
            </div>
            <p class="font-semibold text-sm mt-3">{$ToBorrowAsset}</p>
          </div>
        </div>
      </div>
    {/if}
  </main>
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
