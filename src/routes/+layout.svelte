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
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/Favicon.png"
      alt="MedIntelligence Logo Logo"
      height=120
      width=180
    />
  </NavBrand>
  <DarkMode bind:theme />
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    {#if isLoggedIn}
        <NavLi href="/logout">Log Out</NavLi>
        <NavLi href="/symptom-checker">Symptom Checker</NavLi>
        <NavLi href="/find-provider">Find Health Provider</NavLi>
    {:else}
    <NavLi href="/login">Login</NavLi>
    <NavLi href="/sign-up">Sign Up</NavLi>
    {/if}
  </NavUl>
</Navbar>
<slot />
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

<style>
  :global(.dark) {
    background: #032f62;
    color: #f1f8ff;
  }
</style>
