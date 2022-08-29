<template>
  <div class="container">
    <HeaderComponent :title="title" slogan="La météo qu'il vous faut !" />

    <div class="infos" v-show="ok">
      <!--<p>Ville: {{ ville }}</p>
      <p>Latitude: {{ lat }}</p>
      <p>Longitude: {{ lng }}</p>-->
      <VilleComponent :ville="ville"/>
      
      <!--<p>Température: {{ temp }}</p>
      <p>Temps: {{ maMeteo }}</p>
      <p><img :src="imgMeteo" :alt="maMeteo" /></p>
      <button @click="chgTtl">Changer le Titre</button>-->
      <AlerteComponent :alerte="alerte" v-if="alerte" />
      <MeteoComponent :meteo="meteo" @chgTtl="chgTtl" />
    </div>
    <!-- un parent communique avec un enfant au travers de propriétés -->
    <FooterComponent :annee="annee" />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import VilleComponent from "./components/villeComponent.vue";
import MeteoComponent from "./components/MeteoComponent.vue";
import AlerteComponent from "./components/AlerteComponent.vue";

export default {
  name: 'App',
  data() {
    return {
      ok: false,
      ville: {nom: 'Montpellier', lat: null, lng: null},
      meteo: {temp: null, maMeteo: null, imgMeteo: null},
      annee: null,
      title: 'M2I Météo',
      alerte: null
    }
  },
  mounted() {
    //on récupère l'année en cours (sous forme de chaine)
    this.annee = new Date().getFullYear().toString();
    // https://github.com/public-apis/public-apis
    //console.log(this.ville);
    //fetch().then().then()
    //axios pour les requêtes HTTP
    this.$http.get('https://geo.api.gouv.fr/communes',
    {params: 
      { fields: 'centre, departement',
        nom: this.ville.nom
      }
    })
    .then(response => {
     // console.log(response);
      this.ville.lat = response.data[0].centre.coordinates[1];
      this.ville.lng = response.data[0].centre.coordinates[0];
      this.ok = true;
      //appel API openWeatherMap
      this.$http.get('https://api.openweathermap.org/data/2.5/onecall',
        {params: {
          lat: this.ville.lat,
          lon: this.ville.lng,
          units: 'metric',
          lang: 'fr',
          exclude: 'minutely,hourly,daily',
          appid: 'd2e33b810d399f2fb3d6791d161388ec'
        }
      })
      .then(resMeteo => {
        console.log(resMeteo);
        this.meteo.maMeteo = resMeteo.data.current.weather[0].description;
        this.meteo.temp = resMeteo.data.current.temp + ' °C';
        //this.imgMeteo = ' http://openweathermap.org/img/wn/' + resMeteo.data.current.weather[0].icon + '@2x.png';
        this.meteo.imgMeteo = `http://openweathermap.org/img/wn/${resMeteo.data.current.weather[0].icon}@2x.png`;
        if(resMeteo.data.alerts){
          this.alerte = resMeteo.data.alerts;
        }
      }, error => {
        console.log(error);
      });

    }, error => {
      // en cas d'erreur de l'appel d'API
      console.log(error);
      this.ok = false;
    });
  },
  methods: {
    chgTtl() {
      this.title = 'M2I Vue Météo';
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
    VilleComponent,
    MeteoComponent,
    AlerteComponent
}
}
</script>

<style>

</style>
