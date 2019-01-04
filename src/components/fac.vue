<template>
	<div>
    <h1>{{ camp }}</h1>
	  <b-table striped hover :items="campus" :fields="fields" @row-clicked="routerLinkToDetails">
	  <template slot="action">
    <b-button size="sm" @row-clicked="routerLinkToDetails">Détails</b-button>
	  </template>
    </b-table>
	</div>
</template>

<!-- ============================================================================ -->

<script>

import campus from './../../server/campus.json';
import $ from 'jquery';

//var i = this.$route.params.id - 1;

export default {
  data () {
    return {
      camp: 0,
      fields: {
        name: {label: 'Unité de formation',sortable: true},
        action: {label: 'Action'}
      },
      campus: campus.campus[this.$route.params.id - 1].uf
    }
  },
  created(){
      this.camp = campus.campus[this.$route.params.id - 1].name;
  },
  methods: {
  routerLinkToDetails(record, index) {
    this.$router.push({ path: '/list/'+index });
  }
  }
}

</script>

<!-- ============================================================================ -->

<style lang="stylus" scoped>
body
  background-image: url('./../../server/images/bck.jpg');
  background-repeat: no-repeat;
  background-size: 1300px 650px;
</style>