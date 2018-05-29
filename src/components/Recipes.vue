<template>
	<div class="row mainDivRecipes">
		<recipes-home-page v-if="this.$store.state.pageSelected === 'home'"></recipes-home-page>
		<recipes-search-page v-if="this.$store.state.pageSelected === 'search'"></recipes-search-page>
		<recipes-search-results-page v-if="this.$store.state.pageSelected === 'searchResults'"></recipes-search-results-page>
		<recipes-add-recipe-page v-if="this.$store.state.pageSelected === 'addRecipe'"></recipes-add-recipe-page>
	</div>
</template>

<script>
import Home from './Home.vue';
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
		recipesHomePage: Home,
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

	.mainDivRecipes {
		background: url('~../assets/stripesRed.jpg');
		background-size: contain;
		min-height: 100vh;
		padding: 3rem;
		margin: 0;
	}

</style>
