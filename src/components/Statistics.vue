<template>
  <!-- div>
    <b-alert show>Default Alert</b-alert>

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
    </b-btn>
  </div -->


  <div class="col-lg-6">
    <!-- Example Full-Bg Line -->
    <div class="example-wrap">
      <h4 class="example-title">Full-Bg Line</h4>
      <div class="example example-responsive">
        <div class="w-xs-400" id="exampleFlotFullBg" style="padding: 0px; position: relative;"><canvas class="flot-base" width="435" height="300" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 435px; height: 300px;"></canvas><div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);"><div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;"><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 408px; text-align: center;">Dec</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 26px; text-align: center;">Jan</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 61px; text-align: center;">Feb</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 93px; text-align: center;">Mar</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 130px; text-align: center;">Apr</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 162px; text-align: center;">May</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 199px; text-align: center;">Jun</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 235px; text-align: center;">Jul</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 268px; text-align: center;">Aug</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 304px; text-align: center;">Sep</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 339px; text-align: center;">Oct</div><div style="position: absolute; max-width: 31px; top: 284px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 373px; text-align: center;">Nov</div></div><div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;"><div style="position: absolute; top: 271px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 23px; text-align: right;">0</div><div style="position: absolute; top: 226px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 8px; text-align: right;">500</div><div style="position: absolute; top: 181px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 0px; text-align: right;">1000</div><div style="position: absolute; top: 136px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 0px; text-align: right;">1500</div><div style="position: absolute; top: 90px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 0px; text-align: right;">2000</div><div style="position: absolute; top: 45px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 0px; text-align: right;">2500</div><div style="position: absolute; top: 0px; font: 300 14px/16px Roboto, sans-serif; color: rgb(71, 78, 84); left: 0px; text-align: right;">3000</div></div></div><canvas class="flot-overlay" width="435" height="300" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 435px; height: 300px;"></canvas></div>
      </div>
    </div>
    <!-- End Example Full-Bg Line -->
  </div>


</template>

<!-- ============================================================================ -->

<script>
export default {
  data () {
    return {
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

<style scoped>

</style>