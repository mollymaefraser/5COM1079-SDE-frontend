<script lang ="ts">
  import "../app.postcss";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";

  import { isLoggedIn } from "../stores";
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/favicon.png"
      class="mr-3 h-6 sm:h-9"
      alt="MedIntelligence Logo Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      MedIntelligence
    </span>
  </NavBrand>
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
