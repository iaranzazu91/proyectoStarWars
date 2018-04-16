<template>
    <li>
        <ul>
            <li><h5>Titulo: {{ film.title }}</h5></li>
            <li><h5>Episode: {{ film.episode_id }}</h5></li>
        </ul>
    </li>
</template>
<script>
import axios from 'axios'
export default {
  name: 'filmDetails',
  props: ['url'],
  mounted(){
      this.getFilm()
  },
  data: function(){
      return {
          film: {}
      }
  },
  methods: {
      getFilm(){
          axios.get(this.url)
            .then((res) => {
                console.log(res.data)
                this.film = res.data
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>
