<template>
  <div>
  <b-button size="sm" @click.stop="newProfile" class="mr-2">New</b-button>
  <b-table striped hover :items="array" :fields="fields">

    <template slot="action" slot-scope="row">
      <b-button size="sm" @click.stop="routerLinkProfile(row.index)">Profile</b-button>
      <b-button size="sm" variant="danger" @click.stop="deleteProfile(row.index)">Retirer</b-button>
    </template>

  </b-table>
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
        action: {label: 'action'}
      },
      array: [0]
    }
  },
  created() {
    var i = this.$route.params.id1 - 1;
    var j = this.$route.params.id2;

    axios
      .get("http://localhost:3000/data/campus")
      .then(response => {
        var camp = response.data[i].name.split(" ")[response.data[i].name.split(" ").length - 1].toLowerCase();
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
    var i = this.$route.params.id1 - 1;
    var j = this.$route.params.id2;

    axios
      .get("http://localhost:3000/data/campus")
      .then(response => {
        var camp = response.data[i].name.split(" ")[response.data[i].name.split(" ").length - 1].toLowerCase();
        var data = {campus: camp, uf: j, student: record};
        console.log(data);
        axios.delete("http://localhost:3000/delete/"+camp+"/"+j+"/"+record);
        window.location.reload();
      });
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
</style>
