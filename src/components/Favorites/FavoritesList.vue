<template>
  <div>
    <div class="row">
      <div class="col-sm-4">
        <h3>Favorites</h3>
          <b-list-group v-for="favorite in favoriteCities" :key="favorite.name">
            <b-list-group-item class="favoriteItem" v-on:click="searchWeather(favorite.lat, favorite.lon, favorite.name, favorite.country)">{{favorite.name}}, {{favorite.country}}</b-list-group-item>
          </b-list-group>
      </div>
    </div>
</div>
</template>

<script>
// import WeatherService from '../../services/WeatherService'

export default {
  name: 'FavoritesList',
  props: {favoriteCities: []},
  components: {
    
  },
  data() {
    return{
      area: '',  
      weatherApi : 'http://localhost:5170/api/WeatherForecast/',
      }
  },
  created(){
    
  },
  methods: {
  
    searchWeather(lat, lon, name, country){
      var params = {lat: lat, lng: lon}
       var apiCall = this.weatherApi + `GetWeatherByArea`
      this.$http.post(apiCall,params).then(response => {
        console.log(response.body);
        if(response.body.length == 0){
          console.log('Empty Set')
        }else{
          response.body.area = {lat:lat,lon:lon,name:name,country:country};
          this.$emit('sendForecast',response.body)
        }
  
    }, response => {
      console.log(response)
    });
    }

  }
}
</script>

<style>
.favoriteItem:hover{
  cursor: pointer;
  transform: scale(1.05);
   z-index: 3;
    background-color: white !important;
}

.favoriteItem{
  transition: all .2s ease-in-out;
   background-color: #f7f7f7 !important;
}
</style>
