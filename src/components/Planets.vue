<template>
  <div class="container">

      <!-- Page Heading -->
      <h1 class="my-4">Star Wars Planets
        <small></small>
      </h1>

      <div class="row">
        <div class="col-lg-6 portfolio-item alert alert-dark" role="alert" v-for="planet in planets" :key="planet.name_id">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" alt="" :src="'posters/'+planet.name.split(' ').join('_').toLowerCase() + '.jpg'"></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ planet.name }}</a>
              </h4>
                <p class="card-text alert alert-dark">Name: {{ planet.name }}</p>
                <p class="card-text alert alert-dark">Diameter: {{ planet.diameter }}</p>
                <p class="card-text alert alert-dark">Climate: {{ planet.climate }}</p>
                <p class="card-text alert alert-dark">Terrain: {{ planet.terrain }}</p>
                <p class="card-text alert alert-dark">Surface Water {{ planet.surface_water }}</p>
                <p class="card-text alert alert-dark">Population: {{ planet.population }}</p>

            </div>
          </div>
        </div>
      </div>
      <br>
      <!-- /.row -->



    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Planets',
  mounted(){
    this.getPlanets();
  },
  data(){
    return{
      planets:[]
    }
  },
  methods:{
    getPlanets(){
      axios.get('https://swapi.co/api/planets')
        .then((res)=>{
          console.log(res);
          this.planets = res.data.results;
        })
        .catch((err)=> {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>

</style>