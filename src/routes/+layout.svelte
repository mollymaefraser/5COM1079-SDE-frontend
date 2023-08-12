<script lang ="ts">
  import "../app.postcss";

  import DarkMode from "svelte-dark-mode";
  import { afterUpdate } from "svelte";

  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";


  let theme;
  

  afterUpdate(() => {
    document.body.className = theme; // "dark" or "light"
  });

  // After update is a function that runs when the devices theme changes, so we can ensure the website complies
</script>

<Navbar/>

<DarkMode bind:theme />

<slot />
{@html '<!--Slot is where the actual page content goes (as layout covers the layout of all pages)-->'}

<Footer/>

{@html '<!--The above is the footer that is shown on each page-->'}

<style>
  :global(.dark) {
    background: #032f62;
    color: #f1f8ff;
  }
</style>


{@html '<!--Layout serves as the styling (layout) for all pages-->'}
