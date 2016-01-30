<style scoped>

</style>

<template>
  <div v-for="episode in episodes" class="mobile sixteen wide eight wide computer column">
    <div class="ui fluid link card" @click="selectEpisode(episode)">
      <div class="content">
        <div class="header">{{episode.name}}</div>
        <div class="meta">Season {{episode.season_number}} - Episode {{episode.episode_number}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  //var $ = window.jQuery;

  export default {
    props: {
      episodes: {
        type: Array
      }
    },
    methods: {
      selectEpisode: function (episode) {
        this.$dispatch("selectEpisode", episode)
      }
    },
    computed: {

    },
    ready() {

    }
  }
</script>
