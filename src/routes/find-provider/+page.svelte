
<script lang="ts">
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";
    import Map from "$lib/components/Map.svelte";
    import type { LayoutData } from "../$types";

    export let data: LayoutData; // undefined somehow
</script>


<div class="error-banner">
    {#if data.errorMessages.mark}
        <ErrorBanner ErrorMessage={data.errorMessages.mark}/>
    {/if}
</div>

<div class="map">
    <Map markers={data.markers}></Map>
</div>