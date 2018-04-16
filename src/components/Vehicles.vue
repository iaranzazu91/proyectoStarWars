<template>
  <div class="container">

      <!-- Page Heading -->
      <h1 class="my-4">Star Wars Vehicles
        <small></small>
      </h1>

      <div class="row">
        <div class="col-lg-6 portfolio-item alert alert-dark" role="alert" v-for="vehicles in vehicles" :key="vehicles.name_id">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" alt="" :src="'posters/'+vehicles.name.split(' ').join('_').toLowerCase() + '.jpg'"></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ vehicles.name }}</a>
              </h4>
                <p class="card-text alert alert-dark">Name: {{ vehicles.name }}</p>
                <p class="card-text alert alert-dark">Model: {{ vehicles.model }}</p>
                <p class="card-text alert alert-dark">Length: {{ vehicles.lenghth }}</p>
                <p class="card-text alert alert-dark">Crew: {{ vehicles.crew }}</p>
                <p class="card-text alert alert-dark">Passengers: {{ vehicles.passengers }}</p>
                <p class="card-text alert alert-dark">Vehicle Class: {{ vehicles.vehicle_class }}</p>


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
  name: 'Vehicles',
  mounted(){
    this.getVehicles();
  },
  data(){
    return{
      vehicles:[]
    }
  },
  methods:{
    getVehicles(){
      axios.get('https://swapi.co/api/vehicles')
        .then((res)=>{
          console.log(res);
          this.vehicles = res.data.results;
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