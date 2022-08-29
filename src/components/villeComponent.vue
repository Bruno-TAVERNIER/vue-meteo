<template>
  <p>Ville: {{ ville.nom }}</p>
  <p>Latitude: {{ ville.lat }}</p>
  <p>Longitude: {{ ville.lng }}</p>
</template>

<script>
  export default {
    name: 'VilleComponent',
    props: {
      ville: Object
    }
  }
</script>