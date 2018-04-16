<template>
  <div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link to="/" class="nav-brand"> <h1> Star Wars Project </h1></router-link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <router-link to="/films" class="nav-link">Films</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/planets" class="nav-link">Planets</router-link>

            </li>
            <li class="nav-item">
              <router-link to="/starships" class="nav-link">Starships</router-link>

            </li>
                        <li class="nav-item">
              <router-link to="/people" class="nav-link">People</router-link>
            </li>
                        <li class="nav-item">
              <router-link to="/vehicles" class="nav-link">Vehicles</router-link>      
                    </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>

</style>
