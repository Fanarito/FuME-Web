<style scoped>
  #showView {
    width: 100%;
  }
</style>

<template>
  <div class="ui mobile reversed equal width stackable grid">
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
        shows: [
          {
            name: 'undefined',
            summary: 'undefined',
            short_summary: 'undefined',
            image: {
              original: 'undefined'
            },
            premiered: 'undefined',
            rating: 5
          }
        ]
      }
    },
    methods: {

    },
    created() {
      var $this = this;
      $.getJSON('http://django.fanarito.duckdns.org/api/show/', {
        format: 'json'
      }, function(json, textStatus) {
        $this.shows = [];
        json.data.forEach(function(element, index){
          $this.shows.push(element);
        });
      });
    },
    ready() {
      console.log(this.show);
    }
  }
</script>
