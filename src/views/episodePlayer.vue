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
      <!--track src="http://fume.fanarito.com/subtitles/43590e8b-af37-48c5-91ad-6447617f8c2e.vtt" kind="subtitles" srclang="en" label="English" /-->
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
          return "http://fume.fanarito.com/play/episode/" + this.$route.params.id;
        }
      },
      events: {},
      attached() {
        this.$data.player = videojs("video", {}, function() {
          // Player (this) is initialized and ready.
        });
        if (this.$route.params.subtitles > 0){
          this.$data.player.src([{
            type: "video/webm",
            src: "http://fume.fanarito.com/play/episode/" + this.$route.params.id
          }]);
          /*this.$data.player.track([{
            kind: "subtitles",
            src: "http://fume.fanarito.com/subtitles/43590e8b-af37-48c5-91ad-6447617f8c2e.vtt"
          }]);*/
        } else {
          this.$data.player.src([{
            type: "video/webm",
            src: "http://fume.fanarito.com/play/episode/" + this.$route.params.id
          }]);
        }
      },
      created() {

      },
      detached() {
        this.$data.player.src([{
          type: "video/webm",
          src: "http://fume.fanarito.com/videos/stopStream.webm"
        }]);
      }
  }
</script>
