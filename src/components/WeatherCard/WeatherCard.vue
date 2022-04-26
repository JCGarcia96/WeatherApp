<template>
    <div class="weatherForecast">
  <b-card class="align-left weatherCard">
    <h6 class="card-title dayPart">{{dailyForecast.dt * 1000 | moment("ddd")}}</h6>
      <h6 class="card-title">{{dailyForecast.dt * 1000 | moment("MMM DD")}}</h6>
      <div id="icon"><img id="wicon" :src="'http://openweathermap.org/img/w/' + dailyForecast.weather[0].icon + '.png'" alt="Weather icon"></div>
      <div><span class="maxTemp">{{dailyForecast.temp.max}}°</span><span class="minTemp">/{{dailyForecast.temp.min}}°C</span></div>
      <div class="weatherDetails">
          <div>Wind: {{dailyForecast.windSpeed}} km/h</div>
          <div>Humidity: {{dailyForecast.humidity}}%</div>
       </div>
       <h6 class="weatherDescription">{{dailyForecast.weather[0].main}}</h6>
      <a @click="openDetail()" class="card-link detailLink">More</a>
  </b-card>

  <b-modal ref="detailModal" hide-footer title="Hourly Details">
    <div class="row" v-if="hasInfo">
        <div class="col-sm-12" v-for="hour in hourlyDetail" :key="hour.dt">
            <WeatherDetailCard :hourInfo="hour"/>
        </div>
    </div>
    <div class="row" v-if="!hasInfo">
        <div class="col-sm-12">
            <h4>No info to show!</h4>
        </div>
    </div>
  </b-modal>
</div>
</template>

<script>
import WeatherDetailCard from '../WeatherDetailCard/WeatherDetailCard.vue'
export default {
  name: 'WeatherCard',
  components: {
      WeatherDetailCard
  },
  props:{
      dailyForecast: {},
      forecast: {}
  },
  data(){
    return{
      favoriteCities: [],
      hasInfo: false,
      hourlyDetail: []
    }
  },
  created(){
  },
  methods:{
      openDetail(){
        var date = this.$moment(new Date(this.dailyForecast.dt * 1000)).format('YYYY-MM-DD');
        this.hourlyDetail = this.forecast.hourly.filter(f => this.$moment(new Date(f.dt * 1000)).format('YYYY-MM-DD HH:mm:ss').includes(date));
        this.hasInfo = this.hourlyDetail.length > 0;
       this.$refs['detailModal'].show();
      }
  }

}
</script>

<style>
 .weatherForecast{
    margin-top: 20px !important;
}

.weatherCard:hover{
    transform:scale(1.1);
    z-index: 3;
    background-color: white;
}

.weatherCard{
    transition: all .2s ease-in-out; 
    background-color: #f7f7f7;
}

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

.detailLink{
    color: #d13848;
}

.detailLink:hover{
    cursor: pointer;
}
.align-left{
    text-align: left;
}
</style>
