<template>
  <p class="text-center">Copyright &copy; {{ annee }} - Moi</p>
</template>

<script>
  export default {
    name: 'FooterComponent',
    /*data() {
      return {
        annee: 2022
      }
    }*/
    /* les propriétés viennent de l'élément parent */
    props: {
      annee: String /* ou Number, Object, ... */
    }
  }
</script>