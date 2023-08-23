<script lang="ts">
    import { goto } from "$app/navigation";
    import { PUBLIC_LOCATION_ADD_URL } from "$env/static/public";
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import isAdminStore from "$lib/types/isAdminStore";
    import { Label, Input, Button, Heading, Span, P } from "flowbite-svelte";
    import Swal from 'sweetalert2';

    let longitude: String;
    let latitude: String;
    let name: String;
    let address: String;
    let telephone: String;
    let email: String;
    let errorMessage: String | Error;

    const submitLocation = async () => {
        const res = await fetch(`${PUBLIC_LOCATION_ADD_URL}`, {
            method: "POST",
            body: JSON.stringify({
                longitude: { longitude },
                latitude: { latitude },
                name: { name },
                address: { address },
                email: { email },
                telephone: { telephone },
            }),
        });

        if (res.status != 200) {
            errorMessage =
                "Failed to add location. Please refresh and try again. If the problem persists, contact support.";
        }

        goto("/");
    };

    const fireRedirect = async () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You are not an admin!! Redirect to the home page below...",
            footer: '<a href="/">Home</a>',
        });
    };
</script>

<div class="error-banner">
    {#if errorMessage}
        <ErrorBanner
            ErrorMessage="Location add has failed. Please try again. Contact support if the issue persists."
        />
    {/if}
</div>

<br />

{#if $isAdminStore == true}
    <div class="text-center">
        <Heading
            tag="h1"
            class="mb-4"
            customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
            ><Span gradient>Location Adder</Span></Heading
        >
        <P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
            >Simply enter the provider you would like to add. These will then be
            available for our clients to select and help diagnose.</P
        >
    </div>

    <div class="mb-6">
        <Label for="location-input" class="block mb-2">Add a Location</Label>
        <Input id="name-input" placeholder="Name" bind:value={name} />
        <Input id="add-input" placeholder="Address" bind:value={address} />
        <Input id="email-input" placeholder="Email" bind:value={email} />
        <Input id="tel-input" placeholder="Telephone" bind:value={telephone} />
        <Input id="long-input" placeholder="Long" bind:value={longitude} />
        <Input id="lat-input" placeholder="Lat" bind:value={latitude} />
    </div>

    <div class="submitter">
        <Button color="light" on:click={submitLocation}>Submit</Button>
    </div>
{:else}
    <p hidden>{fireRedirect()}</p>
{/if}

<style>
    .mb-6 {
        max-width: 40%;
        text-align: center;
        margin: auto;
    }
    .submitter {
        padding: 50px;
        text-align: center;
    }
</style>
