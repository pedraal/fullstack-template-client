<template>
  <div class="map">
    <no-ssr>
      <MglMap
        :access-token="accessToken"
        :map-style="mapStyle"
        :center="center"
        :zoom="zoom"
        :interactive="interactive"
        @load="onMapLoaded"
      >
        <MglMarker :coordinates="center" color="hsl(348, 100%, 61%)" />
      </MglMap>
    </no-ssr>
  </div>
</template>

<script>
export default {
  props: ["interactive"],
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoicGVkcmFhbCIsImEiOiJjanY4M3Rkb2wwYzBtNDRueTY5eWZoNGlxIn0.fNYKcXIW-P5yv4m8ojYoUw", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/pedraal/cjxk7otzz5zke1cmuw1d2qp6g",
      zoom: 13,
      center: [-74.007134, 40.713427] // your map style
    };
  },
  methods: {
    onMapLoaded(event) {
      this.map = event.map;
    }
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 500px;
}
</style>