<template>
  <div>
  <h1><center> Statistiques des campus </center></h1>

  <column-chart id="columnchart" title="Effectif des campus" :data="campData"></column-chart>
  
  <pie-chart id="piechart" title="Effectif des campus" :data="campData"></pie-chart>

  <line-chart id="linechart" title="Taux de réussite" :data="campData"></line-chart>
  
  </div>
</template>

<!-- ============================================================================ -->

<script>
import 'vue-chartkick';
import 'chart.js';
//import axios from 'axios';

export default {
  data () {
    return {
      // Static data
      succData:[["Campus Talence", 601],["Campus Victoire", 348],["Campus Carreire", 420],["Campus Pessac", 350],["Campus de la Bastide", 324]],

      allData: [],

      campData:[["Campus Talence", 853],["Campus Victoire", 422],["Campus Carreire", 459],["Campus Pessac", 482],["Campus de la Bastide", 355]]
    }
  },
  mounted() {
    //================================= await problem ==========================================
      /*axios
      .get("http://localhost:3000/data/campus").then(response => {
        let idx = 0;
        for(let i=0; i<response.data.length; i++){
          let camp = response.data[i].name.split(" ")[response.data[i].name.split(" ").length - 1].toLowerCase();
          let numUfs = response.data[i].uf.length;
          let elem = {campus: response.data[i].name, uf: []};
          let elem_camp = [response.data[i].name, 0];
          let idx2 = 0;
          for(let j=0; j<numUfs; j++){
            axios
            .get("http://localhost:3000/data/"+camp+"_"+j)
            .then(response1 => {
              let passed = 0;
              for(let k=0; k<response1.data.length; k++){
                if(response1.data[k].float >= 10)
                  passed++;
              }
              elem.uf[idx2++] = {name: response.data[i].uf[j].name, total: response1.data.length, reussi: passed};
              elem_camp[1] += response1.data.length;
            });
          }
          this.campData[idx] = elem_camp;
          this.allData[idx++] = elem;
        }
        console.log(this.campData);
      });*/
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
    },
  }

</script>

<!-- ============================================================================ -->

<style>
#linechart{
  max-width: 980px;
  max-height: 250px;
  position:absolute;
  top: 58%;
  left: 15%;
}
#columnchart{
  max-width: 600px;
  max-height: 250px;
  position:absolute;
  top: 18%;
  left: 12%;
}
#piechart{
  max-width: 300px;
  max-height: 250px;
  position:absolute;
  top: 18%;
  left: 64%;
}
</style>