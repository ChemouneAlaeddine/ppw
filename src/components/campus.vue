<template>
  <b-table striped hover :items="campus" :fields="fields" @row-clicked="routerLinkToDetails">

  <template slot="action">
        <b-button size="sm" @row-clicked="routerLinkToDetails">Détails</b-button>
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
        name: {label: 'name',sortable: true},
        action: {label: 'Action'}
      },
      campus: [0]
    }
  },
  created() {
    axios
      .get('http://localhost:3000/campus')
      .then(response => (this.campus = response.data.campus));
  },
  methods: {
  routerLinkToDetails(record, index) {
    this.$router.push({ path: '/fac/'+(index+1) });
  }
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>
b-table{width:50%;}
</style>
