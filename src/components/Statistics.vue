<template>
  <div>
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


    <template>
  <div>
    <b-progress :value="counter" :max="max" show-progress animated></b-progress>
    <b-progress class="mt-1" :max="max" show-value>
      <b-progress-bar :value="counter*(6/10)" variant="success"></b-progress-bar>
      <b-progress-bar :value="counter*(2.5/10)" variant="warning"></b-progress-bar>
      <b-progress-bar :value="counter*(1.5/10)" variant="danger"></b-progress-bar>
    </b-progress>
    <b-btn class="mt-4" @click="clicked">Click me</b-btn>
  </div>
</template>


  </div>

</template>

<!-- ============================================================================ -->

<script>
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

<style scoped>

</style>