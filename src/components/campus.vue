<template>
  <b-table striped hover :items="campus" :fields="fields" @row-clicked="routerLinkToDetails">

  <template slot="action">
        <b-button size="sm" @row-clicked="routerLinkToDetails">Détails</b-button>
  </template>

  </b-table>
</template>

<!-- ============================================================================ -->

<script>
import campus from './../../server/campus.json'
export default {
  data () {
    return {
      fields: {
        name: {label: 'name',sortable: true},
        action: {label: 'Action'}
      },
      campus: campus.campus
    }
  },
  methods: {
  routerLinkToDetails(record, index) {
    this.$router.push({ path: '/fac/'+index });
  }
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>
b-table{width:50%;}
</style>
