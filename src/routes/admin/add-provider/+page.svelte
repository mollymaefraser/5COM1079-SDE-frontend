<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import { PUBLIC_LOCATION_URL } from "$env/static/public";
    import user from "$lib/types/user";
    import { Label, Input, Button, Heading, Span, P, Toast } from "flowbite-svelte";
    import { Icon } from "flowbite-svelte-icons";

    let longitude: String;
    let latitude: String;
    let name: String;
    let address: String;
    let telephone: String;
    let email: String;
    let errorMessage: String | Error;

    const submitLocation = async () => {
        const res = await fetch(`${PUBLIC_LOCATION_URL}/CreateLocation`, {
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

        if (res.status != 201) {
            errorMessage =
                "Failed to add location. Please refresh and try again. If the problem persists, contact support.";
        }

        goto("/");
    };

    const fireRedirect = async () => {
        if(browser){
            goto("/")
        }
    };
</script>

<div class="error-banner">
    {#if errorMessage}
        <Toast>
            <svelte:fragment slot="icon">
                <Icon name="close-circle-solid" class="w-5 h-5" />
                <span class="sr-only">Error icon</span>
            </svelte:fragment>
            <p>{errorMessage}</p>
        </Toast>
    {/if}
</div>

<br />

{#if $user.isUserAdmin == true}
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
