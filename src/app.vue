<template>
  <div class="ui top attached menu">
    <div class="ui dropdown item">
      <div class="text">{{dropdownText}}</div>
      <i class="dropdown icon"></i>
      <div class="menu">
        <div class="item" v-link="{ path: '/' }">
          Home
        </div>
        <div class="item" v-link="{ path: '/movies' }">
          Movies
        </div>
        <div class="item" v-link="{ path: '/shows' }">
          TV Shows
        </div>
      </div>
    </div>
    <div class="right menu">
      <div class="ui right aligned category search item">
        <div class="ui transparent icon input">
          <input class="prompt" type="text" placeholder="Search...">
          <i class="search link icon"></i>
        </div>
        <div class="results"></div>
      </div>
    </div>
  </div>
  <div class="ui bottom attached segment">
    <router-view
      keep-alive
      transition
      transition-mode="out-in"


    ></router-view>
  </div>
</template>

<script>
  var $ = window.jQuery;
  export default {
    data() {
      return {
        dropdownText: 'Home'
      }
      },
      methods: {

      },
      ready() {
        $('.ui.dropdown')
          .dropdown();
      }
  }
</script>
