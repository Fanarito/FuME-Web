<style scoped>
 .ui.active.inverted.dimmer {
     height: 500px;
 }
</style>

<template>
    <div v-if="loading" class="ui active inverted dimmer">
	<div class="ui medium text loader">Loading</div>
    </div>
    <div v-if="!loading" class="ui mobile reversed equal width stackable grid">
	<div class="column">
	    <div class="ui six stackable inverted link cards">
		<moviecard v-for="movie in movies" :movie="movie" v-link="{ name: 'moviedetail', params: { id: movie.id } }"></moviecard>
	    </div>
	</div>
    </div>
</template>

<script>
 //var $ = window.jQuery;
 export default {
     components: {
	 moviecard: require('../components/movie_card')
     },
     data() {
	 return {
             loading: true,
             movies: []
	 };
     },
     methods: {
	 getMovies: function() {
             var $this = this;
             $.getJSON('http://fume.fanarito.com/movies/', {
		 format: 'json'
             }, function(json, textStatus) {
		 console.log(json);
		 $this.movies = json;
		 $this.loading = false;
             });
	 }
     },
     attached() {
	 this.getMovies();
     },
     detached() {
	 this.movies = [];
     }
 };
</script>
