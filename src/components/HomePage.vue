<template>
  <div>
</div>
</template>

<script>

import axios from 'axios';
import facs from './../../server/facs.json'

export default {
  name: 'HomePage',
  data () {
  var mymap = L.map('mapid').setView([44.8101, -0.6413], 13);
  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);
  
  var longitude = facs.campus;
  //L.marker([44.8101, -0.6413]).addTo(mymap)
  //  .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

  mymap.on('click', onMapClick);
  }
}
</script>

<style scoped>
h1,h2 {font-weight: normal;}
ul {list-style-type: none;padding: 0;}
li {display: inline-block;margin: 0 10px;}
a {color: #42b983;}
</style>
