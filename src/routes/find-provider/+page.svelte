<script lang="ts">
    import Map from "$lib/components/Map.svelte";
    import { Badge, Card, Heading, Span, Toast } from "flowbite-svelte";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Footer from "$lib/components/Footer.svelte";
    import { Icon } from "flowbite-svelte-icons";
    import { PUBLIC_MARKER_LOAD_URL } from "$env/static/public";
    import { onMount } from "svelte";
    import type { LocationLoad } from "$lib/types/LocationLoad";
    import user from "$lib/types/user";

    let locations: LocationLoad[] = [];

    let errorMessage: string = "";

    let hovered;

    const fireRedirect = async () => {
        if (browser) {
            goto("/login");
        }
    };

    onMount(async () => {
        const mark = await fetch(`${PUBLIC_MARKER_LOAD_URL}`, {
            method: "GET",
        });

        locations = await mark.json();

        if (mark.status != 200) {
            errorMessage =
                "Failed to load locations. Please refresh and try again. If the problem persists, contact support.";
        }
    });
</script>

<div class="error-banner">
    {#if errorMessage !== ""}
        <Toast>
            <svelte:fragment slot="icon">
                <Icon name="close-circle-solid" class="w-5 h-5" />
                <span class="sr-only">Error icon</span>
            </svelte:fragment>
            <p>{errorMessage}</p>
        </Toast>
    {/if}
</div>

{#if $user.userFirstName !== ""}
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

    {#if locations.length > 0}
        <div class="map">
            <Map {locations} />
        </div>
    {/if}

    <div class="locations">
        {#if locations.length != 0}
            {#each { length: locations.length } as _, i}
                <Card size="xl" class="mb-6">
                    <Heading tag="h2"
                        >Location Name: {locations[i].nameOfFacility}</Heading
                    >
                    <p><b>Location Address:</b> {locations[i].address}</p>
                    <p>
                        <b>Location Email Address:</b>
                        {locations[i].emailAddress}
                    </p>
                    <p><b>Location Telephone:</b> {locations[i].telephone}</p>
                    <p>
                        <b>Services Offered:</b>
                        {#each locations[i].offeredServices as service}
                            <Badge
                                title={service.serviceDescription}
                                rounded
                                border
                                color="green"
                            >
                                    {service.serviceName} : {service.serviceDescription}
                            </Badge>

                        {/each}
                    </p>
                </Card>
            {/each}
        {/if}
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
        padding-top: 2000px;
        width: 100%;
        height: 60px; /* Height of the footer */
    }
    .locations {
        float: right;
        width: 50%;
        padding-left: 30px;
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
