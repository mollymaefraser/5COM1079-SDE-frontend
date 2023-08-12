<script lang="ts">
    import { onDestroy, onMount } from 'svelte'
    import { Map, Marker, NavigationControl } from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';
    import type { MarkerPoint } from '$lib/types/MarkerPoint';
  
    let map: Map;
    let mapContainer: string | HTMLElement;

    export let markers: MarkerPoint[] = [];
  
    const apiKey = 'U6Q44BrLCIKE3mhBEMv9';


    $: longitude = -0.23905;
    $: latitude = 51.751744;
    $: zoom = 14;
  
    onMount(() => {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            longitude = position.coords.longitude
            latitude = position.coords.latitude
        });
      }
  
      map = new Map({
        container: mapContainer,
        style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${apiKey}`,
        center: [longitude, latitude],
        zoom: zoom
      });

      map.addControl(new NavigationControl(), 'top-right');

      markers.forEach((element: MarkerPoint) => {
        console.log(element.longitude)
        new Marker({color: "#FF0000"})
        .setLngLat([element.longitude, element.latitude])
        .addTo(map);
        });
  });

  onDestroy(() => {
		      map.remove();
	});

  </script>

  <div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark"><img
      src= 'https://api.maptiler.com/resources/logo.svg' alt="MapTiler logo"/></a>
    <div class="map" bind:this={mapContainer}></div>
  </div>
  
  <style>
    .map-wrap {
      position: relative;
      width: 100%;
      height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
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