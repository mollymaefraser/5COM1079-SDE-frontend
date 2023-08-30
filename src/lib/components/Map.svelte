<script lang="ts">
  import { onMount } from "svelte";
  import { Map, Marker, NavigationControl } from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";
    import type { LocationLoad } from "$lib/types/LocationLoad";

  let map: Map;
  let mapContainer: string | HTMLElement;

  export let locations: LocationLoad[]

  const apiKey = "U6Q44BrLCIKE3mhBEMv9";

  $: longitude = -0.23905;
  $: latitude = 51.751744;
  let zoom = 7;

  onMount(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
      });
    }

    map = new Map({
      container: mapContainer,
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${apiKey}`,
      center: [longitude, latitude],
      zoom: zoom,
    });

    console.log(locations)

    map.addControl(new NavigationControl(), "top-right");

    new Marker({ color: "#00FF00" })
        .setLngLat([longitude, latitude])
        .addTo(map);

    locations.forEach((element: {longitude: number, latitude: number}) => {
      new Marker({ color: "#FF0000" })
        .setLngLat([element.longitude, element.latitude])
        .addTo(map);
    });
  });
</script>

<div class="map-wrap">
  <a href="https://www.maptiler.com" class="watermark"
    ><img
      src="https://api.maptiler.com/resources/logo.svg"
      alt="MapTiler logo"
    /></a
  >
  <div class="map" bind:this={mapContainer} />
</div>

<style>
  .map-wrap {
    position: relative;
    width: 100%;
    height: calc(
      100vh - 77px
    ); /* calculate height of the screen minus the heading */
  }

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .watermark {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 999;
  }
</style>
