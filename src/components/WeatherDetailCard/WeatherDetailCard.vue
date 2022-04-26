<template>
    <div>
  <b-card class="align-left weatherCard">
    <h6 class="card-title">{{hourInfo.dt * 1000 | moment('MMM DD')}} <span class="hour">{{hourInfo.dt * 1000 | moment('HH:mm')}}</span></h6>
      <div id="icon"><img id="wicon" :src="'http://openweathermap.org/img/w/' + hourInfo.weather[0].icon + '.png'" alt="Weather icon"></div>
      <div><span class="maxTemp">{{hourInfo.temp}}°C</span></div>
      <div class="weatherDetails">
          <div>Wind: {{hourInfo.windSpeed}} km/h</div>
          <div>Humidity: {{hourInfo.humidity}}%</div>
       </div>
       <h6 class="weatherDescription">{{hourInfo.weather[0].main}}</h6>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'WeatherCardDetail',
  components: {
  },
  props:{
      hourInfo: {}
  }
}
</script>

<style>
.dayPart{
    color:#00bed4;
    margin-bottom: 0;
}

.maxTemp{
    font-size: 30px;
    color: black;
}

.minTemp{
    font-size: 20px;
    color:gray;
    vertical-align: top;
}

.weatherDetails{
    color:gray;
    font-size: 12px;
}

.hour{
    color: #d13848
}
</style>
