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

  <column-chart id="columnchart" :data="[['camp1', 32], ['camp2', 46], ['camp3', 28], ['camp4', 38], ['camp5', 50]]"></column-chart>

  <pie-chart id="piechart" :data="[['camp1', 44], ['camp2', 23], ['camp3', 19], ['camp4', 5], ['camp5', 20]]"></pie-chart>

  <line-chart id="linechart" :data="{'uf1': 2, 'uf2': 5, 'uf3': 7, 'uf4': 3, 'uf5': 6, 'uf6': 2, 'uf7': 5}"></line-chart>

  </div>
</template>

<!-- ============================================================================ -->

<script>
import 'vue-chartkick';
import 'chart.js';

export default {
  data () {
    return {
      counter: 45,
      max: 100,
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
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
  max-width: 500px;
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