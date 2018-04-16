<template>
<div class="col-md-12">
    <nav aria-label="Page navigation example">
    <ul>
      <li>Total:    {{ count }}</li>
      <li>Next:     {{ next }}</li>
      <li>Previous: {{ previous }}</li>
      <li>Total Paginas: {{ Math.ceil(count / 10) }}</li>
    </ul>
    <ul class="pagination">
      <li class="page-item" :class="previous == null ? 'disabled' : '' "><a class="page-link" href="#" @click="getPrevious()">Previous</a></li>
      <li class="page-item" :class="pagina == page? 'active': '' " v-for="page in Math.ceil(count / 10)" :key="'pagina'+page"><a class="page-link" href="#" @click="getPage(ruta, page)">{{ page }}<span class="sr-only">(current)</span></a></li>
      <li class="page-item" :class="next == null ? 'disabled' : '' "><a class="page-link" href="#" @click="getNext()">Next</a></li>
    </ul>
  </nav>
</div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["count", "next", "previous", "ruta"],
  data: function(){
    return {
        pagina: 1,
    }
  },
  methods: {
      getNext: function (){
          console.log('Call next')
          this.pagina += 1
          this.$parent.getResponse(this.next)
      },
      getPrevious: function (){
          console.log('Call previous')
          this.pagina -= 1
          this.$parent.getResponse(this.previous)
      },
      getPage: function(path, pag){
          this.pagina = pag
          this.$parent.getResponse(path+'?page='+pag)
      }
  }
};
</script>