<style scoped>
  .ui.active.inverted.dimmer {
    height: 500px;
  }
</style>

<template>
  <div v-if="loading" class="ui active inverted dimmer">
    <div class="ui medium text loader">Loading</div>
  </div>
  <div v-if="!loading" class="ui mobile reversed equal width stackable grid">
    <div class="column">
      <div class="ui six stackable link cards">
        <moviecard v-for="movie in movies" :movie="movie" v-link="{ name: 'moviedetail', params: { id: movie.id } }"></moviecard>
      </div>
    </div>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    components: {
      moviecard: require('../components/movie_card')
    },
    data() {
      return {
        loading: true,
        movies: []
      }
    },
    methods: {

    },
    attached() {
      var $this = this;
      $.getJSON('http://django.fanarito.duckdns.org/api/movie/', {
        format: 'json'
      }, function(json, textStatus) {
        $this.movies = [];
        json.data.forEach(function(element, index) {
          $this.movies.push(element);
        });
        $this.loading = false;
      });
    },
    detached() {
      this.movies = []
    }
  }
</script>
