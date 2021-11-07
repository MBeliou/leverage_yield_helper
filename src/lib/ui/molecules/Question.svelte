<script lang="ts">
  export let question: string;
  export let answer: string;

  let showAnswer: boolean = false;
</script>

<button class="flex flex-col items-center justify-center w-full p-4 rounded min-h-[9rem] bg-lighter-dark" on:click="{() => showAnswer = !showAnswer}">
  {#if !showAnswer}
    <div class="flex items-center space-x-2 text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
      <h4 class="max-w-md text-lg font-bold text-left">{@html question}</h4>
    </div>
  {:else}
    <p class="mt-2 text-gray-100">{@html answer}</p>
  {/if}
</button>
