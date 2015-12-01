<style scoped>

</style>

<template>
    <div class="card">
      <div class="image">
        <img :src="show.image.original">
      </div>
      <div class="content">
        <a class="header">{{ show.name }}</a>
        <div class="meta">
          <span class="date">
            Premiered: {{ show.premiered }}
          </span>
        </div>
        <div class="description">
          <div class="ui star rating {{show.id}}"></div>
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
      $('.' + this.show.id)
        .rating({
          initialRating: Math.round(this.$data.show.rating.average/2),
          maxRating: 5
        })
        .rating('disable');
    }
  }
</script>
