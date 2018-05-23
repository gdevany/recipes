<template>
	<div class="row mainDivRecipe">
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
			// bgImage: require("../assets/deserts.png")
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

<style scoped>
	button {
		margin: 20px;
	}

	.mainDivRecipe {
		/* background-image: url(require("../assets/deserts.png")); */
		/* background-color: #42aba85e; */
		min-height: 100vh;
		padding: 10px;
		margin: 10px;
	}

</style>
