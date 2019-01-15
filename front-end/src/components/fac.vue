<template>
	<div>
      <h1>{{ camp }}</h1>
      <b-table striped hover :items="ufs" :fields="fields">
      <template slot="action" slot-scope="row">
      <b-button size="sm" @click.stop="routerLinkToDetails(row.index)">Détails</b-button>
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
      camp: 0,
      fields: {
        name: {label: 'Unité de formation',sortable: true},
        action: {label: 'Action'}
      },
      ufs: [0]
    }
  },
  created(){
    var i = this.$route.params.id - 1;

    axios
      .get('http://localhost:3000/data/campus')
      .then(response => {
        this.ufs = response.data[i].uf;
        this.camp = this.ufs.name;
      });
  },
  methods: {
  routerLinkToDetails(index) {
    this.$router.push({ path: this.$route.params.id+'/list/'+index });
  }
  }
}

</script>

<!-- ============================================================================ -->

<style scoped>

</style>