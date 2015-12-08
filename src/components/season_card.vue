<style scoped>

</style>

<template>
  <div class="ui link card">
    <div class="content">
      <div class="header">{{season}}</div>
    </div>
  </div>
</template>

<script>
  //var $ = window.jQuery;
  export default {
    props: {
      season: {
        type: Number
      }
    },
    methods: {

    },
    computed: {},
    ready() {

    }
  }
</script>
