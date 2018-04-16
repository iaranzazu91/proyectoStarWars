<template>
  <div class="container">

      <!-- Page Heading -->
      <h1 class="my-4">Star Wars Films
        <small></small>
      </h1>

      <div class="row">
        <div class="col-lg-6 portfolio-item alert alert-dark" role="alert" v-for="film in films" :key="film.episode_id">
          <div class="card h-100" >
            <a href="#"><img class="card-img-top" alt="" :src="'posters/'+film.title.split(' ').join('_').toLowerCase() + '.jpg'" height="700px"></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">{{ film.title }}</a>
              </h4>
              <p class="card-text alert alert-dark">Episode {{ film.episode_id }}</p>
              <p class="card-text alert alert-dark">Director: {{ film.director }}</p>
              <p class="card-text alert alert-dark">Release Date: {{ film.release_date }}</p>
              <p class="card-text alert alert-dark">Producer: {{ film.producer }}</p>
              <p class="card-text alert alert-dark">{{ film.opening_crawl }}</p>
              <p class="card-text alert alert-dark">Personajes:

                <ul>
                  <character-name v-for="url in film.characters" :key="url" :url="url"></character-name>
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
import CharacterName from '../components/CharacterName.vue'
export default {
  name: 'Films',
  mounted(){
    this.getFilms()
  },
  components: {
    'character-name': CharacterName
  },
  data(){
    return{
      films:[]
    }
  },
  methods:{
    getFilms(){
      axios.get('https://swapi.co/api/films')
      .then((res)=>{
        console.log(res)
        this.films = res.data.results
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
