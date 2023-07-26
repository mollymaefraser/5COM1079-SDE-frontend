<script lang ="ts">
  import "../app.postcss";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink
  } from "flowbite-svelte";

  import { isLoggedIn } from "../stores";

  import DarkMode from "svelte-dark-mode";
  import { afterUpdate } from "svelte";

  let theme;

  afterUpdate(() => {
    document.body.className = theme; // "dark" or "light"
  });

  // After update is a function that runs when the devices theme changes, so we can ensure the website complies
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/Favicon.png"
      alt="MedIntelligence Logo"
      height=120
      width=180
    />
  </NavBrand>
  {@html '<!--The above serves as branding for the navbar, including our logo-->'}
  <NavHamburger on:click={toggle} />
  {@html '<!--The above serves as having a dropdown bar you are able to clock on to show the rest of the navbar/options-->'}
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    {#if isLoggedIn}
        <NavLi href="/logout">Log Out</NavLi>
        <NavLi href="/symptom-checker">Symptom Checker</NavLi>
        <NavLi href="/find-provider">Find Health Provider</NavLi>
        {@html '<!--The above are the options for a user who is logged in-->'}
    {:else}
    <NavLi href="/login">Login</NavLi>
    <NavLi href="/sign-up">Sign Up</NavLi>
    {@html '<!--The above are the options for users who are not signed in, and the buttons take you to the relating pages-->'}
    {/if}
  </NavUl>
</Navbar>
<DarkMode bind:theme />

<slot />
{@html '<!--Slot is where the actual page content goes (as layout covers the layout of all pages)-->'}

<Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
      href=""
      src="/Favicon.png"
      alt="MedIntelligence Logo"
      name="MedIntelligence"
    />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Licensing</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <FooterCopyright href="/" by="MedIntelligence™" />
</Footer>

{@html '<!--The above is the footer that is shown on each page-->'}

<style>
  :global(.dark) {
    background: #032f62;
    color: #f1f8ff;
  }
</style>


{@html '<!--Layout serves as the styling (layout) for all pages-->'}
