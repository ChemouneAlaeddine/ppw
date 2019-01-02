<template>
	<div>
	  <h1 id="tit">Campus</h1>

	  <b-table striped hover :items="campus" :fields="fields" @row-clicked="routerLinkToDetails">

	  <template slot="action" slot-scope="row">
	        <b-button size="sm" @row-clicked="routerLinkToDetails">Détails</b-button>
	  </template>

	  </b-table>

	</div>
</template>

<!-- ============================================================================ -->

<script>

import campus from './../../server/campus.json';
import $ from 'jquery';


export default {
  data () {
  	var pathArray = window.location.pathname.split('/');
	var indexCampus = pathArray[2]-1;
	var str = "<h1>"+campus.campus[indexCampus].name+"</h1>";

	$(document).ready(function() {
	    $("#tit").replaceWith(str);
	});
    return {
      fields: {
        name: {label: 'Unité de formation',sortable: true},
        action: {label: 'Action'}
      },
      campus: campus.campus[indexCampus].uf
    }
  },
  methods: {
  routerLinkToDetails(record, index) {
    this.$router.push({ path: '/list' });
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