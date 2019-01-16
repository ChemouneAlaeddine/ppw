<template>
  <div id="mapid">
  </div>
</template>

<!-- ============================================================================ -->

<script>
import L from 'leaflet';
import axios from 'axios';

export default {
  data () {
  var mapid = L.map('mapid').setView([44.8193401,-0.5956083], 13);
  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
  }).addTo(mapid);
  
  axios
      .get("http://localhost:3000/data/campus")
      .then(response => {
        var campus = response.data;
        for (let i=0; i< campus.length; i++) {
            let webPage = "/ufs/"+campus[i].index;
            L.marker([campus[i].longitude, campus[i].laltitude]).on('click', function markerOnClick(){location.href = webPage;}).addTo(mapid).bindPopup("<a href="+webPage+">"+campus[i].name+"</a>", {autoClose:false}).openPopup(); 
        }
      });

  return {
    mapid
  }
  }
}
</script>

<!-- ============================================================================ -->

<style scoped>
a {color: #42b983;}
</style>