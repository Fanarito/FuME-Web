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
    <movieinfo :movie="movie"></movieinfo>
  </div>
</template>

<script>
  //var $ = window.jQuery;
  export default {
    components: {
      movieinfo: require('../components/movie_info')
    },
    data() {
      return {
        loading: true,
        movie: {}
      }
    },
    attached() {
      var $this = this;
      this.movie = {};
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
