<template>
  <div>
      <h1>Profile</h1>
      <h1>{{ id }}</h1>
      <h1>{{ id }}</h1>
      <h1>{{ nom }}</h1>
      <h1>{{ prenom }}</h1>
      <h1>{{ nom_complet }}</h1>
      <h1>{{ email }}</h1>
      <h1>{{ moyenne }}</h1>
  </div>
</template>

<!-- ============================================================================ -->

<script>

import my_json from './../../server/test.json';
import $ from 'jquery';

export default {
  data () {
    return {
      id: 0,
      nom: 0,
      prenom: 0,
      nom_complet: 0,
      email: 0,
      moyenne: 0
    }
  },
  created() {

      var i = this.$route.params.id;

      this.id = my_json.items[i].id;
      this.nom = my_json.items[i].name;
      this.prenom = my_json.items[i].surname;
      this.nom_complet = my_json.items[i].fullname;
      this.email = my_json.items[i].email;
      this.moyenne = my_json.items[i].float;
      
      if((i != my_json.items[i].id)||(this.$route.params.name != my_json.items[i].name)||(this.$route.params.surname != my_json.items[i].surname)) {
          console.log("erreur d identification");
      }
  }
  }
</script>

<!-- ============================================================================ -->

<style scoped>
</style>
