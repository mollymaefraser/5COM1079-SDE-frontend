<script lang="ts">
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import Map from "$lib/components/Map.svelte";
    import { Card, Heading, Span } from "flowbite-svelte";
    import type { LayoutData } from "../$types";
    import loggedInStore from "$lib/types/loggedInStore";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Footer from "$lib/components/Footer.svelte";

    export let data: LayoutData; // undefined somehow

    let cols = 3;

    const fireRedirect = async () => {
        if (browser) {
            goto("/login");
        }
    };
</script>

<div class="error-banner">
    {#if data.errorMessages.mark}
        <ErrorBanner ErrorMessage={data.errorMessages.mark} />
    {/if}
</div>

{#if $loggedInStore == true}
    <div class="headers">
        <div class="provider-header">
            <Heading
                tag="h1"
                class="mb-4"
                customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
                ><Span gradient>Find a Provider</Span></Heading
            >
        </div>

        <div class="details-header">
            <Heading
                tag="h1"
                class="mb-4"
                customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
                ><Span gradient>Location Details</Span></Heading
            >
        </div>
    </div>

    <div class="map">
        <Map locations={data.locations} />
    </div>

    <div class="locations">
        <div class="row">
            {#each data.locations as location, i}
                    {#if i % cols === 0}
                        <div class="row">
                            {#each Array(cols) as _, j}
                                {#if data.locations[(i / cols) * cols + j]}
                                    <div class="col">
                                        {data.locations[(i / cols) * cols + j]}
                                    </div>
                                {/if}
                            {/each}
                        </div>
                    {/if}
            {/each}
        </div>
    </div>
{:else}
    <p hidden>{fireRedirect()}</p>
{/if}

<div class="footer">
    <Footer />
</div>

<style>
    .map {
        float: left;
        width: 50%;
        padding-bottom: 100px;
    }
    .headers {
        display: flex;
        flex-direction: row;
    }
    .footer {
        position: relative;
        bottom: 0;
        padding-top: 1000px;
        width: 100%;
        height: 60px; /* Height of the footer */
    }
    .locations {
        float: right;
        width: 50%;
        padding-left: 30px;
    }
    .card-group {
        display: flex;
    }
    .row {
        display: grid;
        grid-column: 4;
    }
    .details-header {
        padding-top: 50px;
        position: absolute;
        left: 50%;
        transform: translateX(5%);
    }
    .provider-header {
        padding-top: 50px;
    }
</style>
