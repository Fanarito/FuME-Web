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
        <img v-bind:src="info.image.original" alt="" class="ui medium image">
      </div>
      <div class="eight wide column">
        <h1 class="ui heading">{{info.name}}</h1>
        <p>
          {{info.summary}}
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
        loading: true
      }
    },
    attached() {
      var $this = this;
      $.getJSON('http://django.fanarito.duckdns.org/api/show/' + this.$route.params.id, {
        format: 'json'
      }, function(json, textStatus) {
        $this.info = json.data.info;
        $this.seasons = json.data.seasons;
        $this.loading = false;
      });
    },
    detached() {
      this.info = {};
      this.seasons = [];
      this.loading = true;
    }
  }
</script>
