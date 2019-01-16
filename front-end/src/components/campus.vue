<template>
  <b-table striped hover :items="campus" :fields="fields">

  <template slot="Action" slot-scope="row">
        <b-button size="sm" @click.stop="routerLinkToDetails(row.index)">Liste des UF's</b-button>
  </template>

  </b-table>
</template>

<!-- ============================================================================ -->

<script>
import axios from 'axios';

export default {
  data () {
    return {
      fields: {
        name: {label: 'Liste des campus',sortable: true},
        Action: {label: 'Action'}
      },
      campus: [0]
    }
  },
  created() {
    axios
      .get('http://localhost:3000/data/campus')
      .then(response => {
        this.campus = response.data;
        });
  },
  methods: {
  routerLinkToDetails(index) {
    this.$router.push({ path: '/ufs/'+(index+1) });
  }
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>
b-table{width:50%;}
</style>
