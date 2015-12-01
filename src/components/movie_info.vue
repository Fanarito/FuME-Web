<style scoped>

</style>

<template>
  <div class="row">
    <div class="four wide column">
      <img v-bind:src="movie.Poster" alt="" class="ui medium image">
    </div>
    <div class="eight wide column">
      <h1 class="ui heading">{{movie.Title}}</h1>
      <p>
        {{movie.Plot}}
      </p>
      <div class="ui divider"></div>
      IMDB Rating: <div class="ui star rating {{movie.id}}"></div>
    </div>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    props: {
      movie: {
        type: Object
      }
    },
    methods: {
    },
    ready() {
      $('.' + this.movie.id)
        .rating({
          initialRating: Math.round(this.$data.movie.imdbRating),
          maxRating: 10
        })
        .rating('disable');
    }
  }
</script>
