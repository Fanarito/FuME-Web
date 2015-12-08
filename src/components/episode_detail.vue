<style scoped>
  .blurred {
    -webkit-transition: 800ms -webkit-filter ease, 800ms filter ease;
    transition: 800ms filter ease;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }

  .blurred:hover {
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
    filter: blur(0px);
  }

  .circular.ui.inverted.red.icon.button {
    position: absolute;
    top: 5px;
    right: 5px;
  }
</style>

<template>
  <h1 class="header">{{episode.name}}</h1>
  <button @click="close" class="circular ui inverted red icon button"><i class="close icon"></i></button>
  <div class="ui styled accordion">
    <div class="title">
      <i class="dropdown icon"></i>
      Plot
    </div>
    <div class="content">{{episode.summary}}</div>
  </div>
</template>
<script>
  //var $ = window.jQuery;

  export default {
    props: {
      episode: {
        type: Object
      }
    },
    methods: {
      close: function() {
        this.$dispatch('closeEpisodeDetail');
      }
    },
    computed: {

    },
    ready() {
      $('.ui.accordion').accordion();
    }
  }
</script>
