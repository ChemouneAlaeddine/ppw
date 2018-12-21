<template>
  <b-table striped hover :items="campus" :fields="fields"></b-table>
</template>

<!-- ============================================================================ -->

<script>
import facs from './../../server/facs.json'
export default {
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: {
        name: {
          label: 'name',
          sortable: true
        }
      },
      campus: facs.campus
    }
  }
}
</script>

<!-- ============================================================================ -->