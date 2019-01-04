<template>
  <b-table striped hover :items="items" :fields="fields" @row-clicked="routerLinkProfile">

  <template slot="action">
          <b-button size="sm" @row-clicked="routerLinkProfile">Profile</b-button>
    </template>
    </b-table>

</template>

<!-- ============================================================================ -->

<script>
import my_json from './../../server/test.json';
//import $ from 'jquery';

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
      items: my_json.items
    }
  },
  created() {
    this.$http.get("http://localhost:3000/it")
            .then(response => {
                console.log(response);
    });
  },
  methods: {
  routerLinkProfile(record, index) {
    this.$router.push({ path: '/profile/'+index+'/'+my_json.items[index].name+'/'+my_json.items[index].surname });
  }
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>

</style>