<template>
  <div>
  <b-button size="sm" @click.stop="newProfile" class="mr-2">New</b-button>
  <b-table striped hover :items="array" :fields="fields" @row-clicked="routerLinkProfile">

  <template slot="action">
          <b-button size="sm" @row-clicked="routerLinkProfile">Profile</b-button>
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
        action: {label: 'Action'}
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
  routerLinkProfile(record, index) {
    this.$router.push({ path: this.$route.params.id2+'/profile/'+(index+1) });
  },
  newProfile(){
    this.$router.push({ path: this.$route.params.id2+'/form'});
  }
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>

</style>
