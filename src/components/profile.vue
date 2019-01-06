<template>
<div>
<center>
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
     <th>moyenne</th>
    <td>{{ moyenne }}</td>
    </tr>
  </tbody>
</table>
</center>  
</div>  
</template>

<!-- ============================================================================ -->

<script>

import axios from 'axios';

export default {
  data () {
    return {
      student: 0,
      id: 0,
      nom: 0,
      prenom: 0,
      nom_complet: 0,
      email: 0,
      moyenne: 0
    }
  },
  created() {

      var params = this.$route.path.split("/");

      axios
      .get('http://localhost:3000/'+params[2]+'/'+params[4])
      .then(response => {
        this.student = response.data.students[params[6]-1];
        this.id = this.student.index;
        this.nom = this.student.name;
        this.prenom = this.student.surname;
        this.nom_complet = this.student.fullname;
        this.email = this.student.email;
        this.moyenne = this.student.float;
      });
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>
</style>
