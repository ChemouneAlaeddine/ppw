<template>
  <b-table striped hover :items="items" :fields="fields"></b-table>
</template>

<!-- ============================================================================ -->

<script>
import my_json from './../../server/test.json'
export default {
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
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
        }
      },
      items: my_json.items
    }
  }
}
</script>
