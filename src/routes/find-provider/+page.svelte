<script lang="ts">
    import Map from "$lib/components/Map.svelte";
    import { Badge, Card, Heading, Span, Toast } from "flowbite-svelte";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Footer from "$lib/components/Footer.svelte";
    import Col from "$lib/components/Col.svelte";
    import { Icon } from "flowbite-svelte-icons";
    import { PUBLIC_MARKER_LOAD_URL } from "$env/static/public";
    import { onMount } from "svelte";
    import type { LocationLoad } from "$lib/types/LocationLoad";
    import user from "$lib/types/user";

    let locations: LocationLoad[]

    let errorMessage: string = "";

    const fireRedirect = async () => {
        if (browser) {
            goto("/login");
        }
    };

    onMount (async () =>{
        const mark = await fetch(`${PUBLIC_MARKER_LOAD_URL}`, {
        method: 'GET'
        });

        locations = await mark.json();

        if (mark.status != 200){
            errorMessage = "Failed to load locations. Please refresh and try again. If the problem persists, contact support."
        }
    })
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

    <div class="map">
        <Map locations={locations} />
    </div>

    <div class="locations">
        {#each locations as location}
            <Col xs={16} md={8} lg={4}>
                <Card>
                    <h2>{location.nameOfFacility}</h2>
                    <p>{location.address}</p>
                    <p>{location.emailAddress}</p>
                    <p>{location.telephone}</p>
                    {#each location.offeredServices as service}
                        <Badge rounded border color="green">{service.serviceName}</Badge>
                    {/each}
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
