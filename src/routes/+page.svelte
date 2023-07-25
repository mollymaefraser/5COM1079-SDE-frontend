<script>
    import {  Heading, P, Button } from 'flowbite-svelte'

    import { onMount } from 'svelte';
    let LottiePlayer;

    onMount(async () => {
      const module = await import("@lottiefiles/svelte-lottie-player");
      LottiePlayer = module.LottiePlayer;
    });
  </script>


  <div class="health-animation">
    {#if LottiePlayer}
						<LottiePlayer
							src="https://lottie.host/e6cb123b-ffc2-401b-a843-4a8faa5b942d/7nJrJRsdG7.json"
							autoplay={true}
							loop={true}
							controls={false}
							renderer="svg"
							background="transparent"
							height={250}
							width={250}
						/>
					{:else}
						<img class="object-center pt-6  w-full pl-6 pr-12 lg:mt-6 md:pl-0 md:pr-4 " src="blockbuilding.svg" alt="building graphic" />
					{/if}
  </div>
  
  <div  class="text-center">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Help with your health, when you need it most.</Heading>
    <P align="center" class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at MedIntelligence we focus on you, your health, and our providers.</P>
    <Button href="/about">Learn more 
    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </Button>
  </div>


  <style>
    .text-center{
        padding-top: 50px;
    }
    .health-animation{
      padding-left: 600px;
    }
  </style>