<style scoped>
  .seasons {
    max-height: 500px;
    overflow-y: scroll;
  }
</style>

<template>
  <div class="row inforow">
    <div class="four wide column">
      <img v-bind:src="info.image.original" alt="" class="ui medium image">
    </div>
    <div class="eight wide column">
      <h1 class="ui heading">{{info.name}}</h1>
      <p>
        {{info.summary}}
      </p>
      <div class="ui divider"></div>
      Average rating:
      <div class="ui star rating {{info.id}}"></div>
    </div>
    <div class="four wide column seasons">
      <div class="ui huge divided selection list">
        <div v-for="season in seasons" @click="getEpisodes(season.season, $event)" class="item">Season {{ season.season }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    props: {
      info: {
        type: Object
      },
      seasons: {
        type: Array
      }
    },
    methods: {
      getEpisodes: function(season, e) {
        $(e.target).toggleClass('active');
        $('.item').removeClass('active');
        this.$dispatch('closeEpisodeDetail');
        this.$dispatch("getEpisodes", season, e)
      }
    },
    ready() {
      $('.' + this.info.id)
        .rating({
          initialRating: Math.round(this.$data.info.rating.average),
          maxRating: 10
        })
        .rating('disable');
    }
  }
</script>
