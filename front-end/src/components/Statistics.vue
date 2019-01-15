<template>
  <div class="small">
    <h1><center> Statistiques des campus </center></h1>
    <!-- b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
      Dismissible Alert!
    </b-alert>

    <b-alert :show="dismissCountDown"
             dismissible
             variant="warning"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
      <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
      <b-progress variant="warning"
                  :max="dismissSecs"
                  :value="dismissCountDown"
                  height="4px">
      </b-progress>
    </b-alert>

    <b-btn @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-btn>
    <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
    </b-btn -->

  <column-chart id="columnchart" :data="campData"></column-chart>

  <pie-chart id="piechart" :data="campData"></pie-chart>

  <line-chart id="linechart" :data="campData"></line-chart>
  </div>
</template>

<!-- ============================================================================ -->

<script>
import 'vue-chartkick';
import 'chart.js';
import axios from 'axios';

export default {
  data () {
    return {
      /*counter: 45,
      max: 100,
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,*/
      allData: [],
      campData: []
    }
  },
  mounted() {
      axios
      .get("http://localhost:3000/data/campus")
      .then(response => {
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
        console.log(this.allData);
        console.log(this.campData);
      });
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<!-- ============================================================================ -->

<style>
#linechart{
  max-width: 950px;
  max-height: 200px;
  position:absolute;
  top: 65%;
  left: 12%;
}
#columnchart{
  max-width: 600px;
  max-height: 250px;
  position:absolute;
  top: 20%;
  left: 12%;
}
#piechart{
  max-width: 300px;
  max-height: 250px;
  position:absolute;
  top: 20%;
  left: 64%;
}
</style>