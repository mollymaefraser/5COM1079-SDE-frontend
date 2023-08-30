<script lang="ts">
  import { Heading, P, Button } from "flowbite-svelte";

  import { onMount } from "svelte";
  let LottiePlayer: any;

  import lottieHealth from "$lib/lottie/lottieHealth.json";

  // onMount is loaded when the page is (hence on mount) and what it does is it loads in Lottie Player which is used for the animation

  onMount(async () => {
    const module = await import("@lottiefiles/svelte-lottie-player");
    LottiePlayer = module.LottiePlayer;
  });
</script>

{@html "<!--Script (above) is used for declaring functions, variables, and imports-->"}

<div class="health-animation">
  {#if LottiePlayer}
    <LottiePlayer
      src={lottieHealth}
      autoplay={true}
      loop={true}
      controls={false}
      renderer="svg"
      background="transparent"
      height={250}
      width={250}
    />
  {/if}
</div>
{@html "<!--I created a div for the health animation. Within that, if Lottie Player has been loaded correctly it will then display the animation. if not, it will show a problem graphic-->"}

<div class="text-center">
  <Heading
    tag="h1"
    class="mb-4"
    customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
    >Help with your health, when you need it most.</Heading
  >
  <P
    align="center"
    class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >Here at MedIntelligence we focus on you, your health, and our providers.</P
  >
  <div class="button">
    <Button color = "light" href="/about"
      >Learn more
      <svg
        class="ml-2 -mr-1 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        /></svg
      >
    </Button>
  </div>
</div>

{@html "<!--The above div shows the text about medintelligence. Clicking on the learn more button will take you to an about page-->"}
{@html "<!--Here is where I have styled the above 2 divs-->"}

{@html "<!--Overall, this file serves as the landing page-->"}

<style>
  .text-center {
    padding-top: 400px;
    padding-bottom: 70px;
  }
  .health-animation {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
