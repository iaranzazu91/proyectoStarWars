<template>
  <div class="container">

      <!-- Page Heading -->
      <h1 class="my-4">Star Wars People
        <small></small>
      </h1>

      <div class="row">
        <div class="col-lg-6 portfolio-item alert alert-dark" role="alert" v-for="people in people" :key="people.name_id">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" alt="" :src="'posters/'+people.name.split(' ').join('_').toLowerCase() + '.jpg'"></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ people.name }}</a>
              </h4>
                <p class="card-text alert alert-dark">Name: {{ people.name }}</p>
                <p class="card-text alert alert-dark">Lenguage: {{ people.language }}</p>
                <p class="card-text alert alert-dark">Films:

                <ul>
                  <film v-for="url in people.films" :key="url" :url="url"></film>
                </ul>
              </p>
              <p class="card-text alert alert-dark">Species:

                <ul>
                  <species v-for="url in people.species" :key="url" :url="url"></species>
                </ul>
              </p>
              <p class="card-text alert alert-dark">Planets:
                <ul>
                  <planet :url="people.homeworld"></planet>
                </ul>
              </p>
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
import Film from '../components/FilmEpisodeTitle.vue'
import Species from '../components/SpeciesName.vue'
import Planet from '../components/PlanetName.vue'
export default {
  name: 'People',
  mounted(){
    this.getPeople();
  },
  components: {
    'film': Film,
    'species': Species,
    'planet': Planet
  },

  data(){
    return{
      people:[]
    }
  },
  methods:{
    getPeople(){
      axios.get('https://swapi.co/api/people')
        .then((res)=>{
          console.log(res);
          this.people = res.data.results;
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