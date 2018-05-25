<template>
  <div class="col-12 justify-content-center mainDivHome">
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
		width: 100%;
	}
</style>
