<template>
  <div class="container">

      <!-- Page Heading -->
      <h1 class="my-4">Star Wars Starships
        <small></small>
      </h1>

      <div class="row">
        <div class="col-lg-6 portfolio-item alert alert-dark" role="alert" v-for="starship in starships" :key="starship.name_id">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" alt="" :src="'posters/'+starship.name.split(' ').join('_').toLowerCase() + '.jpg'"></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ starship.name }}</a>
              </h4>
                <p class="card-text alert alert-dark">Name: {{ starship.name }}</p>
                <p class="card-text alert alert-dark">Model: {{ starship.model }}</p>
                <p class="card-text alert alert-dark">Manufacturer: {{ starship.manufacturer }}</p>
                <p class="card-text alert alert-dark">Crew: {{ starship.crew }}</p>
                <p class="card-text alert alert-dark">Passengers: {{ starship.passengers }}</p>

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
  name: 'Starships',
  mounted(){
    this.getStarships();
  },
  data(){
    return{
      starships:[]
    }
  },
  methods:{
    getStarships(){
      axios.get('https://swapi.co/api/starships')
        .then((res)=>{
          console.log(res);
          this.starships = res.data.results;
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