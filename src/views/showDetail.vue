<style scoped>
  .ui.active.inverted.dimmer {
    height: 500px;
  }

  .ui.active.inverted.dimmer.episodes {
    height: 300px;
    margin-top: 15px;
  }
</style>

<template>
  <div v-if="loading" class="ui active inverted dimmer">
    <div class="ui medium text loader">Loading</div>
  </div>
  <div v-if="!loading" class="ui internally celled grid">
    <div class="row">
      <div class="four wide column">
        <img v-bind:src="info.image.original" alt="" class="ui medium image">
      </div>
      <div class="eight wide column">
        <h1 class="ui heading">{{info.name}}</h1>
        <p>
          {{info.summary}}
        </p>
      </div>
      <div class="four wide column">
        <div class="ui large divided selection list">
          <div v-for="season in seasons" @click="getEpisodes(season.season, $event)" class="item">Season {{ season.season }}</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="episodesLoading" class="ui active inverted dimmer episodes">
        <div class="ui medium text loader">Loading</div>
      </div>
      <div v-show="selectedSeason">
        <p v-for="episode in episodes" track_by="id">{{episode.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    components: {
      seasoncard: require('../components/season_card')
    },
    data() {
      return {
        showId: this.$route.params.id,
        loading: true,
        info: {},
        episodesLoading: false,
        selectedSeason: false,
        episodes: []
      }
    },
    methods: {
      loadInfo: function () {
        var $this = this;
        // Show the loader
        this.loading = true;
        // Make sure the route is the new route
        this.showId = this.$route.params.id;
        // Make sure there are no left over episodes if you have already viewed this view
        this.episodes = [];
        // Get show info
        $.getJSON('http://django.fanarito.duckdns.org/api/show/' + this.showId, {
          format: 'json'
        }, function(json, textStatus) {
          $this.info = json.data.info;
          $this.seasons = json.data.seasons;
          $this.loading = false;
        });
      },
      getEpisodes: function(season, e) {
        $('.ui.large.divided.selection.list > .item').removeClass('active');
        $(e.target).toggleClass('active');
        this.episodesLoading = true;

        var seasons = this.seasons.length;
        var $this = this;

        this.episodes = [];

        $.getJSON('http://django.fanarito.duckdns.org/api/show/' + this.showId + '/' + season, {
          format: 'json'
        }, function(json, textStatus) {
          json.forEach(function(element, index){
            $this.episodes.push(element);
          });
          $this.selectedSeason = true;
          $this.episodesLoading = false;
        });
      }
    },
    attached() {
      this.loadInfo();
    },
    detached() {
    }
  }
</script>
