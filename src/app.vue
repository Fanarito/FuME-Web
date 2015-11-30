<template>
  <menu dropdownText="Home">
  </menu>
  <div class="ui bottom attached segment">
    <router-view
      keep-alive
    ></router-view>
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
