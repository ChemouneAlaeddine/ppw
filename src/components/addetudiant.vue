<template>

 <div>
      <h1>Ajouter un étudiant</h1>
      <form method="post" action="/form">
      <div class="form-group">
			<input type="text" name="name" placeholder="name" required>
            <input type="text" name="surname" placeholder="surname" required>
            <!--input type="text" name="nom_complet" placeholder="nom_complet" required-->
			<input type="email" name="email" placeholder="email" required>
            <input type="number" step="0.01" name="moyenne" placeholder="moyenne" required>
			<input type="submit" value="ajouter etudiant">
            </div>
</form>
  </div>
</template>

<script>

export default {
 /* data () {
      return {
      id: 0,
      nom: 0,
      prenom: 0,
      nom_complet: 0,
      email: 0,
      moyenne: 0
    }
    
  },*/
  

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
      items: [0]
    }
  },
  created() {
   /* this.$http.post("http://localhost:3000/addit")
            .then(response => {
                console.log(response);
    });*/
    /*axios.post('/url', {
  jsonData: JSON.stringify(data)
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});*/
  },
      
  }
</script>

<style scoped>
</style>