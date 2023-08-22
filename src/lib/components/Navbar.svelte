<script lang="ts">
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
  } from "flowbite-svelte";

  import isLoggedIn from "$lib/types/loggedInStore.js";
  import isAdmin from "$lib/types/isAdminStore.js";

  function logout() {
    $isAdmin = false;
    $isLoggedIn = false;
  }
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="/favicon.png"
      alt="MedIntelligence Logo"
      height="120"
      width="180"
    />
  </NavBrand>
  {@html "<!--The above serves as branding for the navbar, including our logo-->"}
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Home</NavLi>
    {#if $isAdmin == true}
      <NavLi on:click={logout} href="/">Log Out</NavLi>
      <NavLi href="/admin/add-symptoms">Add Symptoms</NavLi>
      <NavLi href="/admin/add-provider">Add Health Provider</NavLi>
      <NavLi href="/admin/add-illness">Add Illness</NavLi>
      <!-- <NavLi href="/admin/update-illness">Update Illness</NavLi> -->
    {:else if $isLoggedIn == true}
      <NavLi on:click={logout} href="/">Log Out</NavLi>
      <NavLi href="/symptom-checker">Symptom Checker</NavLi>
      <NavLi href="/find-provider">Find Health Provider</NavLi>
      {@html "<!--The above are the options for a user who is logged in-->"}
    {:else}
      <NavLi href="/login">Login</NavLi>
      <NavLi href="/sign-up">Sign Up</NavLi>
      {@html "<!--The above are the options for users who are not signed in, and the buttons take you to the relating pages-->"}
    {/if}
  </NavUl>
</Navbar>

