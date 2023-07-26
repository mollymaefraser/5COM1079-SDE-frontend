<script>
    import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";

  import { isLoggedIn } from "../../stores.js";
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