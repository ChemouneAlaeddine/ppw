<template>
  <div class="circular" v-bind:style="{ 'background-image': '/home/chemoune/Bureau/bck.jpg' }"></div>
  <!-- b-table striped hover :items="items" :fields="fields"></b-table -->
</template>

<!-- ============================================================================ -->

<script>
import my_json from './../../server/test1.json'
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
