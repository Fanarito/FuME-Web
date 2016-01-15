<style scoped>
  #video {
    width: 100%;
  }

  .video-js {
    padding-top: 56.25%
  }
</style>

<template>
  <div class="ui container">
    <video id="video" class="video-js" autoplay controls preload="none" poster="{{poster}}">
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
      </p>
    </video>
  </div>
</template>

<script>
  //videojs = require('video.js');
  export default {
    data() {
        return {
          player: null,
          available: false
        }
      },
      computed: {
        videoUrl: function() {
          return "http://fume.fanarito.duckdns.org/play/movies/" + this.$route.params.id;
        }
      },
      events: {},
      attached() {
        this.$data.player = videojs("video", {}, function() {
          // Player (this) is initialized and ready.
        });
        this.$data.player.src([{
          type: "video/webm",
          src: "http://fume.fanarito.duckdns.org/play/movies/" + this.$route.params.id
        }]);
        console.log(this.$data.available);
      },
      created() {

      },
      detached() {
        this.$data.player.src([{
          type: "video/webm",
          src: "http://fume.fanarito.duckdns.org/videos/stopStream.webm"
        }]);
      }
  }
</script>
