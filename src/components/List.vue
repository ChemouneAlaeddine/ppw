<template>
  <div>
    <span>
      <h1> {{ campus }}, UF: {{ uf }} </h1>
      <b-button id="newBtn" size="sm" variant="success" @click.stop="newProfile" class="mr-2" title="nouvel élément">Nouveau</b-button>
    </span>
  <b-table striped hover :items="array" :fields="fields">
    <template slot="Action" slot-scope="row">
      <b-button size="sm" @click.stop="routerLinkProfile(row.index)" title="Afficher détails">Profile</b-button>
      <b-button size="sm" variant="danger" @click.stop="deleteProfile(row.index)" title="Retirer de la liste">Retirer</b-button>
      <b-button size="sm" variant="primary" @click.stop="updateProfile(row.index)" title="Mettre à jour">Modifier</b-button>
    </template>
  </b-table>
  <b-pagination size="md" v-model="currentPage" :per-page="10">
    </b-pagination>
  </div>

</template>

<!-- ============================================================================ -->

<script>
import axios from 'axios';

export default {
  data () {
    return {
      fields: {
        name: {
          label: 'name',
          sortable: true
        },
        surname: {
          label: 'surname',
          sortable: false
        },
        float: {
          label: 'moyenne'
        },
        'email': {
          label: 'e-mail'
        },
        Action: {label: 'Action'}
      },
      array: [0],
      campus: "",
      uf: "",
      currentPage: 1
    }
  },
  created() {
    const i = this.$route.params.id1 - 1;
    const j = this.$route.params.id2;

    axios
      .get("http://localhost:3000/data/campus")
      .then(response => {
        this.campus = response.data[i].name;
        this.uf = response.data[i].uf[j].name;
        let camp = response.data[i].name.split(" ")[response.data[i].name.split(" ").length - 1].toLowerCase();
        axios
        .get("http://localhost:3000/data/"+camp+"_"+j)
        .then(response => {
          this.array = response.data;
        });
      });
  },
  methods: {
  routerLinkProfile(record) {
    this.$router.push({ path: this.$route.params.id2+'/profile/'+(record+1) });
  },
  deleteProfile(record) {
    const i = this.$route.params.id1 - 1;
    const j = this.$route.params.id2;

    axios
      .get("http://localhost:3000/data/campus")
      .then(response => {
        let camp = response.data[i].name.split(" ")[response.data[i].name.split(" ").length - 1].toLowerCase();
        //var data = {campus: camp, uf: j, student: record};
        //console.log(data);
        axios.delete("http://localhost:3000/delete/"+camp+"/"+j+"/"+record);
        window.location.reload();
      });
  },
  updateProfile(record){
    console.log("update "+record);
  },
  newProfile(){
    this.$router.push({ path: this.$route.params.id2+'/form'});
  }
  }
}
</script>

<!-- ============================================================================ -->

<style>
b-button{
  margin: 5px;
  width: 100px;
}
#newBtn{
  position:absolute;
  transition: .5s ease;
  top: 15%;
  left: 93%;
}
</style>
