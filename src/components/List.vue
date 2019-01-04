<template>
  <b-table striped hover :items="array" :fields="fields" @row-clicked="routerLinkProfile">

  <template slot="action">
          <b-button size="sm" @row-clicked="routerLinkProfile">Profile</b-button>
    </template>
    </b-table>

</template>

<!-- ============================================================================ -->

<script>
//import my_json from './../../server/test.json';
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
      array: [0]
    }
  },
  created() {
    this.$http.get("http://localhost:3000/it")
            .then(response => {
                this.array = response.body.it;
    });
    var i = this.$route.params.id;
    console.log("valeur "+i);
  },
  methods: {
  routerLinkProfile(record, index) {
    this.$router.push({ path: '/profile/'+index+'/'+this.array[index].name+'/'+this.array[index].surname });
  }
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>

</style>