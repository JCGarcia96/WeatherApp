<template>
  <div id="app">
    <NavBar @sendForecast="getForecast"/>
    <MainContent :forecast="forecast" @sendFavorites="refreshFavorites"/>
    <hr/>
    <FavoritesList :favoriteCities="favoriteCities" @sendForecast="getForecast"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import FavoritesList from './components/Favorites/FavoritesList.vue'
import MainContent from './components/MainContent/MainContent.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FavoritesList,
    MainContent
  },
  data(){
    return{
      favoriteCities: [],
      forecast: {}
    }
  },
  created(){
    this.favoriteCities = JSON.parse(localStorage.getItem('favoritedAreas')) ?? [];
  },
  methods: {
    getForecast (data){
        this.forecast = data;
      },
      refreshFavorites(favoriteCities){
        console.log(favoriteCities);
        this.favoriteCities = favoriteCities;
      }
  }
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
