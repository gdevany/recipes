<template>
		<div class="col-12 justify-content-center">
			<div class="col-12 col-lg-10 offset-lg-1 mainDivHome">
				<div class="text-center header">The Devany family recipes</div>
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
	 	border: 7px inset #fd9355;
		margin-bottom: 2rem;
	}

	.header {
		font-size: 2.5rem;
		font-weight: bold;
		font-family: Bauhaus93;
	}
</style>
