<style scoped>

</style>

<template>
  <div class="ui fixed menu">
    <a class="item" v-link="{ path: '/' }" @click="goHome()">
      <i class="home icon"></i>
    </a>
    <div class="ui dropdown item">
      <div class="text">{{menuText}}</div>
      <i class="dropdown icon"></i>
      <div class="menu">
        <div class="item" v-link="{ path: '/' }">
          Home
        </div>
        <div class="item" v-link="{ path: '/movies' }">
          Movies
        </div>
        <div class="item" v-link="{ path: '/shows' }">
          TV Shows
        </div>
      </div>
    </div>
    <div class="right menu">
      <div class="ui right aligned category search item">
        <div class="ui transparent icon input">
          <input class="prompt" type="text" placeholder="Search...">
          <i class="search link icon"></i>
        </div>
        <div class="results"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuText: "Home"
      }
    },
    methods: {
      goHome: function() {
        $('.ui.dropdown')
          .dropdown('set selected', "Home");
      }
    },
    ready() {
      var path = this.$route.path;
      path = path.split('/')

      if (path[1] === "shows") {
        $('.ui.dropdown')
          .dropdown('set selected', "TV Shows");
      } else if (path[1] === "movies") {
        $('.ui.dropdown')
          .dropdown('set selected', "Movies");
      } else {
        $('.ui.dropdown')
          .dropdown('set selected', "Home");
      }
    }
  }
</script>
