<template>
<div>
<!-- center>
  <h1>Profile de {{ prenom }} {{ nom }} </h1>
  <br>
  <br>
<table class="table table-striped">
  <tbody>
    <tr>
      <th>index</th>
    <td>{{ id }}</td>
    </tr>
    <tr>
       <th>name</th>
       <td>{{ nom }}</td>
    </tr>
    <tr>
     <th>surname</th>
    <td>{{ prenom }}</td>
    </tr>
    <tr>
     <th>email</th>
    <td>{{ email }}</td>
    </tr>
    <tr>
     <th>note</th>
    <td>{{ moyenne }}</td>
    </tr>
  </tbody>
</table>
</center -->  
</div>  
</template>

<!-- ============================================================================ -->

<script>

//import my_json from './../../server/test.json';

export default {
  data () {
    return {
      /*my_json: [0],
      id: 0,
      nom: 0,
      prenom: 0,
      nom_complet: 0,
      email: 0,
      moyenne: 0*/
    }
  },
  created() {

      var i = this.$route.params.id3;

      console.log(i);

      /*this.id = my_json.items[i].index;
      this.nom = my_json.items[i].name;
      this.prenom = my_json.items[i].surname;
      this.nom_complet = my_json.items[i].fullname;
      this.email = my_json.items[i].email;
      this.moyenne = my_json.items[i].float;

      this.$http.get("http://localhost:3000/campus")
              .then(response => {
                  this.my_json = response.body.campus;
      });
      this.camp = ufs[this.$route.params.id - 1].name;*/
      
      /*if((i != my_json.items[i].id)||(this.$route.params.name != my_json.items[i].name)||(this.$route.params.surname != my_json.items[i].surname)) {
          console.log("erreur d identification");
      }*/
  }
  }
</script>

<!-- ============================================================================ -->

<style scoped>
</style>
