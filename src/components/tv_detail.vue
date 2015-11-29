<style scoped>

</style>

<template>
  <h1 class="ui centered header">{{show.name}}</h1>
</template>

<script>
  export default {
    props: {
      show: {
        type: Object
      }
    },
    ready() {
      console.log(this.$data);
    }
  }
</script>
