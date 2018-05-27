<template>
  <div class="">
		<div class="col-12 col-lg-8 offset-lg-2 justify-content-center title-done mainDivHome">
			<div class="text-center header">The Devany family presents</div>
			<div class="text-center">
				The answer to the endless search for our family recipies
			</div>
		</div>
  	<home-search-results></home-search-results>
  </div>
</template>

<script>
import SearchResults from './SearchResults.vue'

export default {
	components: {
		homeSearchResults: SearchResults
	},
	created() {
		window.scroll(0,0);
	}
}
</script>

<style scoped>
	.mainDivHome {
		padding-top: 1rem;
		background-color: #e3e8ce;
		border-radius: 10px;
		border: 2px solid black;
	}

	.header {
		font-size: 2rem;
		font-weight: bold;
		font-family: Bauhaus93;
	}
</style>
