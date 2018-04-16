<template>
    <li><h5>{{ species.name }}</h5></li>
</template>
<script>
import axios from 'axios'
export default {
  name: 'speciesName',
  props: ['url'],
  mounted(){
      this.getSpecies()
  },
  data: function(){
      return {
          species: {}
      }
  },
  methods: {
      getSpecies(){
          axios.get(this.url)
            .then((res) => {
                console.log(res.data)
                this.species = res.data
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>
