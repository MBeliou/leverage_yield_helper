<script lang="ts">
  import Question from "../molecules/Question.svelte";

  const questions: { question: string; answer: string }[] = [
    {
      question: "Why is the APY negative?",
      answer:
        "Your APY depends on both the pools' returns and the usage of the bank responsible for your financing.<br> This situation usually is temporary and will resolve itself when more lending is done or farmers close their positions.",
    },
    {
      question: "What is eleUSDC / eleWAVAX?<br/> I can't find it anywhere!",
      answer:
        "You just need to provide WAVAX ou plain USDC. You can wrap your tokens at any AMM.",
    },
  ];
</script>

<h3 class="text-2xl font-black text-center text-white uppercase">
  Q<span class="text-primary">&</span>A
</h3>
<div
  class="mt-3 w-full max-w-2xl mx-auto h-[1px] bg-gray-300 bg-opacity-40 rounded-full"
/>
<div class="grid gap-6 mt-4 md:grid-cols-2 md:gap-8">
  {#each questions as question}
    <Question {...question} />
  {/each}
</div>
