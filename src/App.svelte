<script lang="ts">
  import Navbar from "./lib/ui/organisms/Navbar.svelte";

  import "./tailwind.css";
</script>

<div class="relative flex flex-col min-h-screen">
  <Navbar />
  <div class="mt-16" />
  <main class="flex-grow flex flex-col items-center justify-center">
    <p class="text-center text-3xl text-gray-200 font-medium">
      Find us on <span class="block  text-[#2081E2] font-bold text-4xl"
        >OpenSea</span
      >
    </p>
  </main>
</div>

<style global>
  html,
  body {
    @apply min-h-screen bg-[#242943] bg-blend-color;
    /* background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%); */
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  }
  :root {
    font-family: "Sora", sans-serif;
    /*
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;*/
  }
</style>
