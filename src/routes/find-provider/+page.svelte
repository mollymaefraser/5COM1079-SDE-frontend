<script lang="ts">
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import Map from "$lib/components/Map.svelte";
    import { Card, Heading, Span } from "flowbite-svelte";
    import type { LayoutData } from "../$types";
    import loggedInStore from "$lib/types/loggedInStore";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";

    export let data: LayoutData; // undefined somehow

    const fireRedirect = async () => {
        if(browser){
            goto("/login")
        }
    };
</script>

<div class="error-banner">
    {#if data.errorMessages.mark}
        <ErrorBanner ErrorMessage={data.errorMessages.mark} />
    {/if}
</div>

{#if $loggedInStore == true}
    <div class="heading">
        <Heading
            tag="h1"
            class="mb-4"
            customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
            ><Span gradient>Find a Provider</Span></Heading
        >
    </div>

    <div class="map">
        <Map locations={data.locations} />
    </div>

    <div class="locations">
        <Heading
            tag="h1"
            class="mb-4"
            customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
            ><Span gradient>Location Details:</Span></Heading
        >
        <div class="row">
            {#each data.locations as location}
                <div class="col-sm">
                    <Card>
                        <p><strong>{location.name}</strong></p>
                        <p>{location.address}</p>
                        <p>{location.email}</p>
                        <p>{location.telephone}</p>
                    </Card>
                </div>
            {/each}
        </div>
    </div>
{:else}
    <p hidden>{fireRedirect()}</p>
{/if}

<style>
    .locations {
        padding: 30px;
    }
    .row {
        display: inline-flex;
    }
    .heading {
        padding: 30px;
    }
</style>
