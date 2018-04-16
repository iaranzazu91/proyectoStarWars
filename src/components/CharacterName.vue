<template>
    <li><h5>{{ character.name }}</h5></li>
</template>
<script>
import axios from 'axios'
export default {
  name: 'characterName',
  props: ['url'],
  mounted(){
      this.getCharacter()
  },
  data: function(){
      return {
          character: {}
      }
  },
  methods: {
      getCharacter(){
          axios.get(this.url)
            .then((res) => {
                console.log(res.data)
                this.character = res.data
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>
