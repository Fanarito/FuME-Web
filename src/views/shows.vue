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
      <div class="ui stackable grid">
        <tvcard v-for="show in shows" :show="show" v-link="{ name: 'showdetail', params: { id: show.id } }"></tvcard>
      </div>
    </div>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    components: {
      tvcard: require('../components/tv_card')
    },
    data() {
      return {
        loading: true
      }
    },
    methods: {

    },
    attached() {
      var $this = this;
      $.getJSON('http://django.fanarito.duckdns.org/api/show/', {
        format: 'json'
      }, function(json, textStatus) {
        $this.shows = [];
        json.data.forEach(function(element, index){
          $this.shows.push(element);
        });
        $this.loading = false;
      });
    },
    detached() {
      this.shows = []
    }
  }
</script>
