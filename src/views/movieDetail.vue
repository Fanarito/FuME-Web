<style scoped>
  .ui.active.inverted.dimmer {
    height: 500px;
  }
</style>

<template>
  <div v-if="loading" class="ui active inverted dimmer">
    <div class="ui medium text loader">Loading</div>
  </div>
  <div v-if="!loading" class="ui internally celled grid">
    <div class="row">
      <div class="four wide column">
        <img v-bind:src="movie.Poster" alt="" class="ui medium image">
      </div>
      <div class="eight wide column">
        <h1 class="ui heading">{{movie.Title}}</h1>
        <p>
          {{movie.Plot}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    components: {

    },
    data() {
      return {
        loading: true,
        movie: {}
      }
    },
    attached() {
      var $this = this;
      $.getJSON('http://django.fanarito.duckdns.org/api/movie/' + this.$route.params.id, {
        format: 'json'
      }, function(json, textStatus) {
        $this.movie = json;
        $this.loading = false;
      });
    },
    detached() {
      this.movie = {};
      this.loading = true;
    }
  }
</script>
