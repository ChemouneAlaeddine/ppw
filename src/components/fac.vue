<template>
	<div>
      <h1>{{ camp }}</h1>
      <b-table striped hover :items="ufs" :fields="fields" @row-clicked="routerLinkToDetails">
      <template slot="action">
      <b-button size="sm" @row-clicked="routerLinkToDetails">Détails</b-button>
      </template>
      </b-table>
	</div>
</template>

<!-- ============================================================================ -->

<script>

export default {
  data () {
    return {
      camp: 0,
      fields: {
        name: {label: 'Unité de formation',sortable: true},
        action: {label: 'Action'}
      },
      ufs: [0]
    }
  },
  created(){
    var i = this.$route.params.id - 1;
    this.$http.get("http://localhost:3000/campus")
            .then(response => {
                this.ufs = response.body.campus[i].uf;
                this.camp = this.ufs.name;
    });
  },
  methods: {
  routerLinkToDetails(record, index) {
    this.$router.push({ path: this.$route.params.id+'/list/'+index });
  }
  }
}

</script>

<!-- ============================================================================ -->

<style scoped>

</style>