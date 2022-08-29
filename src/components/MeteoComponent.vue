<template>
  <p>Température: {{ meteo.temp }}</p>
  <p>Temps: {{ meteo.maMeteo }}</p>
  <p><img :src="meteo.imgMeteo" :alt="meteo.maMeteo" /></p>
  <!-- evenement click.once pour ne pouvoir gérer qu'un seul click -->
  <button @click.once="chgTtl">Changer le Titre</button>
</template>

<script>
  export default {
    name: 'MeteoComponent',
    props: {
      meteo: Object
    },
    methods: {
      chgTtl() {
        this.$emit('chgTtl');
      }
    }
  }
</script>
