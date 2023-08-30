<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, Navbar, NavBrand, NavLi, NavUl } from "flowbite-svelte";

  import user from "$lib/types/user.js";

  function logout() {
    $user.isUserAdmin = false
    $user.userFirstName = ""
    $user.userLastName = ""
    $user.userID = 0
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
    {#if $user.isUserAdmin == true}
      <NavLi on:click={logout} href="/">Log Out</NavLi>
      <NavLi href="/admin/add-symptoms">Add Symptoms</NavLi>
      <NavLi href="/admin/add-provider">Add Health Provider</NavLi>
      <NavLi href="/admin/add-illness">Add Illness</NavLi>
      <!-- <NavLi href="/admin/update-illness">Update Illness</NavLi> -->
      <div class="profile">
        <Avatar
          id="user-drop"
          src="/defaultAvatar.png"
          class="cursor-pointer"
        />
        <Dropdown triggeredBy="#user-drop">
          <DropdownHeader>
            <span class="block text-sm">{$user.userFirstName} {$user.userLastName}</span>
          </DropdownHeader>
          <DropdownItem href="/change-password">Change Password</DropdownItem>
          <DropdownItem href="/delete-account">Delete Account</DropdownItem>
        </Dropdown>
      </div>
    {:else if $user.userFirstName !== ""}
      <NavLi on:click={logout} href="/">Log Out</NavLi>
      <NavLi href="/symptom-checker">Symptom Checker</NavLi>
      <NavLi href="/find-provider">Find Health Provider</NavLi>
      <div class="profile">
        <Avatar
          id="user-drop"
          src="/defaultAvatar.png"
          class="cursor-pointer"
        />
        <Dropdown triggeredBy="#user-drop">
          <DropdownHeader>
            <span class="block text-sm">{$user.userFirstName} {$user.userLastName}</span>
          </DropdownHeader>
          <DropdownItem href="/change-password">Change Password</DropdownItem>
          <DropdownItem href="/delete-account">Delete Account</DropdownItem>
        </Dropdown>
      </div>
      {@html "<!--The above are the options for a user who is logged in-->"}
    {:else}
      <NavLi href="/login">Login</NavLi>
      <NavLi href="/sign-up">Sign Up</NavLi>
      {@html "<!--The above are the options for users who are not signed in, and the buttons take you to the relating pages-->"}
    {/if}
  </NavUl>
</Navbar>

<style>
  .profile {
    align-items: right;
  }
</style>
