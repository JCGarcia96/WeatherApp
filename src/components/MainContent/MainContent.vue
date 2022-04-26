<template>
<div>
    <div class="row areaTitle" v-if="forecast.daily != undefined">
        <div class="col-sm-12 text-center">
            <h2>{{forecast.area.name}}, {{forecast.area.country}}
                <button type="button" v-if="favorited" @click="toggleFav()" class="btn btn-default btnFav">
                    <i class="bi bi-heart-fill"></i>
                    <!-- Es favorito -->
                </button>
                <button type="button" v-if="!favorited" @click="toggleFav()" class="btn btn-default btnFav">
                    <i class="bi bi-heart"></i>
                    <!-- No es favorito -->
                </button>
            </h2>
            
        </div>
    </div>
    <div class="row areaTitle" v-if="forecast.daily != undefined">
        <div class="col px-0" v-for="weather in forecast.daily.slice(0,7)" :key="weather.dt"> 
            <WeatherCard :dailyForecast="weather" :forecast="forecast"/>
        </div>
    </div>
</div>
</template>

<script>
import WeatherCard from '../WeatherCard/WeatherCard.vue'
export default {
    name: 'MainContent',
    components: {
        WeatherCard
    },
     props: {forecast: {}},
    data(){
        return{
            dataLoaded: false,
            favorited: false,
            favoriteCities: [],
        }
    },
    created(){
         this.favoriteCities = JSON.parse(localStorage.getItem('favoritedAreas')) ?? [];
    },
    methods:{
        openDetail(dateString){
            var hourlyDetail = this.forecast.hourly.filter(f => this.$moment(new Date(f.dt * 1000)).format('YYYY-MM-DD HH:mm:ss').includes(dateString));
            console.log(hourlyDetail);
        }, 
        toggleFav(){
            if(!this.favorited){
                this.favoriteCities.push(this.forecast.area);
                localStorage.setItem('favoritedAreas', JSON.stringify(this.favoriteCities));
            }else{
                this.favoriteCities = this.favoriteCities.filter(f => f.name !== this.forecast.area.name || f.country !== this.forecast.area.country);
                localStorage.setItem('favoritedAreas', JSON.stringify(this.favoriteCities));
            }
            this.favorited = !this.favorited;
            console.log('desde main content: l.59', this.favoriteCities)
            this.$emit('sendFavorites',this.favoriteCities);
        },
        checkIfFavorited(){
            this.favorited = this.favoriteCities.some(s => s.name === this.forecast.area.name && s.country === this.forecast.area.country);
        }
    },
    watch:{
        forecast(oldVal, newVal){
            if(oldVal !== newVal){
                this.checkIfFavorited();
            }
        }
    }
}
</script>

<style>
.areaTitle{
    margin-top: 20px;
}
.btnFav{
    color:red !important;
    transition: all .2s ease-in-out;
}

.btnFav:active{
    transform: scale(1.1);
}

.favorites{
    margin-top: 10px;
}

.weatherDescription{
    margin-top: 5px;
}
</style>