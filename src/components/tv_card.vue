<style scoped>

</style>

<template>
    <div class="card">
	<div class="image">
            <img :src="poster">
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
 //var $ = window.jQuery;
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
             var rating = this.show.vote_average;
             return Math.floor(rating);
	 },
	 poster: function () {
             return "http://fume.fanarito.com/images" + this.show.poster_path;
	 }
     },
     ready() {
	 var $this = this;
	 $('.' + this.show.id)
             .rating({
		 initialRating: Math.round($this.show.vote_average/2),
		 maxRating: 5
             })
             .rating('disable');
     }
 }
</script>
