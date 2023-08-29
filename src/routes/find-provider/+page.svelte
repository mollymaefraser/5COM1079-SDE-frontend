<script lang="ts">
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import Map from "$lib/components/Map.svelte";
    import { Card, Heading, Span } from "flowbite-svelte";
    import type { LayoutData } from "../$types";
    import loggedInStore from "$lib/types/loggedInStore";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Footer from "$lib/components/Footer.svelte";
    import Col from "$lib/components/Col.svelte";

    export let data: LayoutData; 

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
       {#each data.locations as location}
            <Col xs={16} md={8} lg={4}>
                <Card>
                    <h2>{location.nameOfFacility}</h2>
                    <p>{location.address}</p>
                    <p>{location.emailAddress}</p>
                    <p>{location.telephone}</p>
                </Card>
            </Col>
       {/each}
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
