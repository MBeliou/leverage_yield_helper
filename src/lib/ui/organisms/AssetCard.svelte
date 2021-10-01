<script lang="ts">
  import type { Pool } from "../../models/pool.interface";
  import { SelectedAsset } from "../../stores/SelectionStore";

  export let asset: string;
  let selected: boolean = false;
  $: {
    selected = asset === $SelectedAsset;
  }

  function selectNewAsset() {
    SelectedAsset.set(asset);
  }
</script>

<button
  class="p-0.5 {selected ? 'bg-primary' : ''} rounded-md"
  on:click={selectNewAsset}
>
  <div
    class="p-2  bg-lighter-dark text-light flex flex-col items-center rounded-md "
  >
    <div class="flex">
      <img src="/logos/{asset}.png" class="h-10 w-10 " alt="{asset} logo" />
    </div>
    <p class="font-semibold text-sm mt-4 md:text-base">{asset}</p>
  </div>
</button>
