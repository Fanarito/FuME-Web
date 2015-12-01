<style scoped>
.main-view{
  top: 20px;
}
</style>

<template>
  <menu dropdownText="Home">
  </menu>
  <div class="ui segment main-view">
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
  export default {
    components: {
      menu: require('./components/menu')
    },
    data() {
      return {
        dropdownText: 'Home'
      }
    },
    methods: {

    },
    ready() {

    }
  }
</script>
