<style scoped>
</style>

<template>
    <div class="card">
	<div class="image">
            <img :src="poster">
	</div>
	<div class="content">
            <a class="header">{{ movie.original_title }}</a>
            <div class="meta">
		<span class="date">
		    Premiered: {{ movie.release_date }}
		</span>
            </div>
            <div class="description">
		<div class="ui star rating {{movie.id}}"></div>
            </div>
	</div>
    </div>
</template>

<script>
 //var $ = window.jQuery;

 export default {
     props: {
	 movie: {
             type: Object
	 }
     },
     methods: {

     },
     computed: {
	 poster: function () {
             return "http://fume.fanarito.com/images" + this.movie.poster_path;
	 }
     },
     ready() {
	 console.log(this.movie);
	 var rating = this.movie.vote_average;
	 var $this = this;
	 // rating /= 2;
	 rating = Math.round(rating/2);
	 $('.' + $this.movie.id)
             .rating({
		 initialRating: rating,
		 maxRating: 5
             });
     }
 }
</script>
