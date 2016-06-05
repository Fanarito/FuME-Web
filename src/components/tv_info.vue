<style scoped>
 .seasons {
     max-height: 500px;
     overflow-y: scroll;
 }
</style>

<template>
    <div class="row inforow">
	<div class="four wide column">
	    <img v-bind:src="poster" alt="" class="ui medium image">
	</div>
	<div class="eight wide column">
	    <h1 class="ui heading">{{info.name}}</h1>
	    <p>
		{{info.overview}}
	    </p>
	    <div class="ui divider"></div>
	    Average rating:
	    <div class="ui star rating {{info.id}}"></div>
	</div>
	<div class="four wide column seasons">
	    <div class="ui huge divided selection list">
		<div v-for="season in seasons" @click="getEpisodes(season.season_number, $event)" class="item">Season {{ season.season_number }}</div>
	    </div>
	</div>
    </div>
</template>

<script>
 //var $ = window.jQuery;
 export default {
     props: {
	 info: {
             type: Object
	 },
	 seasons: {
             type: Array
	 }
     },
     methods: {
	 getEpisodes: function(season, e) {
             $(e.target).toggleClass('active');
             $('.item').removeClass('active');
             this.$dispatch('closeEpisodeDetail');
             this.$dispatch("getEpisodes", season, e)
	 }
     },
     computed: {
	 poster: function () {
             return "http://fume.fanarito.com/images" + this.info.poster_path;
	 }
     },
     ready() {
	 var $this = this;
	 console.log(this.info);
	 $('.' + this.info.id)
             .rating({
		 initialRating: Math.round($this.info.vote_average),
		 maxRating: 10
             })
             .rating('disable');
     }
 }
</script>
