<style scoped>

</style>

<template>
  <div class="row">
    <div class="four wide column">
      <img v-bind:src="poster" alt="" class="ui medium image">
    </div>
    <div class="eight wide column">
      <h1 class="ui heading">{{movie.original_title}}</h1>
      <p>
        {{movie.overview}}
      </p>
      <div class="ui divider"></div>
      IMDB Rating: <div class="ui star rating {{movie.id}}"></div>
      <div class="ui divider"></div>
      <div class="ui icon buttons">
        <button v-link="{ name: 'movieplayer', params: { id: movie.id, hour: 0, min: 0, sec: 0 } }" class="ui green button"><i class="white play icon"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
  //var $ = window.jQuery;
  export default {
    props: {
      movie: {
        type: Object
      }
    },
    methods: {
      playVideo: function () {
        this.$dispatch('playVideo');
      }
    },
    computed: {
      poster: function () {
        return "http://fume.fanarito.duckdns.org/images" + this.$data.movie.poster_path;
      }
    },
    ready() {
      $('.' + this.movie.id)
        .rating({
          initialRating: Math.round(this.$data.movie.vote_average),
          maxRating: 10
        })
        .rating('disable');
    }
  }
</script>
