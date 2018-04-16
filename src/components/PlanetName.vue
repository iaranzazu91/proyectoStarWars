<template>
    <li><h5>{{ planet.name }}</h5></li>
</template>
<script>
import axios from 'axios'
export default {
  name: 'planetsName',
  props: ['url'],
  mounted(){
      this.getPlanet()
  },
  data: function(){
      return {
          planet: {}
      }
  },
  methods: {
      getPlanet(){
          axios.get(this.url)
            .then((res) => {
                console.log(res.data)
                this.planet = res.data
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>
