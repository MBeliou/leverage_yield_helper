<script lang="ts">
  import type { Pool } from "../../models/pool.interface";
  import { SelectionStore } from "../../stores/SelectionStore";

  export let pool: Pool;
  let selected: boolean = false;
  $: {
    selected = pool === $SelectionStore;
  }

  function selectNewPool() {
      SelectionStore.set(pool);
  }
</script>

<button class="p-0.5 {selected ? 'bg-primary' : ''} rounded-md group" on:click="{selectNewPool}">
  <div
    class="p-2  bg-lighter-dark group-hover:bg-gray-700  text-light flex flex-col items-center rounded-md group"
  >
  <div class="flex">
      {#each pool.assets as asset, i}
      <img src="/logos/{asset}.png" class="h-10 w-10 {i == 1 ? '-ml-4' : ''}" alt="{asset} logo">
      {/each}
  </div >
    <p class="font-semibold text-sm mt-4 md:text-base">{pool.assets.join("-")}</p>
  </div>
</button>
