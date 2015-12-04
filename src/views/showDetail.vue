<style scoped>
  .ui.active.inverted.dimmer {
    height: 500px;
  }

  .ui.active.inverted.dimmer.episodes {
    height: 70px;
    margin-top: 15px;
  }
</style>

<template>
  <!-- Loading animation -->
  <div v-if="loading" class="ui active inverted dimmer">
    <div class="ui medium text loader">Loading</div>
  </div>
  <div v-if="!loading" class="ui internally celled centered grid">
    <!-- Show info -->
    <tvinfo v-on:getEpisodes :info="info" :seasons="seasons"></tvinfo>

    <div class="row">
      <!-- Loading animation -->
      <div v-if="episodesLoading" class="ui active inverted dimmer episodes">
        <div class="ui medium text loader">Loading</div>
      </div>
      <!-- Episode cards -->
      <div v-show="selectedSeason" class="eight wide column">
        <div class="ui centered grid">
          <episodecards v-on:selectEpisode :episodes="episodes"></episodecards>
        </div>
      </div>
      <!-- Episode details -->
      <div v-if="selectedEpisode" class="eight wide column">
        <episodedetail v-on:closeEpisodeDetail :episode="selectedEpisode"></episodedetail>
      </div>
    </div>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    components: {
      episodedetail: require('../components/episode_detail'),
      episodecards: require('../components/episode_cards'),
      tvinfo: require('../components/tv_info')
    },
    data() {
      return {
        showId: this.$route.params.id,
        loading: true,
        info: {},
        episodesLoading: false,
        selectedSeason: false,
        episodes: [],
        selectedEpisode: false,
        seasons: {}
      }
    },
    methods: {
      loadInfo: function() {
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
          if (json.data.info.summary) {
            json.data.info.summary = json.data.info.summary.replace(/(<([^>]+)>)/ig, "");
          }
          $this.info = json.data.info;
          $this.seasons = json.data.seasons;
          console.log($this.seasons);
          $this.loading = false;
        });
      }
    },
    events: {
      selectEpisode: function(episode) {
        this.selectedEpisode = episode;
      },
      closeEpisodeDetail: function() {
        this.selectedEpisode = null;
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
          json.forEach(function(element, index) {
            if (element.summary) {
              element.summary = element.summary.replace(/(<([^>]+)>)/ig, "");
            }
            $this.episodes.push(element);
          });
          $this.selectedSeason = true;
          $this.episodesLoading = false;
        });
      },
    },
    attached() {
      this.loadInfo();
    },
    detached() {
      this.selectedEpisode = null;
    }
  }
</script>
