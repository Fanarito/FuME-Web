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
        <tvcard v-for="show in shows" v-link="{ name: 'showdetail', params: { id: show.id } }" :show="show"></tvcard>
      </div>
    </div>
  </div>
</template>

<script>
  //var $ = window.jQuery;
  export default {
    components: {
      tvcard: require('../components/tv_card')
    },
    data() {
      return {
        loading: true,
        shows: []
      }
    },
    methods: {
      getShows: function () {
        var $this = this;
        $.getJSON('http://fume.fanarito.com/shows/', {
          format: 'json'
        }, function(json, textStatus) {
          $this.shows = json;
          $this.loading = false;
        });
      }
    },
    attached() {
      this.getShows();
    },
    detached() {
      this.shows = []
    }
  }
</script>
