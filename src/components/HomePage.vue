<template>
  <div id="map">
</div>
</template>

<!-- ============================================================================ -->

<script>

import axios from 'axios';
import facs from './../../server/facs.json'

export default {
  data () {
  var mymap = L.map('mapid').setView([44.8193401,-0.5956083], 13);
  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mymap);
  
  for (let i = 0; i < 6; i++) {
      let webPage = "/fac/"+facs.campus[i].index;
      L.marker([facs.campus[i].longitude, facs.campus[i].laltitude]).on('click', function markerOnClick(){location.href = webPage;}).addTo(mymap).bindPopup("<a href="+webPage+">"+facs.campus[i].name+"</a>", {autoClose:false}).openPopup(); 
  }
  
  return {
    mymap
  }
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>
h1,h2 {font-weight: normal;}
ul {list-style-type: none;padding: 0;}
li {display: inline-block;margin: 0 10px;}
a {color: #42b983;}
</style>
