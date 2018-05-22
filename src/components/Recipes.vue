<template>
	<div class="row">
		<h1
			v-if="this.$store.getters.getPageSelected === 'home'"
			class="col-12 text-center">Home
		</h1>
		<recipes-search-page v-if="this.$store.state.pageSelected === 'search'"></recipes-search-page>
		<recipes-search-results-page v-if="this.$store.state.pageSelected === 'searchResults'"></recipes-search-results-page>
		<recipes-add-recipe-page v-if="this.$store.state.pageSelected === 'addRecipe'"></recipes-add-recipe-page>

	</div>
</template>

<script>
import Search from './Search.vue';
import SearchResults from './SearchResults.vue';
import AddRecipe from './AddRecipe.vue';


import { mapActions } from 'vuex';

export default {
	data() {
		return {

		}
	},
	computed: {
		getMessage() {
			return this.$store.getters.getPageSelected
		}
	},
	methods: {
		...mapActions([
			'setPage'
		])
	},
	components: {
		recipesSearchPage: Search,
		recipesSearchResultsPage: SearchResults,
		recipesAddRecipePage: AddRecipe
	}
}
</script>

<style lang="scss">
button {
	margin: 20px;
}
</style>
