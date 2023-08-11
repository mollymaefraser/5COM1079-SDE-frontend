
<script lang="ts">
    import Map from "$lib/components/Map.svelte";
    import type { PageData } from './$types';

    let data: PageData; // undefined somehow
</script>


<div class="map">
    <Map markers={data?.markers}></Map>
</div>