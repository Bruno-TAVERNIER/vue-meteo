<template>
  <div class="alerte">
    <h1>Alerte Météo</h1>
    <!-- <div> {{ alerte }}</div>-->
    <p> De {{ dteDeb }} à {{ dteFin }}</p>
    <p> {{ alerte[0].sender_name }}</p>
    <p> {{ alerte[0].event }}</p>
    <p> {{ alerte[0].description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'AlerteComponent',
    props: {
      alerte: Object
    },
    created() {
      this.dteDeb = new Date(this.alerte[0].start*1000);
      this.dteFin = new Date(this.alerte[0].end*1000);
    }
  }
</script>

<style scoped>
   .alerte {
    background-color: red;
    color: white;
  }
</style>