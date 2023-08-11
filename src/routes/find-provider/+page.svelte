
<script lang="ts">
    import Map from "$lib/components/Map.svelte";
    import type { LayoutData } from "../$types";

    export let data: LayoutData; // undefined somehow
</script>


<div class="map">
    <Map markers={data.markers}></Map>
</div>