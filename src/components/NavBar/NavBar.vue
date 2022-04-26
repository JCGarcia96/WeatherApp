<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="myNav" variant="info">
    <b-navbar-brand href="#">Weather App - Trimble</b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2"  v-model="area" placeholder="Search by city/zip code"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" v-on:click="searchArea" type="button">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
// import WeatherService from '../../services/WeatherService'

export default {
 
  name: 'NavBar',
  components: {
    
  },
  data() {
    return{
      area: '',  
      weatherApi : 'http://localhost:5170/api/WeatherForecast/',
      geolocationApi: 'http://localhost:5170/api/Geolocation/',
      areaInfo: {}
      }
  },
  methods: {
    searchArea(){
      var apiCall = this.geolocationApi + `GetCityLatLng?cityName=${this.area}`
      this.$http.get(apiCall).then(response => {
      if(response.body.length == 0){
        this.searchZipCode(this.area);
      }else{
        var areaFound = response.body.find(f => f.name == this.area);
        this.areaInfo = areaFound;
        this.searchWeather(areaFound);
      }
  
    }, response => {
      console.log(response)
    });
    },
    searchZipCode(){
      var apiCall = this.geolocationApi + `GetZipCodeLatLng?zipCode=${this.area}`
            this.$http.get(apiCall).then(response => {
              this.areaInfo = response.body;
              this.searchWeather(response.body);
          }, response => {
            console.log(response)
          });
    },
    searchWeather(latlng){
      var params = {lat: latlng.lat, lng: latlng.lon}
       var apiCall = this.weatherApi + `GetWeatherByArea`
       console.log(latlng)
      this.$http.post(apiCall,params).then(response => {
        console.log(response.body);
        if(response.body.length == 0){
          console.log('Empty Set')
        }else{
          response.body.area = this.areaInfo;
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
.myNav{
    background-color: #d13848 !important;
}
</style>
