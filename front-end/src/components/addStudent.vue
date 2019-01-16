<template>
  <div class="container">
      <form method="post" v-on:submit.prevent="addToAPI">
      <div class="well">
        <h4> Ajout Etudiant</h4>
        <div class="form-group">
          <label class="pull-left"> Nom </label>
          <input type="text" class="form-control" placeholder="Nom" v-model="student.name">
        </div>
        <div class="form-group">
          <label class="pull-left"> Prénom </label>
          <input type="text" class="form-control" placeholder="Prénom" v-model="student.surname">
        </div>
        <div class="form-group">
          <label class="pull-left"> Email </label>
          <input type="text" class="form-control" placeholder="Email" v-model="student.email">
        </div>
        <div class="form-group">
          <label class="pull-left"> Nom complet </label>
          <input type="text" class="form-control" placeholder="Nom Complet" v-model="student.fullname">
        </div>
        <div class="form-group">
          <label class="pull-left"> Moyenne </label>
          <input type="text" class="form-control" placeholder="Moyenne" v-model="student.float">
        </div>
      </div>
  
      <button type="submit" class="btn btn-primary">Valider</button>
      <button type="reset" class="btn btn-primary" @click="onReset">Reset</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      student: {
        campus: 0,
        uf: 0,
        name: "",
        surname: "",
        email: "",
        fullname: "",
        float: 0
      },
      show: true
    }
  },
  created() {
    var i = this.$route.params.id1 - 1;
    this.student.uf = this.$route.params.id2;

    axios
      .get("http://localhost:3000/data/campus")
      .then(response => {
        this.student.campus = response.data[i].name.split(" ")[response.data[i].name.split(" ").length - 1].toLowerCase();
      });
  },
  methods: {
    addToAPI() {
      let newStudent = {
        campus: this.student.campus,
        uf: this.student.uf,
        name: this.student.name,
        surname: this.student.surname,
        email: this.student.email,
        fullname: this.student.fullname,
        float: this.student.float
      }
      axios
        .post('http://localhost:3000/add', newStudent);
    },
    onReset (evt) {
      evt.preventDefault();
      this.student.email = '';
      this.student.name = '';
      this.student.surname = '';
      this.student.float = 0;
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped>
.container{
  width: 50%;
  margin: auto;
}
button{
  margin-left: 60px;
  text-align: center;
}
</style>