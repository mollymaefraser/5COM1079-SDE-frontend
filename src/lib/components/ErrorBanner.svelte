<script lang="ts">
    import { Banner, Skeleton, ImagePlaceholder } from 'flowbite-svelte';

    export let ErrorMessage: string | Error;
  </script>
  
  <Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />
  
  <Banner id="cta-banner" position="absolute" bannerType="cta">
    <a href="https://flowbite-svelte.com/" class="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600">
      <img src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" class="h-6 mr-2" alt="Flowbite Logo" />
      <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Error</span>
    </a>
    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">{ErrorMessage}</p>
  </Banner>