<style scoped>

</style>

<template>
  <div class="three wide column">
    <div class="ui link card">
      <div class="image">
        <img v-bind:src="show.image.original">
      </div>
      <div class="content">
        <a class="header">{{ show.name }}</a>
        <div class="meta">
          <span class="date">
            Premiered: {{ show.premiered }}
          </span>
        </div>
        <div class="description">
          <div class="ui star rating"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    props: {
      show: {
        type: Object
      }
    },
    methods: {

    },
    computed: {
      rating: function() {
        var rating = this.$data.show.rating.average;
        return Math.floor(rating);
      }
    },
    ready() {
      $('.rating')
        .rating({
          initialRating: Math.floor(this.$data.show.rating.average)/2,
          maxRating: 5
        });
    }
  }
</script>
