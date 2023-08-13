<script lang="ts">
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import Map from "$lib/components/Map.svelte";
    import { Card, Heading, Span } from "flowbite-svelte";
    import type { LayoutData } from "../$types";

    export let data: LayoutData; // undefined somehow
</script>

<div class="error-banner">
    {#if data.errorMessages.mark}
        <ErrorBanner ErrorMessage={data.errorMessages.mark} />
    {/if}
</div>
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
