<script>
    import {  Heading, P, Button } from 'flowbite-svelte'

    import LottieHeartJSON from './animation_lkhb7bjh.json'
  </script>

  <div class="heart-animation">
    <lottie-player src={LottieHeartJSON} background=“Transparent” speed=“1” style="width: 300px; height: 300px" direction=“1” mode=“normal” loop controls autoplay></lottie-player>
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
  </style>