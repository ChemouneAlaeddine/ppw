<template>
<div>
<center>
  <h1>Profile de {{ student.name }} {{ student.surname }} </h1>
  <br>
  <br>
<table class="table table-striped">
  <tbody>
    <tr>
      <th>index</th>
    <td>{{ student.index }}</td>
    </tr>
    <tr>
       <th>nom</th>
       <td>{{ student.name }}</td>
    </tr>
    <tr>
     <th>prénom</th>
    <td>{{ student.surname }}</td>
    </tr>
    <tr>
     <th>email</th>
    <td>{{ student.email }}</td>
    </tr>
    <tr>
     <th>moyenne</th>
    <td>{{ student.float }}</td>
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
      student: {
        index: 0,
        name: 0,
        surname: 0,
        email: 0,
        fullname: 0,
        float: 0
      }
    }
  },
  created() {
      var i = this.$route.params.id1 - 1;
      var j = this.$route.params.id2;
      var k = this.$route.params.id3;

      axios
      .get("http://localhost:3000/data/campus")
      .then(response => {
        var camp = response.data[i].name.split(" ")[response.data[i].name.split(" ").length - 1].toLowerCase();
        axios
        .get("http://localhost:3000/data/"+camp+"_"+j)
        .then(response => {
          this.student = response.data[k - 1];
        });
      });
  }
}
</script>

<!-- ============================================================================ -->

<style>
</style>
