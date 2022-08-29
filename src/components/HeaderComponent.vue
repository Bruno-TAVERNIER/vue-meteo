<template>
  <header>
    <img src="../assets/logo.png" alt="mon super logo" class="img-fluid" />
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ slogan }}</h2>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderComponent',
    /* les props sont des paramètres passés depuis l'élément parent */
    props: {
      title: String,
      slogan: String
    }
  }
</script>

<style>
  header {
    display: flex;
  }
</style>