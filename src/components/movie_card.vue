<style scoped>

</style>

<template>
  <div class="three wide column">
    <div class="ui card">
      <div class="image">
        <img :src="movie.Poster">
      </div>
      <div class="content">
        <a class="header">{{ movie.Title }}</a>
        <div class="meta">
          <span class="date">
            Premiered: {{ movie.Released }}
          </span>
        </div>
        <div class="description">
          <div class="ui star rating {{movie.id}}"></div>
        </div>
      </div>
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
    computed: {

    },
    ready() {
      var rating = this.$data.movie.imdbRating;
      // rating /= 2;
      rating = Math.round(rating);
      $('.' + this.movie.id)
        .rating({
          initialRating: rating,
          maxRating: 10
        });
    }
  }
</script>
