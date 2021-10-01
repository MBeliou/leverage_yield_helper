import { derived, writable } from "svelte/store";
import type { Pool } from "../models/pool.interface";

export const SelectionStore = writable<Pool>(null);

export const SelectedAsset = writable<string>(null);
SelectionStore.subscribe((s) => {
  SelectedAsset.set(null);
});

/*
SelectionStore.subscribe((s) => {
  SelectedAsset.set(null);
  if (s) {
    console.log(`available borrows are: ${s.borrows}`);
  }
});
SelectedAsset.subscribe((v) => {
  if (v) {
    console.log(`selected asset: ${v}`);
  }
});
*/

export const ToBorrowAsset = derived(
  [SelectedAsset, SelectionStore],
  ([$SelectedAsset, $SelectionStore]) => {
    if ($SelectionStore && $SelectedAsset) {
      const selectedIndex = $SelectionStore.borrows.indexOf($SelectedAsset);

      if (selectedIndex === -1) {
        return $SelectionStore.borrows[0];
      } else {
        const opposite = $SelectionStore.borrows.length - 1 - selectedIndex;
        return $SelectionStore.borrows[opposite];
      }
    } else {
      return null;
    }
  }
);
